"use client";

import Image from "next/image";
import adexbam from "../../public/adexbam.png";
import open from "../../public/svgs/open.svg";
import close from "../../public/svgs/close.svg";

import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-[22.5px]">
      <div className="flex items-center justify-between">
        <a href="/" className="logo flex justify-center items-center">
          <Image src={adexbam} width={30} height={30} alt="Adexbam" />
        </a>
        {/* <div className="logo flex justify-center items-center">
          <Image src={adexbam} width={30} height={30} alt="Adexbam" />
          <p>adexbam</p>
        </div> */}

        <div className="menu">
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
      </div>
    </nav>
  );
};
