import { motion } from "framer-motion"
import { Fragment, useEffect, useState } from "react"
import clsx from "clsx"

const Volume = () => {
	const [mute, setMute] = useState(false)

	return (
		<button
			type="button"
			className={clsx("mx-1 rounded p-1 transition-all hover:bg-neutral-50/10")}
			onClick={() => setMute((mute) => !mute)}
		>
			<svg
				width="18"
				height="18"
				viewBox="0 0 18 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className="w-24 h-24"
			>
				<motion.path
					d="M4.89143 7.00951H2.69269C2.62605 7.00951 2.56213 7.03599 2.51501 7.08311C2.46788 7.13024 2.44141 7.19416 2.44141 7.2608V10.7789C2.44141 10.8455 2.46788 10.9094 2.51501 10.9565C2.56213 11.0037 2.62605 11.0301 2.69269 11.0301H4.88044C4.99628 11.0292 5.10885 11.0685 5.19894 11.1413L8.07207 13.4937C8.10947 13.5212 8.15376 13.5379 8.20003 13.5417C8.2463 13.5456 8.29273 13.5366 8.33418 13.5156C8.37563 13.4947 8.41047 13.4627 8.43484 13.4232C8.45921 13.3837 8.47216 13.3382 8.47224 13.2918V4.7479C8.47216 4.70147 8.45921 4.65598 8.43484 4.61646C8.41047 4.57694 8.37563 4.54494 8.33418 4.52402C8.29273 4.5031 8.2463 4.49408 8.20003 4.49794C8.15376 4.50181 8.10947 4.51842 8.07207 4.54593L5.19894 6.89832C5.113 6.9709 5.00392 7.01035 4.89143 7.00951Z"
					stroke="currentColor"
					strokeWidth="1.11683"
					strokeLinecap="round"
					strokeLinejoin="round"
					animate={{ x: mute ? 2.5 : 0 }}
				/>
				<motion.path
					d="M12.0488 12.5381C12.6607 11.4726 13.054 10.5259 13.054 9.02001C13.054 7.51416 12.677 6.5781 12.0488 5.50195"
					stroke="currentColor"
					strokeWidth="1.11683"
					strokeLinecap="round"
					strokeLinejoin="round"
					animate={{ x: mute ? -4 : 0, opacity: mute ? 0 : 1 }}
					transition={{ delay: 0.05 }}
				/>
				<motion.path
					d="M13.5586 14.0457C14.5009 12.6008 15.0663 11.1738 15.0663 9.01994C15.0663 6.86607 14.5009 5.47047 13.5586 3.99414"
					stroke="currentColor"
					strokeWidth="1.11683"
					strokeLinecap="round"
					strokeLinejoin="round"
					animate={{ x: mute ? -4 : 0, opacity: mute ? 0 : 1 }}
					transition={{ delay: 0.1 }}
				/>
				<motion.path
					d="M10.5381 11.0304C10.844 10.4217 11.0407 9.74757 11.0407 9.02008C11.0407 8.28255 10.8522 7.6248 10.5381 7.00977"
					stroke="currentColor"
					strokeWidth="1.11683"
					strokeLinecap="round"
					strokeLinejoin="round"
					animate={{ x: mute ? -4 : 0, opacity: mute ? 0 : 1 }}
				/>
				<motion.path
					d="M14.6698 14.7159L3.61328 3.65918"
					stroke="currentColor"
					strokeWidth="1.11683"
					strokeMiterlimit="10"
					strokeLinecap="round"
					animate={{ pathLength: mute ? 1 : 0, opacity: mute ? 1 : 0 }}
				/>
			</svg>
		</button>
	)
}

