import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const posts = (
    await getCollection(
      "writing",
      ({ data }) => !data.draft && data.status !== "coming-soon"
    )
  ).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());

  return rss({
    title: "David Russell: writing",
    description:
      "Essays and notes from a solo operator and writer in South Florida.",
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description ?? "",
      pubDate: post.data.publishDate,
      link: `/writing/${post.id}/`,
    })),
    customData: "<language>en-us</language>",
  });
}
