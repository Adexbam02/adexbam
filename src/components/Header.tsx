import Image from "next/image";
import star from "../../public/svgs/star.svg";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="mt-[2rem] mb-[2rem]">
      <div className="relative border-white/20 border-t-[1px] border-b-[1px] h-[55px] w-[100%] bg-transparent flex items-start">
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
        {/* <div className="h-[100%] w-[25%] border-white/20 border-r-[0px]"></div> */}
        <Image
          src={star}
          width={20}
          height={20}
          alt="star"
          className="absolute top-[80%] left-[23%]"
        />
        <Image
          src={star}
          width={20}
          height={20}
          alt="star"
          className="absolute top-[80%] left-[73%]"
        />
      </div>

      {/* ///////////////////////////////// */}
      <div className="flex flex-col px-[37px] py-[35px] items-center justify-center text-center h-[40vh] g-red-400 gap-[2.6rem]">
        <h1 className="text-[25px] font-semibold">I Design & Build Clean Websites</h1>
        <p className="text-[15px]  text-center flex items-center">
          Write anything here something about yourself to showcase what actually
          you doing or targeting etc.
        </p>
        <Link href="/contact" className="bg-white px-[15px] py-[10px] rounded-[25px] ">Hire Me</Link>
      </div>
      {/* ///////////////////////////////// */}


      <div className="relative border-white/20 border-t-[0px] border-b-[0px] h-[55px] w-[100%] bg-transparent flex items-start">
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
        <div className="h-[100%] w-[25%] border-white/20 border-r-[0px]"></div>
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
        {/* <div className="h-[100%] w-[25%] border-white/20 border-r-[0px]"></div> */}
        <Image
          src={star}
          width={20}
          height={20}
          alt="star"
          className="absolute top-[80%] left-[23%]"
        />
        <Image
          src={star}
          width={20}
          height={20}
          alt="star"
          className="absolute top-[80%] left-[73%]"
        />
      </div>

      <div className="relative border-white/20 border-t-[1px] border-b-[0px] h-[55px] w-[100%] bg-transparent flex items-start">
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
      </div>

      <div className="relative border-white/20 border-t-[1px] border-b-[1px] h-[55px] w-[100%] bg-transparent flex items-start">
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
      </div>
    </header>
  );
};
