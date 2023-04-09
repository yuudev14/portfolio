import React, { useRef } from "react";
import Image from "next/image";
import { Variants, motion, useInView } from "framer-motion";

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const initialVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 100,
        stiffness: 500,
      },
    },
  };
  return (
    <section
      ref={ref}
      className="h-screen flex flex-col justify-center items-center">
      <div className="relative">
        <h1 className="font-bold text-[40px] md:text-[60px] leading[70px] text-white">
          {"Hi, I'm Yu Takaki"}
        </h1>
        <h2 className="text-[#15513d] text-lg m-auto bg-[#12ffb0] w-max px-2 font-medium">
          Full Stack Software Engineer
        </h2>
      </div>
      <motion.figure
        className="w-full max-w-[700px]"
        variants={initialVariants}
        animate={isInView ? "visible" : "hidden"}>
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
