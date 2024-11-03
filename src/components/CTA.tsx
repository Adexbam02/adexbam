"use client";
import { Title } from "@/ui/Title";
import adexbam from "../../public/adexbam.png";
// import close from "../../public/svgs/closeForm.svg";
import Image from "next/image";
// import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
// type FormValues = {
//   name: string
//   email: string
//   message: string
// }

export const CTA = () => {
  const [display, setDisplay] = useState("hidden");

  const handleDisplay = () => {
    setDisplay("block");
  };
  // const { register, handleSubmit } = useForm<FormValues>()
  // const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data)

  return (
    <section className="mt-[3.3rem] px-[23px] md:px-[60px] relative  lg:px-[9rem]">
      <div className="px-[22.3px] md:px-0  flex-col md:py-[3rem] md:ctaBg">
        <Title title="Have Idea about Project?" />

        <div className="flex flex-col items-start justify-start gap-[1rem] md:iems-center md: ustify-center">
          <p className="md:max-w-[50%] md:text-cnter md:text-[px]">
            Write anything here something about yourself to showcase what
            actually you doing or targeting etc.
          </p>
          <button
            onClick={() => {
              handleDisplay();
              document.body.style.overflow = "hidden";
            }}
            className="px-[15px] py-1 text-black bg-white rounded-[25px] md:py-[0.50rem]"
          >
            Send us a message
          </button>

          <div className={`${display} w-[85%] relative`}>
            <form
              // onSubmit={handleSubmit(onSubmit)}
              className="text-white flex items-center justify-center flex-col gap-[.4rem] absolute left-[10%] bottom-[-20%] right-[50%] z-10 px-[1rem] py-[2.5rem] g-[#F6F6F6] bg-[#171717] border-[2px] border-white w-[100%] "
            >
              <div className=" flex items-center justify-center flex-col w-[100%] gap-[2.4rem]">
                <div>
                  <div className="flex items-center justify-center">
                    <Image src={adexbam} width={25} height={25} alt="Adexbam" />
                    <h2 className="text-[30px] font-medium text-[151515]">
                      adexbam
                    </h2>
                  </div>

                  <div className="flex flex-col items-center justify-center leading-none text-lack">
                    <h2 className="text-[25px] font-medium">Send us Message</h2>
                    <p className="text-[15px] font-light">
                      Get free contact details of decision-
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center flex-col gap-3 w-[100%] ">
                  <input
                    type="text"
                    placeholder="Name"
                    className=""
                    // {...register("name")}
                  />

                  <input
                    type="email"
                    // {...register("email")}
                    placeholder="Email"
                    className=" "
                  />

                  <textarea
                    // {...register("message")}
                    placeholder="Write us a message"
                    className="h-[5rem] border-black "
                  ></textarea>

                  <div className="w-[100%] flex items-center justify-center gap-[.4rem]">
                    <button
                      type="reset"
                      onClick={() => {
                        setDisplay("hidden");
                        document.body.style.overflow = "auto";
                      }}
                      className="bg-gray-400 w-[100%] p-2 rounded-[4px] flexCenter cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="normalGradient w-[100%] p-2 rounded-[4px]"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
