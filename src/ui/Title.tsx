import Image from "next/image";
import doubleStar from "../../public/svgs/doubleStar.svg";

interface TitleProps {
  title: string;
}

export const Title = ({ title }: TitleProps) => {
  return (
    <div className="title mb-[2.5rem] flex items-start justify-start gap-1">
      <h2 className="text-[25px] font-medium">{title}</h2>
      <Image src={doubleStar} width={25} height={25} alt="star" />
    </div>
  );
};
