import { motion } from "framer-motion";
import { useState } from "react";

const FullScreen = () => {
  return (
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
      style={{ cursor: "pointer", height: "50px", width: "50px" }}
      // dùng để thêm hiệu ứng hover
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
  );
};

export default FullScreen;
