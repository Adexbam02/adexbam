"use client";
import { useState } from "react";
import Image from "next/image";
import { Title } from "@/ui/Title";

import click from "../../public/svgs/click.svg";
import { projects } from "@/ui/data";

export const Project = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const handleHoverIn = (id) => {
    setHoveredId(id);
  };

  const handleHoverOut = () => {
    setHoveredId(null);
  };

  return (
    <section className="mt-[3.3rem] px-[23px]">
      <div>
        <Title title="Some Featured Projects" />

        <div className="flex flex-col items-start justify-normal gap-[1rem] sm:p-[20px] md:flex-row md:flex-wrap">
          {projects.map(({ id, img, title, context }) => (
            <div
              key={id}
              className="bg-[#151515] rounded-[5px] p-[25px] flex flex-col items-start justify-start gap-[1rem] md:flex-row  "
            >
              <a
                href="/"
                className="w-[100%] relative"
                onMouseEnter={() => handleHoverIn(id)}
                onMouseLeave={handleHoverOut}
              >
                <div
                  className={`${
                    hoveredId === id ? "flex" : "hidden"
                  } absolute bg-[#151515]/50 flex items-center justify-center w-[100%] h-[100%]`}
                >
                  <span className="flex items-center justify-center flex-col">
                    <Image
                      src={click}
                      width={30}
                      height={30}
                      alt=""
                      className="stroke-[#fff]"
                    />
                    <small className="underline font-medium uppercase">
                      Click to view live!
                    </small>
                  </span>
                </div>
                <Image
                  src={img}
                  width={100}
                  height={100}
                  className="w-[100%]"
                  alt=""
                />
              </a>
              <span className="flex flex-col items-start">
                <a href="/" className="text-[20px] font-semibold hover:underline transition-all md:text-[30px] md:font-medium">{title}</a>
                <p className="text-[15px] font-light">{context}</p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
