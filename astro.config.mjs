import {
	defineConfig,
	passthroughImageService,
	sharpImageService,
	squooshImageService,
} from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import deno from "@astrojs/deno"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"
import slug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

export default defineConfig({
	site: "https://an.cyou",
	// site: 'http://localhost:4321',
	integrations: [
		react(),
		mdx({
			rehypePlugins: [slug, [rehypeAutolinkHeadings, { behavior: "wrap" }]],
		}),
		sitemap({
			serialize(item) {
				// TODO filter draft blog
				if (/priv/.test(item.url)) {
					return undefined
				}
				return item
			},
		}),
		tailwind(),
	],
	output: "server",
	adapter: deno({
		// imageService: "passthrough",
	}),
	vite: {
		optimizeDeps: {
			entries: ["eslint/lib/linter/linter", "react-dev"],
			disabled: false,
			esbuildOptions: {
				loader: {
					".js": "jsx",
				},
			},
			include: [
				// 'eslint/lib/linter',
				"react-dev > eslint/lib/linter",
				"react",
				"react-dom",
				"anser",
				"lz-string",
				"escape-carriage",
				"classnames",
			],
		},
		resolve: {
			preserveSymlinks: true,
			alias: {
				"../../../../tailwind.config": `${process.cwd()}/internal/react-dev/tailwind.config.js`,
			},
		},
		build: {
			onLog(level, log, handler) {
				if (log.cause) {
					// biome-ignore lint/suspicious/noConsoleLog: <explanation>
					console.log(log.cause)
					return
				}
				handler(level, log)
			},
		},
	},
	image: {
		// service: import.meta.env.PROD
		// 	? sharpImageService()
		// 	: passthroughImageService(),
	},
	markdown: {
		shikiConfig: {
			theme: "github-light",
			langs: [],
			wrap: true,
		},
		rehypePlugins: [slug, rehypeAutolinkHeadings],
	},
})
