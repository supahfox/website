import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    site: "https://supahfox.live",
    base: "/",
    integrations: [sitemap(), svelte(), mdx()],
    /*
    output: "server",
    adapter: cloudflare(),
    vite: {
        build: {
            sourcemap: true
        }
    },
    markdown: {
        syntaxHighlight: "prism"
    },
    */
});
