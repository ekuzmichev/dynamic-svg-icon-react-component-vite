import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import htmlPurge from "vite-plugin-purgecss";
import simpleHtmlPlugin from "vite-plugin-simple-html";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    simpleHtmlPlugin(),
    htmlPurge(),
    react({
      include: "**/*.{jsx,tsx}",
    }),
    svgr(),
  ],
});