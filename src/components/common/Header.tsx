import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [display, setDisplay] = useState(false);
  const closeOption = async (id: string) => {
    const container = document.querySelector(id);
    if (container) {
      container.scrollIntoView({ behavior: "smooth" });
    }
    // } else {
    //   router.;
    //   document.querySelector(id).scrollIntoView();
    // }
    // document.querySelector("header ul").classList.remove("displayNav");
    setDisplay(false);
  };
  return (
    <header id="header" className="z-50 bg-[#1e304b] fixed w-full top-0 left-0">
      <div className="w-full max-w-[1280px] m-auto py-1 px-6 flex justify-between items-center">
        <Image src="/images/logo.png" height={50} width={50} alt="banner" />
        <ul className="md:flex gap-10 text-[18px] text-white hidden">
          <li className="cursor-pointer" onClick={() => closeOption("#home")}>
            Home
          </li>
          <li
            className="cursor-pointer"
            onClick={() => closeOption("#experience")}>
            Experience
          </li>
          <li className="cursor-pointer" onClick={() => closeOption("#skills")}>
            Skills
          </li>
          <li
            className="cursor-pointer"
            onClick={() => closeOption("#projects")}>
            Projects
          </li>
          <li className="cursor-pointer" onClick={() => closeOption("#about")}>
            About
          </li>
          <li
            className="cursor-pointer"
            onClick={() => closeOption("#contact")}>
            Contact
          </li>
        </ul>
        <GiHamburgerMenu
          onClick={() => setDisplay(!display)}
          size={40}
          className="text-white cursor-pointer md:hidden"
        />
        {display && (
          <div className="fixed top-[59px] w-screen left-0 h-screen bg-[#111a25] md:hidden">
            <ul className="flex flex-col justify-center items-center gap-10 text-[18px] mt-10 text-white">
              <li
                className="cursor-pointer"
                onClick={() => closeOption("#home")}>
                Home
              </li>
              <li
                className="cursor-pointer"
                onClick={() => closeOption("#skills")}>
                Skills
              </li>
              <li
                className="cursor-pointer"
                onClick={() => closeOption("#experience")}>
                Experience
              </li>
              <li
                className="cursor-pointer"
                onClick={() => closeOption("#projects")}>
                Projects
              </li>
              <li
                className="cursor-pointer"
                onClick={() => closeOption("#about")}>
                About
              </li>
              <li
                className="cursor-pointer"
                onClick={() => closeOption("#contact")}>
                Contact
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
