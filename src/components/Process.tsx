import Image from "next/image";

import doubleStar from "../../public/svgs/doubleStar.svg";
import processOne from "../../public/processOne.png";
import Link from "next/link";
export const Process = () => {
  return (
    <section className="fex items-center justify-between">
      <div className="title flex items-center justify-center gap-1">
        <h2 className="text-[20px]">My process to design</h2>
        <Image src={doubleStar} width={20} height={20} alt="star" />
      </div>

      <div className="content">
        <div>
          <div>
            <div className="flex flex-col justify-center items-center gap-2">
              <span className="text-[15px]">1</span>
              <span className="h-[100px] w-1"></span>
            </div>

            <div className="flex flex-col items-start justify-center">
              <Image src={processOne} width={20} height={20} alt="" />

              <h3>Step 1: Product design Research</h3>

              <p className="min-w-[200px]">
                This initial step involves a systematic and thorough exploration
                of the market landscape, user needs, and existing solutions.
              </p>

              <Link href={"/"} >See Examples</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
