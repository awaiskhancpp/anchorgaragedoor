import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";
import CopyrightYear from "@/components/CopyrightYear";
import SiteCreditBadge from "@/components/SiteCreditBadge";

const footerServiceOrder = [
  "broken-spring-repair",
  "broken-cable-repair",
  "garage-door-opener",
  "garage-door-maintenance",
  "new-garage-door-installation",
  "garage-door-off-track-repair",
  "new-gate-installation",
  "electric-gate-repair",
  "gate-opener-installation",
  "access-control-installation",
];

const footerServices = footerServiceOrder
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is (typeof services)[number] => Boolean(service));

const FOOTER_MUTED_TEXT = "text-base font-normal leading-normal text-[#7b7b7b]";
const FOOTER_LIST_BASE = `m-0 list-none p-0 ${FOOTER_MUTED_TEXT}`;
const FOOTER_LABEL = "mb-1 text-base font-medium uppercase leading-normal text-[#606a83]";
const FOOTER_LINK_HOVER = "text-inherit no-underline transition-colors duration-300 hover:text-white focus-visible:text-white";

function ServiceList({
  items,
  className = "",
}: {
  items: typeof footerServices;
  className?: string;
}) {
  return (
    <ul className={`${FOOTER_LIST_BASE} ${className}`}>
      {items.map((service) => (
        <li key={service.slug} className="py-1">
          <Link href={`/service/${service.slug}`} className={FOOTER_LINK_HOVER}>
            {service.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-white">
      <div className="bg-dark px-5 pt-[30px] pb-10 md:px-[10px] md:py-[30px] lg:py-[100px]">
        <div className="mx-auto block w-full max-w-[1320px] md:grid md:grid-cols-[repeat(3,31.5%)] lg:grid-cols-[40%_30%_30%]">
          <div>
            <Image
              src="/images/anchor-garage-door-logo-white.png"
              alt="Anchor Garage Door and Gate Services, Inc"
              width={1511}
              height={433}
              className="block h-auto w-1/2 max-w-none lg:w-[55%]"
            />

            <div className="mt-[30px]">
              <h5 className={FOOTER_LABEL}>Normal hours:</h5>
              <ul className={FOOTER_LIST_BASE}>
                <li className="py-1">Monday - Sunday 6am to 9pm</li>
                <li className="py-1">24/7 Emergency Service</li>
              </ul>
            </div>

            <div className="mt-5">
              <h5 className={FOOTER_LABEL}>Contact Info:</h5>
              <ul className={FOOTER_LIST_BASE}>
                <li className="py-1">
                  <a href="tel:833-200-4087" className={FOOTER_LINK_HOVER}>
                    Phone: <strong className="font-bold">(833) 200-4087</strong>
                  </a>
                </li>
                <li className="py-1">
                  <a href="mailto:info@anchorgaragedoor.com" className={FOOTER_LINK_HOVER}>
                    Email: <strong className="font-bold">info@anchorgaragedoor.com</strong>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h6 className="text-base font-medium leading-normal text-white">What We Offer</h6>
            <ServiceList items={footerServices.slice(0, 6)} className="mt-7" />
          </div>

          <div>
            <ServiceList items={footerServices.slice(6)} className="mt-0 md:mt-9 lg:mt-14" />
          </div>
        </div>
      </div>

      <div className="border-t border-[#ffffff3d] bg-dark">
        <div className={`w-full px-5 pb-[76px] pt-[10px] text-center md:px-[10px] md:py-5 ${FOOTER_MUTED_TEXT}`}>
          <p className="m-0">
            Anchor Garage Door and Gate Services Inc © Copyright <CopyrightYear />.
          </p>
        </div>
      </div>
      </footer>

      <SiteCreditBadge />
    </>
  );
}
