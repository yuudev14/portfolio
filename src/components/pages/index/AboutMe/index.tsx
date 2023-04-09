/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import Image from "next/image";
import { Variants, motion, useInView } from "framer-motion";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const leftInitialVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -900,
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
  const rightInitialVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 900,
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
    <section ref={ref} id="about">
      <h2 className=" font-bold text-[40px] md:text-[50px] leading[70px] text-white">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-9 md:gap-2 mt-10">
        <motion.div
          className="md:w-[40%] flex items-center flex-col gap-5"
          variants={leftInitialVariants}
          animate={isInView ? "visible" : "hidden"}>
          <motion.figure className="w-[170px] h-[170px] rounded-full overflow-hidden">
            <Image src="/images/yu.jpg" height={170} width={170} alt="banner" />
          </motion.figure>
          <a href={process.env.NEXT_PUBLIC_RESUME} target="_blank">
            <motion.button className="text-[#15513d] text-xl font-semibold px-4 py-2 w-full max-w-[200px] rounded-[5px] bg-[#12ffb0]">
              Resume
            </motion.button>
          </a>
        </motion.div>
        <motion.div
          variants={rightInitialVariants}
          animate={isInView ? "visible" : "hidden"}
          className="md:w-[60%] flex flex-col gap-5 font-poppins font-normal dark:text-[#A3B3BC] text-[#5B6478] text-[20px]">
          <p>
            Hi, I am a full-stack software engineer who is always eager to learn
            new things and willing to take challenges out of my comfort zone.
          </p>
          <p>
            Before coming here to Japan, I was a 2nd-year computer engineering
            student in the Philippines. During that time, I decided to go to
            Japan to continue my studies but things didn't go well as expected
            so I tried to find an alternative way to achieve my dream job. I
            taught myself how to code in between jobs. And then I passed the
            admission process to an advanced software engineering course in
            Tokyo and decided to join them to improve my skills. Since then, I
            enjoy building full-stack apps using technologies like PostgreSQL,
            React, Express and Node.js. Currently, I like to go deeper in
            TypeScript to incorporate it in React and Node.js.
          </p>
          <p>
            I'm currently based in Tokyo and I'm ready to embark on the next
            chapter of my life.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
