import { Fragment, Suspense } from "react"

const experiments = import.meta.glob<{ [key: string]: () => JSX.Element }>(
	"../experiments/*.tsx",
	{ eager: true },
)

const sortedExperiments = Object.entries(experiments)
	.map(([path, module]) => {
		const number = Number.parseInt(path.match(/(\d+)\./)?.[1] || "0", 10)
		const name = path
			.split("/")
			.pop()
			?.replace(/^\d+\./, "")
			.replace(".tsx", "")
			.replace(/-/g, " ")
		const id = name?.toLowerCase().replace(/\s+/g, "-") || ""

		const Component = Object.values(module)[0] as () => JSX.Element
		return { number, name, id, Component }
	})
	.sort((a, b) => b.number - a.number)

export function Experiments() {
	return (
		<div className="flex flex-col gap-8">
			{sortedExperiments.map(({ name, id, number, Component }) => (
				<Fragment key={id}>
					<h1 id={id} className="text-2xl font-bold">
						<a
							href={`#${id}`}
              /*  biome-ignore lint/style/noNonNullAssertion: <explanation> */
						>{`${number}.   ${name!.charAt(0).toUpperCase() + name!.slice(1)}`}</a>
					</h1>
					<Suspense fallback={<div>Loading...</div>}>
						<Component />
					</Suspense>
					<hr className="border-t border-gray-300 my-4" />
				</Fragment>
			))}
		</div>
	)
}
