"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect } from "react";

import { process } from "../ui/data";
import { Title } from "@/ui/Title";

import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// import { useGSAP } from "@gsap/react";

gsap.registerPlugin(Observer); // Register the Observer plugin
gsap.registerPlugin(ScrollTrigger);


export const Process = () => {
  // Heading Text animation

  useGSAP(() => {
    gsap.fromTo(
      "#headTe",
      { opacity: 0, y: 0 },
      {
        opacity: 1,
        y: -50,
        duration: 1,
        // delay: 1,
        scrollTrigger: {
          trigger: "#headTe",
          start: "top 90%",
          end: "bottom 60%",
          scrub: true,
          markers: false,
        },
      }
    );
  });
  // useEffect(() => {}, []);

  // useEffect(() => {
  //   gsap.fromTo(
  //     ".animate",
  //     { opacity: 0, y: 50 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       scrollTrigger: {
  //         trigger: ".animate",
  //         start: "top 80%",
  //         end: "bottom 80%",
  //         scrub: true,
  //         markers: true, // Remove this line in production
  //       },
  //     }
  //   );
  // }, []);

  useGSAP(() => {
    // const items = gsap.utils.toArray(".animate")
    const items = gsap.utils.toArray(".animate") as Element[];
    items.forEach((item) => {
      return gsap.fromTo(
        item ,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "bottom 60%",
            scrub: true,
            markers: false,
          },
        }
      );
    });
  }, []);

  // useEffect(() => {
  //   const items = gsap.utils.toArray(".animate") as Element[];
  //   items.forEach((item) => {
  //     gsap.fromTo(
  //       item,
  //       { opacity: 0, y: 50 },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         scrollTrigger: {
  //           trigger: item,
  //           start: "top 90%",
  //           end: "bottom 60%",
  //           scrub: true,
  //           markers: false,
  //         },
  //       }
  //     );
  //   });
  // }, []);

  // gsap.to("workDone", {rotate: 90})
  useEffect(() => {
    const items = gsap.utils.toArray(".workDone").slice(1) as Element[];
    items.forEach((item, index) => {
      const rotationValue = index === 1 ? 265 : 180;
      gsap.fromTo(
        item,
        { rotation: 0 },
        {
          rotation: rotationValue,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            end: "bottom 60%",
            // end: "bottom 20%",
            scrub: true,
            // markers: true,
          },
        }
      );
    });
  }, []);

  // useEffect(() => {
  //   const items = gsap.utils.toArray(".workDone").slice(2); // Exclude the first and second items
  //   items.forEach((item, index) => {
  //     const rotationValue = index === 0 ? 90 : 180; // Adjust index to match the new array
  //     gsap.fromTo(
  //       item,
  //       { rotation: 0 },
  //       {
  //         rotation: rotationValue,
  //         scrollTrigger: {
  //           trigger: item,
  //           start: "top 90%",
  //           end: "bottom 60%",
  //           scrub: true,
  //           markers: true,
  //         },
  //       }
  //     );
  //   });
  // }, []);

  useEffect(() => {
    Observer.create({
      target: "#id",
      onChangeX: () => {
        console.log("Hover");

        const timeline = gsap.timeline();

        timeline.to("#id", { x: -20 });
      },
    });
  }, []);

  return (
    <section className="mt-[3.3rem] px-[23px] flex items-center justfy-center md:px-[60px]  lg:px-[9rem]">
      <div className="md:flex items-start justify-center flex-col gap-2 md:w-[100%]">
        <span id="headTe" className="mt-[1rem]">
          <Title title="My Process to Design" mb="mb-[-2.3rem]" />
        </span>

        <div
          id="#idd"
          className="mt-[3rem] md:mt-0 flex flex-col items-start bg-reen-300 justify-center gap-[2rem] md:[100%]"
        >
          {process.map(({ id, number, img, title, content, link }) => (
            <div
              key={id}
              className="animate flex items-start justify-between gap-4 bg-rd-500 md:w-[90%]"
            >
              <div className="flex flex-col items-center justify-center gap-2 bgblue-200">
                <span className="text-[15px] lg:text-[20px] border-[1px] border-white rounded-full w-[35px] h-[35px] lg:w-[45px] lg:h-[45px] flex items-center justify-center">
                  {number}
                </span>
                <span className="h-[170px] w-[0.5px] bg-white"></span>
              </div>

              <div className="flex flex-col items-start justify-center gap-4 bgred-500">
                <span className=" last:rotate-[90deg] last:bg-red-400">
                  <Image
                    id="workDone"
                    src={img}
                    width={30}
                    height={30}
                    alt=""
                    className="workDone lg:w-[40px] lg:h-[40px] rotate-[85deg]"
                  />
                </span>

                <h3 className="text-[20px] lg:text-[25px] uppercase">
                  {title}
                </h3>

                <p className="w-[100%] sm:max-w-[90%] md:max-w-[95%] lg:text-[20px] lg:font-normal lg:leading-none">
                  {content}
                </p>

                <Link
                  className="px-[15px] py-[7px] rounded-[25px] border-[0.4px] border-white hover:normalGradient text-white ease-out transition-all transitin-colors duration-200"
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
