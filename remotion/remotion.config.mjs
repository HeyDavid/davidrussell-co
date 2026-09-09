import { Config } from "@remotion/cli/config";

Config.setEntryPoint("./src/index.ts");
// 2x so cards land at 2400x1260, matching the existing public/og-*.png set.
Config.setScale(2);
