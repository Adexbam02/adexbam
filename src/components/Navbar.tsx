"use client";

import Image from "next/image";
import adexbam from "../../public/adexbam.png";
import open from "../../public/svgs/open.svg";
import close from "../../public/svgs/close.svg";
import home from "../../public/svgs/Home.svg";

import Link from "next/link";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-[22.5px] fixd w-[100%] z-[100] ">
      <div className="flex items-center justify-between">
        <a href="/" className="logo flex justify-center items-center">
          <Image src={adexbam} width={30} height={30} alt="Adexbam" />
        </a>
        {/* <div className="logo flex justify-center items-center">
          <Image src={adexbam} width={30} height={30} alt="Adexbam" />
          <p>adexbam</p>
        </div> */}

        <div className="hidden bg-[#1C1C1C] hover:bg-[#1C1C1E] md:flex items-center justify-center gap-[1.5rem] px-4 py-[0.3rem] rounded-[30px]">
          <a href="#" className="bg-[#292929] px-[16px] py-[8px] rounded-[25px]">
            <Image src={home} width={25} height={25} alt="Home"/>
          </a>
          <a href="/">About</a>
          <a href="/">Projects</a>
          <a href="/">Contact Me</a>
        </div>

        <div className="menu md:hidden">
          <div className="h-[38px] w-[38px]  p-[3px] bg-transparent rounded-full border border-[normalGradient] flex justify-center items-center">
            <div className="cursor-pointer p-1.5 bg-[#282828] rounded-full justify-center items-center w-[100%] flex">
              <Image
                src={isMenuOpen ? close : open}
                width={30}
                height={30}
                alt="Adexbam"
                onClick={toggleMenu}
              />
            </div>
          </div>
        </div>

        <Link href="/contact" className="hidden md:block font-medium bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] text-black px-[35px] py-[10px] rounded-[25px] ">Hire Me</Link>
      </div>
    </nav>
  );
};
