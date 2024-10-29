import Image from "next/image";
import { Title } from "@/ui/Title";

// import greatAspiration from "../../public/Great-Aspiration.png";
import { projects } from "@/ui/data";

export const Project = () => {
  return (
    <section className="mt-[3.3rem] px-[23px]">
      <div>
        <Title title="Some Featured Projects" />

        <div className="flex flex-col items-start justify-normal gap-[1rem]">
          {projects.map(({ id, img, title, context }) => (
            <div
              key={id}
              className="bg-[#151515] rounded-[5px] p-[25px] flex flex-col items-start justify-start gap-[1rem]"
            >
              <a href="/" className="w-[100%]">
                <Image
                  src={img}
                  width={100}
                  height={100}
                  className="w-[100%]"
                  alt=""
                />
              </a>
              <span className="flex flex-col items-start">
                <h1 className="text-[20px] font-semibold">{title}</h1>
                <p className="text-[15px] font-light">
                  {context}
                </p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
