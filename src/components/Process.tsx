"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";

import { process } from "../ui/data";
import { Title } from "@/ui/Title";

import gsap from "gsap";
import { Observer } from "gsap/Observer"; 

gsap.registerPlugin(Observer); // Register the Observer plugin

export const Process = () => {
  useEffect(() => {
    Observer.create({
      target: "#id",
      onHover: () => {
        console.log("Hover");

        const timeline = gsap.timeline()

        timeline.to("#id", {x: -20})
      },
    });
  }, []);

  return (
    <section className="mt-[3.3rem] px-[23px] flex items-center justfy-center md:px-[60px]  lg:px-[9rem]">
      <div className="md:flex items-start justify-center flex-col gap-2 md:w-[100%]">
        <Title title="My Process to Design" />
        <h1 id="id">Hover over me</h1>
        <div className="flex flex-col items-start bg-reen-300 justify-center gap-[2rem] md:[100%]">
          {process.map(({ id, number, img, title, content, link }) => (
            <div
              // id={String(id)}
              key={id}
              className="flex items-start justify-between gap-4 bg-rd-500 md:w-[90%]"
            >
              <div className="flex flex-col items-center justify-center gap-2 bgblue-200">
                <span className="text-[15px] lg:text-[20px] border-[1px] border-white rounded-full w-[35px] h-[35px] lg:w-[45px] lg:h-[45px] flex items-center justify-center">
                  {number}
                </span>
                <span className="h-[170px] w-[0.5px] bg-white"></span>
              </div>

              <div className="flex flex-col items-start justify-center gap-4 bgred-500">
                <Image
                  src={img}
                  width={30}
                  height={30}
                  alt=""
                  className="lg:w-[40px] lg:h-[40px]"
                />

                <h3 className="text-[20px] lg:text-[25px] uppercase">
                  {title}
                </h3>

                <p className="w-[100%] sm:max-w-[90%] md:max-w-[95%] lg:text-[20px] lg:font-normal lg:leading-none">
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
      </div>
    </section>
  );
};
