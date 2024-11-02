import Image from "next/image";
import Link from "next/link";

import { process } from "../ui/data";
import { Title } from "@/ui/Title";
export const Process = () => {
  return (
    <section className="mt-[3.3rem] px-[23px] fex items-center justify-between">
      <Title title="My Process to Design" />

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

                <h3 className="text-[20px] uppercase">{title}</h3>

                <p className="min-w-[200px] sm:max-w-[90%]">{content}</p>

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
      </div>
    </section>
  );
};
