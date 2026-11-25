import Image from "next/image";
import { EyebrowIcon } from "@/components/icons";

export default function BrandGallery({ title, logos }: { title: string; logos: string[] }) {
  return (
    <section className="mb-[30px] bg-white px-[10px] pb-[30px] pt-[50px] md:mb-[60px] md:pb-[50px] md:pt-[100px]">
      <div className="mx-auto w-full max-w-[1320px]">
        <p className="flex items-center justify-center gap-2 font-heading text-base font-semibold capitalize leading-normal text-eyebrow md:text-xl md:leading-[25.5px]">
          <EyebrowIcon className="h-9 w-9 flex-none" />
          Our Trusted Partners
        </p>
        <h2 className="text-center font-medium capitalize text-ink">
          {title}
        </h2>
        <div className="mt-[30px] grid grid-cols-3 items-stretch md:mt-[50px] md:grid-cols-5">
          {logos.map((logo) => (
            <figure
              key={logo}
              className="m-0 flex h-[84px] w-full min-w-0 items-center justify-center border-[0.8px] border-[#f2f2f2] md:h-[120px]"
            >
              <Image
                src={`/images/${logo}`}
                alt=""
                width={160}
                height={90}
                className="block h-auto w-[90px] max-w-full object-contain grayscale-0 transition-[filter] duration-[600ms] ease-in-out md:w-[180px] md:grayscale md:hover:grayscale-0 md:focus-visible:grayscale-0"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
