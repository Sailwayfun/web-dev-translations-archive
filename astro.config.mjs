import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  integrations: [mdx()],

  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      theme: 'rose-pine-dawn',
    },
  },

  adapter: cloudflare(),
})