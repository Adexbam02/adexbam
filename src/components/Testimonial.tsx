"use client";

import Image from "next/image";

import { Title } from "@/ui/Title";

import mark from "../../public/svgs/mark.svg";
import { testimonial } from "@/ui/data";

import { useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export const Testimonial = () => {
  // Heading Text animation
  useEffect(() => {
    gsap.fromTo(
      "#headTex",
      { opacity: 0, y: 0 },
      {
        opacity: 1,
        y: -50,
        duration: 1,
        // delay: 1,
        scrollTrigger: {
          trigger: "#headTex",
          start: "top 90%",
          end: "bottom 60%",
          scrub: true,
          markers: false,
        },
      }
    );

    gsap.fromTo(
      "#testimonial",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: -30,
        duration: 1,
        // delay: 1,
        scrollTrigger: {
          trigger: "#testimonial",
          start: "top 90%",
          end: "bottom 70%",
          scrub: true,
          markers: false,
        },
      }
    );
    
  }, []);

  return (
    <section className="mt-[3.3rem] px-[23px] md:px-[60px]  lg:px-[9rem]">
      <div>
        <span id="headTex" className="mt-[1rem]">
          <Title title="Client Testimonials" mb="mb-[2.3rem]" />
        </span>
        <div
          id="testimonial"
          className="-[15px] md:p-0 flex flex-col items-center justify-center gap-[1.5rem] md:gap-[.5rem] md:grid md:grid-cols-2"
        >
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
