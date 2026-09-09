/**
 * Build-time only. Renders one 2400x1260 social card per published essay into
 * ../public/og/<slug>.png.
 *
 * This never runs in CI and nothing in the Astro build imports Remotion — the
 * PNGs are committed and served as plain static files, so the page weight a
 * visitor downloads is unchanged. OG images are fetched by link-preview
 * crawlers only, never by the browser rendering the page.
 *
 *   cd remotion && npm run og
 */
import { bundle } from "@remotion/bundler";
import { selectComposition, renderStill } from "@remotion/renderer";
import matter from "gray-matter";
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(here, "..");
const contentDir = path.join(repo, "src", "content", "writing");
const outDir = path.join(repo, "public", "og");

const only = process.argv.slice(2).filter((a) => !a.startsWith("-"));

const monthYear = (d) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short", timeZone: "UTC" });

const posts = [];
for (const file of (await fs.readdir(contentDir)).filter((f) => f.endsWith(".md"))) {
  const slug = file.replace(/\.md$/, "");
  if (only.length && !only.includes(slug)) continue;
  const { data } = matter(await fs.readFile(path.join(contentDir, file), "utf8"));
  if (data.draft) {
    console.log(`skip  ${slug} (draft)`);
    continue;
  }
  posts.push({
    slug,
    title: String(data.title ?? slug),
    description: String(data.description ?? ""),
    format: String(data.format ?? "essay"),
    readTime: String(data.readTime ?? ""),
    dateLabel: data.publishDate ? monthYear(data.publishDate) : "",
  });
}

if (!posts.length) {
  console.error("No posts matched.");
  process.exit(1);
}

console.log(`Bundling…`);
const serveUrl = await bundle({
  entryPoint: path.join(here, "src", "index.ts"),
  onProgress: () => {},
});

await fs.mkdir(outDir, { recursive: true });

for (const post of posts) {
  const { slug, ...inputProps } = post;
  const composition = await selectComposition({ serveUrl, id: "OgPost", inputProps });
  const output = path.join(outDir, `${slug}.png`);
  await renderStill({
    composition,
    serveUrl,
    output,
    inputProps,
    imageFormat: "png",
    scale: 2,
    overwrite: true,
  });
  const { size } = await fs.stat(output);
  console.log(`ok    /og/${slug}.png  ${(size / 1024).toFixed(0)} KB`);
}

console.log(`\nRendered ${posts.length} card(s) into public/og/.`);
