// import Image from "next/image"
// import star from "../../public/svgs/star.svg"

export const HorizontalBoxOne = () => {
  return (
    <div className="bg-re relative border-white/20 border-t-[1px] bg-r border-b-[1px] h-[55px] w-[100%] bg-transparent flex items-start">
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px] md:border-l-[1px]"></div>
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px] "></div>
        <div className="h-[100%] w-[25%] border-white/20 md:border-r-[1px]"></div>
        {/* <Image
          src={star}
          width={20}
          height={20}
          alt="star"
          className="absolute top-[80%] left-[23%] sm:left-[23.5%]"
        />
        <Image
          src={star}
          width={20}
          height={20}
          alt="star"
          className="absolute top-[80%] left-[73%] sm:left-[73.4%]"
        /> */}
      </div>
  )
}
