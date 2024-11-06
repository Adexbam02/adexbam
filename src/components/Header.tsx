"use client";

// import Image from "next/image";
// import star from "../../public/svgs/star.svg";
import Link from "next/link";
import { StackWall } from "./StackWall";

// import { useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { HorizontalBoxOne } from "@/ui/HorizontalBoxOne";
import { HorizontalBoxTwo } from "@/ui/HorizontalBoxTwo";
import { HorizontalBoxThree } from "@/ui/HorizontalBoxThree";
import { HorizontalBoxFour } from "@/ui/HorizontalBoxFour";


// import { motion, useScroll } from "framer-motion";

export const Header = () => {
  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.fromTo(
      "#headText",
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.5 }
    );
    timeline.fromTo(
      "#headTextS",
      { opacity: 0, y: -30 },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.7 },
      "-=0.5"
    );
    timeline.fromTo(
      "#headBtn",
      { opacity: 0, y: -15 },
      { opacity: 1, y: 0, duration: 0.5, delay: 0.9 },
      "-=0.5"
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const button = document.getElementById("headBtn");

    // button.addEventListener("mouseenter", () => {
    //   timeline.play();
    // });

    // button.addEventListener("mouseleave", () => {
    //   timeline.reverse();
    // });
  });


  return (
    <header className="mt-[.1rem] mb-[2rem] sm:mt-[.1rem] sm:bg-ed-400 md:px-[60px] lg:px-[9rem]">
      
      <HorizontalBoxOne />

      {/* ///////////////////////////////// */}
      <div className="bg-red200 mt-[1rem] md:mt-0 md:py-[6rem] flex flex-col px-[37px] py-[30px] items-center justify-center text-center h-[vh] md:h-[40vh]  g-red-400 gap-[.6rem]">
        <h1
          id="headText"
          className="opacity-0 text-[35px] leading-none font-semibold lg:text-[45px]"
        >
          I Design & Build Clean Websites!
        </h1>
        <p
          id="headTextS"
          className="opacity-0 text-[15px]  text-center flex items-center lg:text-[20px] lg:w-[70%]"
        >
          Write anything here something about yourself to showcase what actually
          you doing or targeting etc.
        </p>
        <Link
          id="headBtn"
          href="/contact"
          className="opacity-0 font-medium bg-transparent hover:bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] transition-all duration-6000 ease-in-out border-[1px] border-gray-200 text-white px-[35px] py-[10px] rounded-[25px]"
        >
          Hire Me
        </Link>
        {/* <Link id="headBtn" href="/contact" className="opacity-0 font-medium bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] text-black px-[35px] py-[10px] rounded-[25px] ">Hire Me</Link> */}
      </div>
      {/* ///////////////////////////////// */}

      <HorizontalBoxFour />

      <HorizontalBoxTwo /> 

      <HorizontalBoxThree />

      <StackWall />
    </header>
  );
};
