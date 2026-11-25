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
    <section className="relative flex h-[420px] items-center justify-center overflow-hidden text-center text-white lg:h-[540px]">
      <Image src={image} alt="" fill priority className="object-cover" />
      <div className="absolute inset-0 bg-dark/60" />
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 relative z-10 flex flex-col items-center gap-6">
        <h1>{title}</h1>
        {description && <p className="max-w-2xl text-white">{description}</p>}
        <div className="flex flex-wrap justify-center gap-4">
          {showDialButton && (
            <a
              href="tel:8333494283"
              className="inline-flex items-center justify-center gap-[10px] rounded-lg border border-accent bg-accent px-[15px] py-[13px] text-center text-lg font-semibold capitalize leading-none text-white transition-[background-color,border-color,color] duration-[250ms] ease"
            >
              <PhoneIconFilled className="h-4 w-4" />
              Dial Now (833) 349-4283
            </a>
          )}
          <a
            href="/freequote"
            className="inline-flex items-center justify-center gap-[10px] rounded-lg border border-white bg-white px-[42px] py-5 text-center text-lg font-semibold capitalize leading-none text-accent transition-[background-color,border-color,color] duration-[250ms] ease"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
