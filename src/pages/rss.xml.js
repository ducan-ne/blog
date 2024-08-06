import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import { SITE_TITLE } from "../consts"
import { max, subDays } from "date-fns"

export async function GET(context) {
	const blog = await getCollection("blog", (entry) => !entry.data.draft)
	const blogPosts = blog.filter(post => !post.data.draft).map((post) => ({
		...post.data,
		description: "",
		pubDate: new Date(post.data.created),
		link: `/blog/${post.slug}/`,
	}))

	const notes = await getCollection("notes")
	const myNotes = notes.filter(note => !note.data.private).map((note) => ({
		...note.data,
		pubDate: new Date(note.data.created),
		link: `/notes/${note.slug}/`,
	}))

	const collection = await getCollection("links")
	const links = collection.reverse().flatMap((link) =>
		link.body
			.split("\n")
			.map((v) => v.trim())
			.filter((l) => l.startsWith("https://"))
			.map((l) => {
				const url = new URL(l.split(" ")[0])
				for (const v of url.searchParams.keys()) {
					url.searchParams.delete(v)
				}
				return {
					title: l,
          description: '',
					link: url.toString(),
					date: new Date(link.data.created),
				}
			}),
	)
	return rss({
		title: SITE_TITLE,
		description: SITE_TITLE,
		site: context.site,
		items: [
			...blogPosts,
			...myNotes,
			{
				title: `Bookmarks ${max(links.map((v) => new Date(v.date))).toLocaleDateString()}`,
				description: "",
				pubDate: max([...links.map(v => v.date), subDays(new Date(), 30)]),
				link: "/bookmarks",
			},
		],
	})
}
