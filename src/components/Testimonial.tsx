import { Title } from "@/ui/Title";
import Image from "next/image";

import mark from "../../public/svgs/mark.svg";
import { testimonial } from "@/ui/data";
export const Testimonial = () => {
  return (
    <section className="mt-[3.3rem] px-[23px] md:px-[60px]  lg:px-[9rem]">
      <div>
        <Title title="Client Testimonials" />

        <div className="-[15px] md:p-0 flex flex-col items-center justify-center gap-[1.5rem] md:gap-[.5rem] md:grid md:grid-cols-2">
          {testimonial.map(({ id, profile, name, title, context }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center p-[15px] rounded-[15px] border-[.0px] gradient-border gap-2 md:w-[]"
            >
              <div className="flex items-center justify-between w-[100%]">
                <div className="flex items-center justify-between  gap-3">
                  <span className="flex items-center justify-center bg-red-300 w-[50px] h-[50px] rounded-full overflow-hidden">
                    <Image
                      src={profile}
                      width={50}
                      height={50}
                      className="object-cover w-[100%]"
                      alt=""
                    />
                  </span>

                  <span>
                    <p>{name}</p>
                    <small>{title}</small>
                  </span>
                </div>

                <Image src={mark} width={50} height={50} alt="" />
              </div>
              <p className="text-[15px] font-light leading-none p-2 text-start">
                {context}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
