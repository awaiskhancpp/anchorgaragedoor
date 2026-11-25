import Image from "next/image";
import { PhoneIconFilled } from "@/components/icons";

export default function InnerHero({
  title,
  description,
  image,
  showDialButton = true,
}: {
  title: string;
  description?: string;
  image: string;
  showDialButton?: boolean;
}) {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden text-center text-white max-lg:min-h-[60vh] max-md:min-h-[80vh]">
      <Image src={image} alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-dark/60" />
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 relative z-10 flex flex-col items-center gap-6">
        <h1>{title}</h1>
        {description && <p className="max-w-2xl text-white mt-[5px] mb-[15px]">{description}</p>}
        <div className="flex flex-wrap justify-center gap-4">
          {showDialButton && (
            <a
              href="tel:8332004087"
              className="group inline-flex items-center justify-center gap-[10px] rounded-lg border border-accent bg-accent px-[15px] py-[13px] text-center text-lg font-semibold capitalize leading-none text-white transition-[background-color,border-color,color] duration-[250ms] ease hover:border-white hover:bg-white hover:text-accent"
            >
              <PhoneIconFilled className="h-7 w-7 [&>circle]:transition-[fill,fill-opacity] [&>circle]:duration-[250ms] group-hover:[&>circle]:fill-accent group-hover:[&>circle]:[fill-opacity:1] group-hover:[&>path]:fill-white" />
              Dial Now (833) 200-4087
            </a>
          )}
          <a
            href="/freequote"
            className="inline-flex items-center justify-center gap-[10px] rounded-lg border border-white bg-white px-[42px] py-5 text-center text-lg font-semibold capitalize leading-none text-accent transition-[background-color,border-color,color] duration-[250ms] ease hover:border-accent hover:bg-accent hover:text-white"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
