import Image from "next/image";
import star from "../../public/svgs/star.svg";
import Link from "next/link";
import { StackWall } from "./StackWall";

export const Header = () => {
  return (
    <header className="mt-[.1rem] mb-[2rem] sm:mt-[.1rem] sm:bg-ed-400 md:px-[60px] lg:px-[9rem]">
      <div className="bg-re relative border-white/20 border-t-[1px] border-b-[1px] h-[55px] w-[100%] bg-transparent flex items-start">
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
        {/* <div className="h-[100%] w-[25%] border-white/20 border-r-[0px]"></div> */}
        <Image
          src={star}
          width={20}
          height={20}
          alt="star"
          className="absolute top-[80%] left-[23%] sm:left-[23.5%]"
        />
        <Image
          src={star}
          width={20}
          height={20}
          alt="star"
          className="absolute top-[80%] left-[73%] sm:left-[73.4%]"
        />
      </div>

      {/* ///////////////////////////////// */}
      <div className="mt-[1rem] flex flex-col px-[37px] py-[30px] items-center justify-center text-center h-[30vh] g-red-400 gap-[.6rem]">
        <h1 className="text-[35px] leading-none font-semibold lg:text-[45px]">I Design & Build Clean Websites!</h1>
        <p className="text-[15px]  text-center flex items-center lg:text-[20px] lg:w-[70%]">
          Write anything here something about yourself to showcase what actually
          you doing or targeting etc.
        </p>
        <Link href="/contact" className="font-medium bg-gradient-to-r from-[#7A87FB] to-[#FFD49C] text-black px-[35px] py-[10px] rounded-[25px] ">Hire Me</Link>
      </div>
      {/* ///////////////////////////////// */}


      <div className="relative border-white/20 border-t-[0px] b-red-500 border-b-[0px] h-[55px] w-[100%] bg-transparent flex items-start">
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
        <div className="h-[100%] w-[25%] border-white/20 border-r-[0px]"></div>
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
        {/* <div className="h-[100%] w-[25%] border-white/20 border-r-[0px]"></div> */}
        <Image
          src={star}
          width={20}
          height={20}
          alt="star"
          className="absolute top-[80%] left-[23%] sm:left-[23.5%]"
        />
        <Image
          src={star}
          width={20}
          height={20}
          alt="star"
          className="absolute top-[80%] left-[73%] sm:left-[73.4%]"
        />
      </div>

      <div className="relative g-red-600 border-white/20 border-t-[1px] border-b-[0px] h-[55px] w-[100%] bg-transparent flex items-start">
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
      </div>

      <div className="relative border-white/20 border-t-[1px] border-b-[1px] h-[55px] w-[100%] bg-transparent flex items-start">
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
      </div>


      <StackWall />
    </header>
  );
};
