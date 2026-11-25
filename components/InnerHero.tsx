import Image from "next/image";
import DialNowButton from "@/components/DialNowButton";

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
      <div className="relative z-10 mx-auto flex w-full max-w-[820px] flex-col items-center gap-6 px-5 sm:px-8">
        <h1 className="w-full max-w-full">{title}</h1>
        {description && <p className="mt-[5px] mb-[15px] w-full max-w-full text-[17px] leading-[1.5] text-white">{description}</p>}
        <div className="flex flex-wrap justify-center gap-4">
          {showDialButton && <DialNowButton />}
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
