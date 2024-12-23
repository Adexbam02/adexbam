"use client"

import Image from "next/image";
import x from "../../public/svgs/x.svg";
import dribble from "../../public/svgs/dribble.svg";
import insta from "../../public/svgs/instagram.svg";
import facebook from "../../public/svgs/facebook.svg";
// import { social } from "@/ui/data"

// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
export const Social = () => {
  

  return (
    <div className="flex items-center justify-center w-[100%] px-[23px] mt-[5rem] p-4 ">
      <div className="flex items-center justify-between gap- py-[10px] px-[20px] bg-[#1C1C1C] w-[85%] rounded-[15px] md:justify-cente md:ap-[3rem] md:w-[50%]">
        
        <a href="/" className="bg-[#292929] p-[10px] rounded-[15px]">
          <Image src={x} width={20} height={20} alt="" />
        </a>
        <a href="/" className="bg-[#292929] p-[10px] rounded-[15px]">
          <Image src={dribble} width={20} height={20} alt="" />
        </a>
        <a href="/" className="bg-[#292929] p-[10px] rounded-[15px]">
          <Image src={insta} width={20} height={20} alt="" />
        </a>
        <a href="/" className="bg-[#292929] p-[10px] rounded-[15px]">
          <Image src={facebook} width={20} height={20} alt="" />
        </a>
        
      </div>
    </div>
  );
};
