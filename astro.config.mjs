import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap';
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

export default defineConfig({
    site: 'https://supahfox.live',
    base: '/website',
    integrations: [sitemap(), svelte(), mdx()],
    output: "server",
    vite: {
        build: {
            sourcemap: true
        }
    },
    markdown: {
        syntaxHighlight: "prism"
    },
});
