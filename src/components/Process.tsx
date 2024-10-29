import Image from "next/image";
import process from "../ui/data";

import doubleStar from "../../public/svgs/doubleStar.svg";
// import processOne from "../../public/processOne.png";
import Link from "next/link";
export const Process = () => {
  return (
    <section className="mt-[3.3rem] px-[23px] fex items-center justify-between">
      <div className="title mb-[2.5rem] flex items-start justify-cnter gap-1">
        <h2 className="text-[25px]">My Process to Design</h2>
        <Image src={doubleStar} width={25} height={25} alt="star" />
      </div>

      <div className="content">
        <div className="flex flex-col items-center justify-center gap-[2rem]">
          {process.map(({ id, number, img, title, content, link }) => (
            <div
              key={id}
              className="flex items-start justify-between gap-4 bg-rd-500"
            >
              <div className="flex flex-col items-center justify-center gap-2 bgblue-200">
                <span className="text-[15px] border-[1px] border-white rounded-full w-[35px] h-[35px] flex items-center justify-center">
                  {number}
                </span>
                <span className="h-[170px] w-[0.5px] bg-white"></span>
              </div>

              <div className="flex flex-col items-start justify-center gap-4 bgred-500">
                <Image src={img} width={30} height={30} alt="" />

                <h3 className="text-[20px]">{title}</h3>

                <p className="min-w-[200px]">
                  {content}
                </p>

                <Link
                  className="px-[15px] py-[7px] rounded-[25px] border-[0.4px] border-white"
                  href={link}
                >
                  See Examples
                </Link>
              </div>
            </div>
          ))}
          {/* <div className="flex items-start justify-between gap-4 bg-red-500">
            <div className="flex flex-col items-center justify-center gap-2 bgblue-200">
              <span className="text-[15px] border-[1px] border-white rounded-full w-[35px] h-[35px] flex items-center justify-center">
                1
              </span>
              <span className="h-[170px] w-[0.5px] bg-white"></span>
            </div>

            <div className="flex flex-col items-start justify-center gap-4 bgred-500">
              <Image src={processOne} width={30} height={30} alt="" />

              <h3 className="text-[20px]">Step 1: Product design Research</h3>

              <p className="min-w-[200px]">
                This initial step involves a systematic and thorough exploration
                of the market landscape, user needs, and existing solutions.
              </p>

              <Link className="px-[15px] py-[7px] rounded-[25px] border-[0.4px] border-white" href={"/"}>See Examples</Link>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
