import { Variants, motion } from "framer-motion";
import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

const Header = () => {
  const [_close, setClose] = useState(false);

  const initialVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 100,
        stiffness: 500,
      },
    },
  };

  return (
    <motion.header
      variants={initialVariants}
      animate={_close ? "hidden" : "visible"}
      className="z-50 bg-black bg-opacity-20 flex justify-between items-center rounded-xl absolute w-full top-4 py-2 px-4 left-0">
      <motion.div className="text-gray-400">
        <motion.p>
          Website currently under development. Please visit this{" "}
          <motion.a
            className="text-[#12ffb0]"
            href="https://yuudev14.github.io/hiYuTakaki/"
            target="_blank">
            page
          </motion.a>{" "}
          instead
        </motion.p>
      </motion.div>
      <AiFillCloseCircle
        className="text-[#12ffb0] text-[40px] cursor-pointer"
        onClick={() => setClose(true)}
      />
    </motion.header>
  );
};

export default Header;
