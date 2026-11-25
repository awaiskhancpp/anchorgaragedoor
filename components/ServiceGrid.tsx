import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/services";

export default function ServiceGrid({ items }: { items: Service[] }) {
  return (
    <div className="grid grid-cols-1 gap-[14px] md:grid-cols-2 lg:gap-5">
      {items.map((service) => (
        <article
          key={service.slug}
          className="group grid min-w-0 grid-cols-1 gap-[14px] overflow-hidden rounded-[15px] border border-[#dedede] bg-white p-[14px] md:min-h-[245px] md:grid-cols-[44%_minmax(0,1fr)] md:gap-[35px] lg:min-h-[338px] lg:grid-cols-[48%_minmax(0,1fr)] lg:gap-[30px] lg:rounded-[20px] lg:p-5"
        >
          <div className="relative min-h-[190px] min-w-0 overflow-hidden rounded-[7px] md:min-h-[215px] lg:min-h-[296px]">
            <Image
              src={service.bodyImage}
              alt={service.title}
              fill
              sizes="(min-width: 1025px) 24vw, (min-width: 768px) 40vw, 100vw"
              className="object-cover transition-transform duration-[350ms] ease-in-out group-hover:scale-[1.03]"
            />
          </div>

          <div className="flex min-h-[185px] min-w-0 flex-col justify-between pb-[2px] pl-[2px] pr-[2px] pt-0 md:min-h-0 md:pb-0 md:pl-[10px] md:pr-2 md:pt-[7px] lg:p-[10px] lg:pb-0">
            <div className="min-w-0">
              <h3 className="mb-[10px] text-base font-bold leading-[1.2] text-ink lg:mb-[15px] lg:text-[22px]">
                {service.title}
              </h3>
              <p className="text-[13px] leading-[1.55] text-ink lg:text-[17px] lg:leading-[1.5]">
                {service.shortDescription}
              </p>
            </div>

            <div className="flex min-h-12 items-center justify-between gap-3 lg:min-h-[59px]">
              <Link
                href={`/service/${service.slug}`}
                className="inline-flex min-h-8 items-center justify-center rounded-[5px] border border-accent bg-accent px-3 py-2 text-[11px] leading-none text-white no-underline transition hover:bg-white hover:text-accent lg:min-h-11 lg:rounded-[8px] lg:px-[15px] lg:py-[13px] lg:text-sm"
              >
                Read More
              </Link>
              <span
                className="grid h-12 w-12 flex-none place-items-center rounded-full bg-[#f0f5e9] lg:h-[59px] lg:w-[65px] lg:bg-transparent"
                aria-hidden="true"
              >
                <Image src={service.heroIcon} alt="" width={46} height={46} className="h-auto max-h-[46px] w-auto max-w-[46px]" />
              </span>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
