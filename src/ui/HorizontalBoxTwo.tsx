
export const HorizontalBoxTwo = () => {
  return (
    <div className="relative g-red-600 border-white/20 border-t-[1px] border-b-[0px] h-[55px] w-[100%] bg-transparent flex items-start">
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px] border-l-[1px]"></div>
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px]"></div>
        <div className="h-[100%] w-[25%] border-white/20 border-r-[1px] "></div>
        <div className="h-[100%] w-[25%] border-white/20 hidden md:block md:border-r-[1px] "></div>
      </div>
  )
}
