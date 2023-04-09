/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import { Variants, motion } from "framer-motion";

const AboutMe = () => {
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
    <section className="flex flex-col md:flex-row justify-center gap-9 md:gap-2">
      <motion.div className="md:w-[40%] flex items-center flex-col gap-5">
        <motion.figure
          variants={initialVariants}
          initial="hidden"
          animate="visible"
          className="w-[170px] h-[170px] rounded-full overflow-hidden">
          <Image src="/images/yu.jpg" height={170} width={170} alt="banner" />
        </motion.figure>
        <button className="text-[#15513d] text-xl font-semibold px-4 py-2 w-full max-w-[200px] rounded-xl bg-[#12ffb0]">
          Resume
        </button>
      </motion.div>
      <motion.div
        variants={initialVariants}
        initial="hidden"
        animate="visible"
        className="md:w-[60%] flex flex-col gap-5 font-poppins font-normal dark:text-[#A3B3BC] text-[#5B6478] text-[20px]">
        <p>
          Hi, I am a full-stack software engineer who is always eager to learn
          new things and willing to take challenges out of my comfort zone.
        </p>
        <p>
          Before coming here to Japan, I was a 2nd-year computer engineering
          student in the Philippines. During that time, I decided to go to Japan
          to continue my studies but things didn't go well as expected so I
          tried to find an alternative way to achieve my dream job. I taught
          myself how to code in between jobs. And then I passed the admission
          process to an advanced software engineering course in Tokyo and
          decided to join them to improve my skills. Since then, I enjoy
          building full-stack apps using technologies like PostgreSQL, React,
          Express and Node.js. Currently, I like to go deeper in TypeScript to
          incorporate it in React and Node.js.
        </p>
        <p>
          I'm currently based in Tokyo and I'm ready to embark on the next
          chapter of my life.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutMe;
