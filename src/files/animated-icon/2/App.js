import { motion } from "framer-motion";
import { useState } from "react";

const Volume = () => {
  const [mute, setMute] = useState(false);

  return (
    <button
      type="button"
      style={{ appearance: "none", background: "none", border: "none" }}
      onClick={() => setMute((mute) => !mute)}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: "50px", height: "50px" }}
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
  );
};

export default Volume;
