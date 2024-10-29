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
        <div className="logo flex justify-center items-center">
          <Image src={adexbam} width={30} height={30} alt="Adexbam" />
          <p>adexbam</p>
        </div>

        <div className="menu">
          <div className="h-[38px] pl-[4.53px] pr-1 py-[4.53px] bg-transparent rounded-[218.97px] border border-[#7986fb] justify-center items-center gap-[30.20px] inline-flex">
            <div className="cursor-pointer px-[12.08px] py-1.5 bg-[#282828] rounded-[30.20px] justify-center items-center gap-[4.53px] flex">
              <Image
                src={isMenuOpen ? close : open}
                width={20}
                height={20}
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
