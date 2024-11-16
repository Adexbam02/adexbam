import Image from "next/image";
import stackk from "../../public/svgs/stacks/stack";

export const StackWall = () => {
  return (
    <div className="px-[22.5px] py-[35px] relative border-white/20 border-t-[0px] border-b-[1px] md:border-x-[1px] h-fit w-[100%] bg-transparent flex items-center justify-center gap-3 flex-wrap">
    {
      stackk.map(({id, img}) => (
        <Image
        key={id}
        src={img}
        width={35}
        height={25}
        alt="star"
        className="md:grayscale cursor-pointer transition-all hover:grayscale-0 sm:w-[40px]"
      />
      ))
    }
    </div>
  )
}
