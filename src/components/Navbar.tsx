"use client";

import Image from "next/image";
import Link from "next/link";

import adexbam from "../../public/adexbam.png";
import open from "../../public/svgs/open.svg";
import close from "../../public/svgs/close.svg";
import home from "../../public/svgs/Home.svg";

import { useState, useEffect } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

export const Navbar = () => {
  useEffect(() => {
    Observer.create({
      target: "#id",

      onHover: () => {},
    });
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const mouseHoverIn = () => {
    // console.log("IN");

    const timeline = gsap.timeline();

    timeline.fromTo(
      "#dexbam",
      { opacity: 0, x: 0 },
      { opacity: 1, x: 10, duration: 0.7, delay: 0.0 }
    );
  };

  const mouseHoverOut = () => {
    // console.log("OUT");

    const timeline = gsap.timeline();

    timeline.to("#dexbam", { opacity: 0, x: -15, duration: 0.7 });
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
        <div className="logo flex justify-end items-center">
          <a
            href="/"
            className="relative z-50"
            onMouseEnter={mouseHoverIn}
            onMouseLeave={mouseHoverOut}
          >
            <Image src={adexbam} width={30} height={30} alt="Adexbam" />
          </a>

          <span
            id="dexbam"
            className="opacity-0 select-none hidden md:flex items-start justify-center flex-col gap-0"
          >
            <h4 className="leading-none">AdeXBam</h4>
            <p className="leading-none text-[12.3px] italic font-medium bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] bg-clip-text text-transparent">
              the web dev.
            </p>
          </span>
        </div>
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
