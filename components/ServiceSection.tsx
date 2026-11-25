import { EyebrowIcon } from "@/components/icons";
import ServiceGrid from "@/components/ServiceGrid";
import type { Service } from "@/lib/services";

type ServiceSectionProps = {
  eyebrow: string;
  description: string;
  items: Service[];
  id?: string;
};

export default function ServiceSection({ eyebrow, description, items, id }: ServiceSectionProps) {
  return (
    <section id={id} className="bg-white px-5 pb-10 pt-8 text-ink md:pb-4 md:pt-5 lg:pt-7">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-6 md:grid md:grid-cols-2 md:items-end md:gap-5 md:mb-5 lg:mb-10">
          <div className="min-w-0">
            <p className="mb-1 flex items-center gap-2 text-base font-semibold uppercase leading-normal text-eyebrow lg:text-xl">
              <EyebrowIcon className="h-[30px] w-[30px] flex-none lg:h-[38px] lg:w-[38px]" />
              {eyebrow}
            </p>
            <h2 className="max-w-[520px] font-medium text-ink">
              Fast &amp; Professional Services We Offer
            </h2>
          </div>
          <p className="mb-[18px] max-w-[580px] border-l-4 border-accent py-[3px] pl-[10px] text-sm leading-normal text-ink lg:mb-[22px] lg:pl-[15px] lg:text-[17px]">
            {description}
          </p>
        </div>
        <ServiceGrid items={items} />
      </div>
    </section>
  );
}
