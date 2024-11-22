import Image from "next/image";
import stackk from "../../public/svgs/stacks/stack";

export const StackWall = () => {
  return (
    <div className="px-[22.5px] py-[35px] relative border-white/20 border-t-[0px] border-b-[1px] md:border-x-[1px] h-fit w-[100%] bg-transparent grid grid-cols-4 gap-x-[5px] gap-y-[5px]">
      {/* <Title title="dss" mb=""/> */}
      <div className="rounded-[3px] bg-[#202127] grid place-items-center w-[100px] h-[100px] font-medium text-[20px]">
        Skills 
      </div>
      {stackk.map(({ id, img }) => (
        <div
          key={id}
          className="w-[100px] h-[100px]  rounded-[3px] bg-[#202127] grid place-items-center"
        >
          <Image
            src={img}
            width={30}
            height={20}
            alt="star"
            className=" p- md:grayscale cursor-pointer transition-all hover:grayscale-0 sm:w-[40px]"
          />
        </div>
      ))}
    </div>
  );
};
