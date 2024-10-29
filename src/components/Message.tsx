import { Title } from "@/ui/Title";
import Link from "next/link";

export const Message = () => {
  return (
    <section className="mt-[3.3rem] px-[23px]">
      <div>
        <Title title="Have Idea about Project?" />

        <div className="flex flex-col items-start justify-start gap-[1rem]">
          <p>
            Write anything here something about yourself to showcase what
            actually you doing or targeting etc.
          </p>
          <Link href={"/"} className="px-[15px] py-1 text-black bg-white rounded-[25px]">Send us a message</Link>
        </div>
      </div>
    </section>
  );
};
