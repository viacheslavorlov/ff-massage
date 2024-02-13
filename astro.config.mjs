import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: "http://localhost:4321/dist",
  integrations: [tailwind(), icon(), preact()]
});