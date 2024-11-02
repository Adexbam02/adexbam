import Image from "next/image"
import adexbam from "../../public/adexbam.png"

export const Footer = () => {
  return (
    <footer className="px-[50px] my-[.7rem] md:flex md:items-center md:justify-center">
        <a href="#" className="logo flex justify-start items-center">
          <Image src={adexbam} width={30} height={30} alt="Adexbam" />
          <h2 className="text-[20px] font-medium">AdexBam</h2>
        </a>
    </footer>
  )
}
