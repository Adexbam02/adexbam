import Image from "next/image";
import Link from "next/link";

import { process } from "../ui/data";
// import { Title } from "@/ui/Title";
import doubleStar from "../../public/svgs/doubleStar.svg"
export const Process = () => {
  return (
    <section className="mt-[3.3rem] px-[23px] flex items-center justfy-between">
      <div className="md:flex items-center justify-center">
        <div className="md:flex items-start justify-start flex-col">
          {/* <Title title="My Process to Design" /> */}

          <div className="title mb-[1rem] flex items-start justify-start gap-1 md:w-[100%]">
            <h2 className="text-[25px] sm:text-[30px] font-medium">My Process to Design</h2>
            <Image
              src={doubleStar}
              width={25}
              height={25}
              alt="star"
              className="sm:w-[30px]"
            />
          </div>

          {/* <div className=""> */}
          <div className="flex flex-col items-center justify-center gap-[2rem] md:w-[100%]">
            {process.map(({ id, number, img, title, content, link }) => (
              <div
                key={id}
                className="flex items-start justify-between gap-4 bg-ed-500 md:w-[80%]"
              >
                <div className="flex flex-col items-center justify-center gap-2 bgblue-200">
                  <span className="text-[15px] border-[1px] border-white rounded-full w-[35px] h-[35px] flex items-center justify-center">
                    {number}
                  </span>
                  <span className="h-[170px] w-[0.5px] bg-white"></span>
                </div>

                <div className="flex flex-col items-start justify-center gap-4 bgred-500">
                  <Image src={img} width={30} height={30} alt="" />

                  <h3 className="text-[20px] uppercase">{title}</h3>

                  <p className="min-w-[200px] sm:max-w-[90%] md:max-w-[70%]">
                    {content}
                  </p>

                  <Link
                    className="px-[15px] py-[7px] rounded-[25px] border-[0.4px] border-white hover:normalGradient hover:text-black ease-out transition-all transitin-colors duration-200"
                    href={link}
                  >
                    See Examples
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};
