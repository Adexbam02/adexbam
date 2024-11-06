import Image from "next/image";
import stackk from "../../public/svgs/stacks/stack";

export const StackWall = () => {
  return (
    <div className="px-[22.5px] py-[35px] relative border-white/20 border-t-[0px] border-b-[1px] md:border-x-[1px] h-[55px] w-[100%] bg-transparent flex items-center justify-between">
    {
      stackk.map(({id, img}) => (
        <Image
        key={id}
        src={img}
        width={30}
        height={20}
        alt="star"
        className="grayscale cursor-pointer transition-all hover:grayscale-0 sm:w-[35px]"
      />
      ))
    }
    </div>
  )
}
