import React from "react";
import Image from "next/image";
import { Variants, motion } from "framer-motion";

const Banner = () => {
  const initialVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 900,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <div className="relative">
        <h1 className="font-bold text-[60px] leading[70px] text-white">
          {"Hi, I'm Yu Takaki"}
        </h1>
        <h2 className="text-[#15513d] text-lg m-auto bg-[#12ffb0] w-max px-2 font-medium">
          Full Stack Software Engineer
        </h2>
      </div>
      <motion.figure
        variants={initialVariants}
        initial="hidden"
        animate="visible">
        <Image
          src="/images/banner.png"
          height={1072}
          width={1908}
          alt="banner"
        />
      </motion.figure>
    </section>
  );
};

export default Banner;
