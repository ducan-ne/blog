import { motion } from "framer-motion";

export default function Example1() {
  return (
    <>
      Default:
      <br />
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
        <path d="M7 16h8" />
        <path d="M7 11h12" />
        <motion.path d="M7 6h3" />
      </svg>
      <br />
      <br />
      Animated:
      <br />
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
    </>
  );
}
