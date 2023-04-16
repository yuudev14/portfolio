import React from "react";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin, GrTwitter } from "react-icons/gr";
import { SiFacebook } from "react-icons/si";

const Socials = () => {
  return (
    <>
      <div className="hidden md:flex fixed bottom-0 left-10 flex-col items-center gap-10">
        <ul className="flex mt-3 flex-col gap-10">
          <a
            href="https://www.facebook.com/yuyu.takaks/"
            target="_blank"
            className="text-text_light_bluish">
            <li>
              <SiFacebook className="text-2xl" />
            </li>
          </a>
          <a
            href="https://twitter.com/takakiyuuu"
            target="_blank"
            className="text-text_light_bluish">
            <li>
              <GrTwitter className="text-2xl" />
            </li>
          </a>
          <a
            href="https://github.com/yuudev14"
            target="_blank"
            className="text-text_light_bluish">
            <li>
              <FaGithub className="text-2xl" />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/takakiiiyuuu/"
            target="_blank"
            className="text-text_light_bluish">
            <li>
              <GrLinkedin className="text-2xl" />
            </li>
          </a>
        </ul>
        <div className="h-[120px] border border-text_light_bluish w-0"></div>
      </div>
      <div className="hidden md:flex fixed bottom-0 right-10 flex-col items-center gap-10">
        <a href="mailto:takaki.yu.dev@gmail.com">
          <span
            className="text-text_light_bluish text-2xl cursor-pointer"
            id="email">
            takaki.yu.dev@gmail.com
          </span>
        </a>
        <div className="h-[120px] border border-text_light_bluish w-0"></div>
      </div>
    </>
  );
};

export default Socials;
