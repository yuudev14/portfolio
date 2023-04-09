import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();
  const closeOption = async (id: string) => {
    const container = document.querySelector(id);
    if (container) {
      container.scrollIntoView();
    }
    // } else {
    //   router.;
    //   document.querySelector(id).scrollIntoView();
    // }
    // document.querySelector("header ul").classList.remove("displayNav");
    // setDisplay(false);
  };
  return (
    <header id="header" className="z-50 bg-[#1e304b] fixed w-full top-0 left-0">
      <div className="w-full max-w-[1280px] m-auto py-1 px-6 flex justify-between items-center">
        <Image src="/images/logo.png" height={50} width={50} alt="banner" />
        <ul className="flex gap-10 text-[18px] text-white">
          <li onClick={() => closeOption("#home")}>Home</li>
          <li onClick={() => closeOption("#skills")}>Skills</li>
          <li onClick={() => closeOption("#projects")}>Projects</li>
          <li onClick={() => closeOption("#about")}>About</li>
          <li onClick={() => closeOption("#contact")}>Contact</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
