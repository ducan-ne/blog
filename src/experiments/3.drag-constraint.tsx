import { motion } from "framer-motion"
import { useState } from "react"

export default function DragConstraint() {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const [audio1] = useState<any>(
		() => typeof window !== "undefined" && new Audio("https://resend.com/sound/rewind2.mp3"),
	)
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const [audio2] = useState<any>(
		() => typeof window !== "undefined" && new Audio("https://resend.com/sound/wheel.mp3"),
	)
  const [counter, setCounter] = useState(0)
  const [interval, setInterval2] = useState<ReturnType<typeof setInterval>>()
	return (
		<div className="relative">
			<div className="absolute left-14 top-20">{"<"}</div>
			<motion.div
				style={{
					width: 50,
					height: 200,
					cursor: "grab",
				}}
				className="overflow-hidden flex flex-col gap-2 outline-none"
				drag="y"
				dragConstraints={{
					top: -90,
					bottom: 90,
				}}
				dragElastic={0}
				dragSnapToOrigin
				dragTransition={{
					power: 0,
					bounceStiffness: 300,
					bounceDamping: 20,
				}}
				dragMomentum
				whileTap={{ cursor: "grabbing" }}
				onDragStart={() => {
					audio1.currentTime = 2
					audio1.play()
          setCounter(0)
          setInterval2(setInterval(() => {
            setCounter(c => c + 10)
          }, 10))
				}}
				onDragEnd={() => {
					audio1.pause()
					audio2.currentTime = 0
					audio2.volume = 0.3
					audio2.playbackRate = 1.2
					audio2.play()
          clearInterval(interval)
				}}
			>
				{Array.from({ length: 50 }).map((_, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
					<div key={i} className="flex flex-nowrap justify-end items-center gap-2">
						{i % 5 === 0 && <span className="text-xs text-gray-900">{i}</span>}
						<motion.span className={`bg-gray-200 rounded h-2 w-5 ${i %5 === 0 && 'opacity-50'}`} />
					</div>
				))}
			</motion.div>
      <div className="text-lg mt-10 text-gray-900">{counter}</div>
		</div>
	)
}
