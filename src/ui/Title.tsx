import Image from "next/image";
import doubleStar from "../../public/svgs/doubleStar.svg";

interface TitleProps {
  title: string;
  mb: string;
}

export const Title = ({ title, mb }: TitleProps) => {
  return (
    <div className={`title ${mb} flex items-start justify-start gap-1`}>
      <h2 className="text-[30px] sm:text-[35px] font-medium lg:text-[40px]">
        {title}
      </h2>
      <Image
        src={doubleStar}
        width={25}
        height={25}
        alt="star"
        className="sm:w-[30px]"
      />
    </div>
  );
};
