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
      display: "none",
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
      <h2 className=" font-bold text-[40px] md:text-[50px] leading[70px] text-text_light_neon">
        About Me
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-9 md:gap-2 mt-10">
        <motion.div
          className="md:w-[40%] flex items-center flex-col gap-5"
          variants={leftInitialVariants}
          animate={isInView ? "visible" : "hidden"}>
          <motion.figure className="relative w-[170px] h-[170px] rounded-full overflow-hidden">
            <Image src="/images/yu.jpg" height={170} width={170} alt="banner" />
            <div className="absolute w-full h-full bg-primary top-0 opacity-10 transition"></div>
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
          className="md:w-[60%] bg-[#0d1117] border-2 border-none md:bg-transparent md:border-2 md:border-[#222c38] rounded-xl px-6 p-4 md:p-0 flex flex-col gap-5 font-poppins font-normal dark:text-[#cde8f7] text-[#5B6478] text-base md:text-[20px]">
          <p>
            As a full-stack software engineer, I am always driven to expand my
            knowledge and welcome challenges outside of my comfort zone.
          </p>
          <p>
            My journey in software engineering began with self-teaching and
            culminated in my admission to an advanced software engineering
            course in Tokyo, where I honed my skills. My passion lies in
            building full-stack applications with technologies such as
            PostgreSQL, React, Express, and Node.js. I am currently delving
            deeper into TypeScript to enhance my work with React and Node.js. As
            well as learning Go lang.
          </p>
          <p>
            Based in Tokyo, I am eager to take on new opportunities and embark
            on the next chapter of my career. My technical expertise includes
            React, CSS, HTML, JavaScript, Redux, PostgreSQL, MongoDB, Node.js,
            Express, REST API, Socket.io, Git, Heroku, SQL, Python, TypeORM,
            Typescript, and SOAR. I have also gained experience with Java, Go
            lang and Spring boot
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
