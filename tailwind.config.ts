// @ts-ignore
import theme from './internal/react-dev/tailwind.config.js'
import generated from '@tailwindcss/typography'
import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/react-dev/src/components/MDX/Sandpack/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
	],
	theme: {
		...theme,
		fontFamily: {
			...theme.fontFamily,
			sans: ['ComicShanns-Regular', ...defaultTheme.fontFamily.sans],
			mono: ['JetBrains Mono', ...defaultTheme.fontFamily.mono],
		},
	},
	plugins: [
		generated,
	],
}
