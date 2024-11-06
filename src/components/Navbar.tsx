"use client";

import Image from "next/image";
import Link from "next/link";

import adexbam from "../../public/adexbam.png";
import open from "../../public/svgs/open.svg";
import close from "../../public/svgs/close.svg";
import home from "../../public/svgs/Home.svg";

import { useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mouseHoverIn = () => {
    console.log("IN");

    const timeline = gsap.timeline();

    timeline.fromTo(
      "#dexbam",
      { opacity: 0, x: 0 },
      { opacity: 1, x: 10, duration: 0.5, delay: 0.5 }
    );
  };

  const mouseHoverOut = () => {
    const timeline = gsap.timeline();

    timeline.to("#dexbam", { opacity: 0, x: 0 });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // useGSAP(() => {
  //   const timeline = gsap.timeline();

  //   timeline.fromTo(
  //     "#dexbam",
  //     { opacity: 0, y: -30 },
  //     { opacity: 1, y: 0, duration: 0.5, delay: 0.5 }
  //   );
  // });

  return (
    <nav className="p-[22.5px] fixd w-[100%] z-[100] md:px-[60px] lg:px-[9rem]">
      <div className="flex items-center justify-between">
        <a href="/" className="logo flex justify-end items-center">
          <Image
            onMouseEnter={mouseHoverIn}
            onMouseLeave={mouseHoverOut}
            src={adexbam}
            width={30}
            height={30}
            alt="Adexbam"
          />
          <h4 id="dexbam" className="opacity-0">
            deXBam
          </h4>
        </a>
        {/* <div className="logo flex justify-center items-center">
          <Image src={adexbam} width={30} height={30} alt="Adexbam" />
          <p>adexbam</p>
        </div> */}

        <div className="hidden bg-[#1C1C1C] hover:bg-[#1C1C1E] md:flex items-center justify-center gap-[1.5rem] px-4 py-[0.3rem] rounded-[30px]">
          <a
            href="#"
            className="bg-[#292929] px-[16px] py-[8px] rounded-[25px]"
          >
            <Image src={home} width={25} height={25} alt="Home" />
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

        <Link
          href="/contact"
          className="hidden md:block font-medium bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] text-black px-[35px] py-[10px] rounded-[25px] "
        >
          Hire Me
        </Link>
      </div>
    </nav>
  );
};