export default function SvgAnimations() {
	const [restart, setRestart] = useState(Date.now())

  useEffect(() => {
    setRestart(Date.now())
  }, [])
	return (
		<motion.div
			className="flex flex-col gap-2"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			whileInView={{ opacity: 1 }}
		>
			<button
				type="button"
				className="text-sm w-fit"
				onClick={() => setRestart(Date.now())}
			>
				Restart
			</button>
			<div className="flex gap-6" key={restart}>
				<motion.svg
					width="16"
					height="20"
					viewBox="0 0 16 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="w-24 h-24"
				>
					<motion.path
						d="M8 15L14 9M8 15L2 9M8 15V1"
						stroke="black"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						initial={{ pathLength: 0 }}
						animate={{ pathLength: 1 }}
						transition={{ duration: 2, type: "tween" }}
					/>
					<path
						d="M15 19H1"
						stroke="black"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</motion.svg>

				<motion.svg
					width="16"
					height="20"
					viewBox="0 0 16 20"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					className="w-24 h-24"
					aria-label="Arrow"
					role="img"
				>
					<motion.path
						d="M8 15L14 9M8 15L2 9M8 15V1"
						stroke="black"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						initial={{ y: 0 }}
						animate={{
							y: [0, -4, 0],
							pathLength: 1,
						}}
						pathLength={1}
						transition={{
							y: {
								duration: 1,
								repeat: Infinity,
								repeatType: "reverse",
								ease: "easeInOut",
							},
							// pathLength: {
							// 	duration: 3,
							// 	type: "tween"
							// }
						}}
					/>
					<path
						d="M15 19H1"
						stroke="black"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</motion.svg>

				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-24 h-24"
				>
					<motion.path
						d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
						initial={{ pathLength: 0 }}
						animate={{ pathLength: 1 }}
						transition={{ duration: 1, type: "tween" }}
						// transition={{ duration: 1, type: "spring" }}
					/>
				</motion.svg>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-24 h-24"
				>
					<path d="M12 16v5" />
					<path d="M16 14v7" />
					<path d="M20 10v11" />
					<motion.path
						d="M2 15l6.646-6.646a.5.5 0 0 1 .707 0l3.293 3.292a.5.5 0 0 0 .708 0L22 3"
						initial={{ pathLength: 0 }}
						animate={{ pathLength: 1 }}
						transition={{ duration: 0.3, type: "tween" }}
					/>
					<path d="M4 18v3" />
					<path d="M8 14v7" />
				</svg>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-24 h-24"
				>
					<path d="M21.801 10A10 10 0 1 1 17 3.335" />
					<motion.path
						d="m9 11 3 3L22 4"
						initial={{ pathLength: 0 }}
						animate={{ pathLength: 1 }}
						transition={{ duration: 0.7, type: "spring" }}
					/>
				</svg>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-24 h-24"
				>
					<path d="M3 3v16a2 2 0 0 0 2 2h16" />
					<motion.path
						d="M7 16h8"
						initial={{ pathLength: 0 }}
						animate={{ pathLength: [0, 1, 0] }}
						transition={{ duration: 1, repeat: Infinity }}
					/>
					<motion.path
						d="M7 11h12"
						initial={{ pathLength: 0 }}
						animate={{ pathLength: [0, 1, 1.2, 1, 0] }}
						transition={{ duration: 1, delay: 0.2, repeat: Infinity }}
					/>
					<motion.path
						d="M7 6h3"
						initial={{ pathLength: 0 }}
						animate={{ pathLength: [0, 1, 1.2, 1.4, 1.2, 1, 0] }}
						transition={{ duration: 1, delay: 0.4, repeat: Infinity }}
					/>
				</svg>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-24 h-24"
				>
					<motion.path
						d="M2 12h2.49a2 2 0 0 0 1.93-1.46l2.35-8.36a.25.25 0 0 1 .48 0l5.52 19.64a.25.25 0 0 0 .48 0l2.35-8.36A2 2 0 0 1 19.52 12H22"
						initial={{ pathLength: 0 }}
						animate={{ pathLength: [0, 1] }}
						transition={{
							duration: 2,
							ease: "easeInOut",
							repeat: Infinity,
							repeatType: "reverse",
						}}
					/>
				</svg>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-24 h-24"
				>
					<motion.path
						d="m11.9 12.1 4.514-4.514"
						animate={{ rotate: [-2, 2, -2] }}
						transition={{ duration: 0.5, repeat: Infinity }}
					/>
					<motion.path
						d="M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"
						animate={{ rotate: [-1, 1, -1] }}
						transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
					/>
					<motion.path
						d="m6 16 2 2"
						animate={{ rotate: [-2, 2, -2] }}
						transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
					/>
					<motion.path
						d="M8.2 9.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2z"
						animate={{ rotate: [-1, 1, -1] }}
						transition={{ duration: 0.5, repeat: Infinity, delay: 0.3 }}
					/>
					<motion.circle
						cx="11.5"
						cy="12.5"
						r=".5"
						fill="currentColor"
						animate={{ scale: [1, 1.2, 1] }}
						transition={{ duration: 0.5, repeat: Infinity, delay: 0.4 }}
					/>
				</svg>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-24 h-24"
				>
					<rect width="18" height="14" x="3" y="3" rx="2" />
					<clipPath id="marqueeClip">
						<rect x="3" y="17" width="18" height="10" />
					</clipPath>
					<g clipPath="url(#marqueeClip)">
						<motion.g
							animate={{
								x: [-32, 0],
							}}
							transition={{
								duration: 10,
								repeat: Infinity,
								repeatType: "loop",
								ease: "linear",
							}}
						>
							{Array.from({ length: 3 }).map((_, i) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<Fragment key={i}>
									<path d="M4 21h1" />
									<path d="M9 21h1" />
									<path d="M14 21h1" />
									<path d="M19 21h1" />
									<path d="M24 21h1" />
									<path d="M29 21h1" />
									<path d="M34 21h1" />
									<path d="M39 21h1" />
									<path d="M44 21h1" />
									<path d="M49 21h1" />
									<path d="M54 21h1" />
									<path d="M59 21h1" />
									<path d="M64 21h1" />
									<path d="M69 21h1" />
									<path d="M74 21h1" />
								</Fragment>
							))}
						</motion.g>
					</g>
				</svg>
			</div>

			<h5>with Gestures</h5>
			<div className="flex gap-6" key={restart + 1}>
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-24 h-24"
					whileHover="hover"
				>
					<motion.path
						d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
						variants={{
							hover: {
								rotate: [0, 15, -15, 0],
								transition: {
									duration: 0.5,
									repeat: Infinity,
									repeatType: "loop",
									ease: "easeInOut",
								},
							},
						}}
					/>
				</motion.svg>

				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-24 h-24"
					whileHover="hover"
				>
					<path d="M3 2h18" />
					<path d="M3 22h18" />
					<clipPath id="clip">
						<rect x="0" y="2" width="24" height="22" />
					</clipPath>
					<g clipPath="url(#clip)">
						<motion.g
							initial={{ y: 0 }}
							animate={{ y: 0 }}
							variants={{
								hover: {
									y: -36,
									transition: {
                    repeat: 2,
										duration: 0.2,
										ease: "linear",
									},
								},
							}}
						>
							<rect width="18" height="12" x="3" y="6" rx="2" />
							<rect width="18" height="12" x="3" y="26" rx="2" />
							<rect width="18" height="12" x="3" y="42" rx="2" />
						</motion.g>
					</g>
				</motion.svg>
				<Volume />
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-24 h-24"
					whileHover="hover"
				>
					<motion.polyline
						points="4 14 10 14 10 20"
						initial={{ x: 0, y: 0 }}
						variants={{
							hover: { x: -2, y: -2 },
						}}
						transition={{ duration: 1, repeat: 1 }}
					/>
					<motion.polyline
						points="20 10 14 10 14 4"
						initial={{ x: 0, y: 0 }}
						variants={{
							hover: { x: 2, y: 2 },
						}}
						transition={{ duration: 1, repeat: 1 }}
					/>
					<motion.line
						x1="14"
						x2="21"
						y1="10"
						y2="3"
						initial={{ x: 0, y: 0 }}
						variants={{
							hover: { x: 2, y: 2 },
						}}
						transition={{ duration: 1, repeat: 1 }}
					/>
					<motion.line
						x1="3"
						x2="10"
						y1="21"
						y2="14"
						initial={{ x: 0, y: 0 }}
						variants={{
							hover: { x: -2, y: -2 },
						}}
						transition={{ duration: 1, repeat: 1 }}
					/>
				</motion.svg>
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-24 h-24"
					whileHover="hover"
				>
					<motion.polyline
						points="4 14 10 14 10 20"
						initial={{ x: 0, y: 0 }}
						variants={{
							hover: { x: 1, y: -3 },
						}}
						transition={{ duration: 0.5, repeat: 1, repeatType: "reverse" }}
					/>
					<motion.polyline
						points="20 10 14 10 14 4"
						initial={{ x: 0, y: 0 }}
						variants={{
							hover: { x: -2, y: 1 },
						}}
						transition={{ duration: 0.5, repeat: 1, repeatType: "reverse" }}
					/>
					<motion.line
						x1="14"
						x2="21"
						y1="10"
						y2="3"
						initial={{ x: 0, y: 0 }}
						variants={{
							hover: { x: -2, y: 1 },
						}}
						transition={{ duration: 0.5, repeat: 1, repeatType: "reverse" }}
					/>
					<motion.line
						x1="3"
						x2="10"
						y1="21"
						y2="14"
						initial={{ x: 0, y: 0 }}
						variants={{
							hover: { x: 1, y: -3 },
						}}
						transition={{ duration: 0.5, repeat: 1, repeatType: "reverse" }}
					/>
				</motion.svg>
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-24 h-24"
					whileHover="hover"
				>
					<motion.path
						d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
						initial={{ pathLength: 0 }}
						transition={{ duration: 0.3, type: "tween" }}
						variants={{
							hover: { pathLength: 1 },
						}}
					/>
				</motion.svg>

				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-24 h-24"
					whileHover="hover"
				>
					<motion.path
						d="m9 9 5 12 1.8-5.2L21 14Z"
						initial={{ scale: 1, x: 0, y: 0, rotate: 0 }}
						variants={{
							hover: {
								scale: 0.9,
								x: -1,
								y: -2,
								rotate: -5,
								transition: {
									type: "spring",
									stiffness: 500,
									delay: 0.1,
									damping: 15,
								},
							},
						}}
					/>
					<motion.path
						d="M7.2 2.2 8 5.1"
						initial={{ opacity: 0, scale: 0, y: 0 }}
						variants={{
							hover: { opacity: 1, scale: 1, y: [-10, 0, -5, 0] },
						}}
						transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
					/>
					<motion.path
						d="m5.1 8-2.9-.8"
						initial={{ opacity: 0, scale: 0, x: 0 }}
						variants={{
							hover: { opacity: 1, scale: 1, x: [10, 0, 5, 0] },
						}}
						transition={{
							duration: 0.6,
							type: "spring",
							stiffness: 300,
							delay: 0.1,
						}}
					/>
					<motion.path
						d="M14 4.1 12 6"
						initial={{ opacity: 0, scale: 0, x: 0 }}
						variants={{
							hover: { opacity: 1, scale: 1, x: [-10, 0, -5, 0] },
						}}
						transition={{
							duration: 0.6,
							type: "spring",
							stiffness: 300,
							delay: 0.2,
						}}
					/>
					<motion.path
						d="m6 12-1.9 2"
						initial={{ opacity: 0, scale: 0, y: 0 }}
						variants={{
							hover: { opacity: 1, scale: 1, y: [10, 0, 5, 0] },
						}}
						transition={{
							duration: 0.6,
							type: "spring",
							stiffness: 300,
							delay: 0.3,
						}}
					/>
				</motion.svg>
				<motion.svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className="w-24 h-24 cursor-pointer"
					whileHover="hover"
				>
					<motion.path
						d="M8 3H5a2 2 0 0 0-2 2v3"
						variants={{
							hover: { scale: 1.1, x: -2, y: -2 },
						}}
						transition={{ duration: 0.2, type: "tween" }}
					/>
					<motion.path
						d="M21 8V5a2 2 0 0 0-2-2h-3"
						variants={{
							hover: { scale: 1.1, x: 2, y: -2 },
						}}
						transition={{ duration: 0.2, type: "tween" }}
					/>
					<motion.path
						d="M3 16v3a2 2 0 0 0 2 2h3"
						variants={{
							hover: { scale: 1.1, x: -2, y: 2 },
						}}
						transition={{ duration: 0.2, type: "tween" }}
					/>
					<motion.path
						d="M16 21h3a2 2 0 0 0 2-2v-3"
						variants={{
							hover: { scale: 1.1, x: 2, y: 2 },
						}}
						transition={{ duration: 0.2, type: "tween" }}
					/>
				</motion.svg>
			</div>
		</motion.div>
	)
}
