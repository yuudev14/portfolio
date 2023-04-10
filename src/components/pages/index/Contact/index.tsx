import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { Variants, useInView, motion } from "framer-motion";

const Contact = () => {
  const [emailResult, setEmailResult] = useState({
    result: "",
    status: "",
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  const leftInitialVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -500,
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
      x: 500,
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
  const sendEmail = async (e: any) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SECRET_EMAIL as string,
        process.env.NEXT_PUBLIC_TEMPLATE_EMAIL as string,
        e.target,
        process.env.NEXT_PUBLIC_PUBLIC_EMAIL as string
      );
      setEmailResult({
        result: `Email sent. Thank you very much`,
        status: "success",
      });

      setTimeout(() => {
        setEmailResult({
          result: "",
          status: "",
        });
      }, 5000);

      if (document) {
        const form = document?.querySelector(
          ".contact form"
        ) as HTMLFormElement;
        if (form) {
          form.reset();
        }
      }
    } catch (error: any) {
      console.log(error);
      setEmailResult({
        result: "error when sending email",
        status: "failed",
      });
    }
  };
  return (
    <section ref={ref} className="contact overflow-hidden" id="contact">
      <h2 className=" font-bold text-[40px] md:text-[50px] leading[70px] text-white">
        Contact
      </h2>
      <div className="flex flex-col md:flex-row-reverse mt-[20px] gap-5">
        <motion.form
          onSubmit={sendEmail}
          className="w-full md:w-[60%] flex flex-col gap-3"
          variants={rightInitialVariants}
          animate={isInView ? "visible" : "hidden"}>
          <p
            className={
              emailResult.status === "success" ? "text-[#12ffb0]" : "text-red"
            }>
            {emailResult.result}
          </p>
          <input
            className="text-gray-200 outline-none px-3 py-2 bg-[#0d1117] border-2 border-[#222c38] rounded-md"
            type="text"
            name="from_name"
            placeholder="name"
            required
          />
          <input
            className="text-gray-200 outline-none px-3 py-2 bg-[#0d1117] border-2 border-[#222c38] rounded-md"
            type="email"
            name="from_email"
            placeholder="email"
            required
          />
          <textarea
            className="text-gray-200 outline-none px-3 py-2 h-[300px] bg-[#0d1117] border-2 border-[#222c38] rounded-md"
            name="message"
            placeholder="message"
            required></textarea>
          <input
            className="ml-auto text-[#15513d] text-xl cursor-pointer font-semibold px-4 py-2 w-full md:max-w-[200px] rounded-[5px] bg-[#12ffb0]"
            type="submit"
          />
        </motion.form>
        <motion.div
          className="w-full mt-[20px] md:w-[40%] text-white flex flex-col gap-5 items-center"
          variants={leftInitialVariants}
          animate={isInView ? "visible" : "hidden"}>
          <div className="w-full md:w-[250px] bg-[#222c38] hover:bg-[#0d1117] transition p-5 border border-[#12ffb0] rounded-md">
            {/* <h2 className="text-xl">Contact Details:</h2> */}
            <ul className="flex flex-col gap-3 mt-3">
              {/* <li className="flex gap-2 items-center">
                <i className="fa fa-phone"></i>
                <p>090-4163-0614</p>
              </li> */}
              <li className="flex gap-2 items-center flex-col">
                <i className="fa fa-envelope text-[#12ffb0] text-2xl"></i>
                <p className="font-bold text-[#12ffb0] mt-2">Email</p>
                <p className="font-medium">takaki.yu.dev@gmail.com</p>
                <a
                  className="mt-3 hover:bg-[#12ffb0] hover:text-[#15513d] px-2 py-1 rounded-md transition"
                  href="mailto:takaki.yu.dev@gmail.com">
                  <span>Send a Message</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-xl text-center">Socials:</h2>
            <ul className="flex gap-4 mt-3">
              <a
                href="https://www.facebook.com/yuyu.takaks/"
                target="_blank"
                className="bg-black w-[40px] h-[40px] rounded-full flex justify-center items-center hover:bg-[#12ffb0] hover:text-[#222c38] transition">
                <li className="fa fa-facebook"></li>
              </a>
              <a
                href="https://twitter.com/takakiyuuu"
                target="_blank"
                className="bg-black w-[40px] h-[40px] rounded-full flex justify-center items-center hover:bg-[#12ffb0] hover:text-[#222c38] transition">
                <li className="fa fa-twitter"></li>
              </a>
              <a
                href="https://github.com/yuudev14"
                target="_blank"
                className="bg-black w-[40px] h-[40px] rounded-full flex justify-center items-center hover:bg-[#12ffb0] hover:text-[#222c38] transition">
                <li className="fa fa-github"></li>
              </a>
              <a
                href="https://www.linkedin.com/in/takakiiiyuuu/"
                target="_blank"
                className="bg-black w-[40px] h-[40px] rounded-full flex justify-center items-center hover:bg-[#12ffb0] hover:text-[#222c38] transition">
                <li className="fa fa-linkedin"></li>
              </a>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
