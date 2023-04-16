import React from "react";

import { FaGithub } from "react-icons/fa";
import { GrLinkedin, GrTwitter } from "react-icons/gr";
import { SiFacebook } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="mt-auto flex md:hidden w-full  flex-col text-text_light_bluish items-center">
      <h2 className="text-xl text-center">Socials:</h2>
      <ul className="flex gap-10 mt-3 w-max">
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
    </footer>
  );
};

export default Footer;
