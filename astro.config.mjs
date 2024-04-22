import {defineConfig} from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import deno from '@astrojs/deno';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import slug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

// https://astro.build/config
export default defineConfig({
  site: 'https://ann.deno.dev',
  // site: 'http://localhost:4321',
  integrations: [
    react(),
    mdx({
      rehypePlugins: [slug, [rehypeAutolinkHeadings, {behavior: 'wrap'}]],
    }),
    sitemap(),
    tailwind(),
  ],
  output: 'server',
  adapter: deno(),
  vite: {
    optimizeDeps: {
      entries: ['eslint/lib/linter'],
      esbuildOptions: {
        loader: {
          '.js': 'jsx',
        },
      },
      include: [
        // 'eslint/lib/linter',
        'react-dev > eslint/lib/linter',
        'react',
        'react-dom',
        'anser',
        'lz-string',
        'escape-carriage',
        'classnames',
      ]
    },
    resolve: {
      preserveSymlinks: true,
      alias: {
        '../../../../tailwind.config': '/Users/anduc/projects/blog/internal/react-dev/tailwind.config.js'
      }
    },
  },
  image: {},
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      langs: [],
      wrap: true
    },
    rehypePlugins: [slug, rehypeAutolinkHeadings],
  },
});
