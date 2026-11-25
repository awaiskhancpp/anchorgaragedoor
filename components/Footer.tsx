import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/services";
import CopyrightYear from "@/components/CopyrightYear";

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

function ServiceList({
  items,
  className = "",
}: {
  items: typeof footerServices;
  className?: string;
}) {
  return (
    <ul className={`m-0 list-none p-0 text-base font-normal leading-normal text-[#7b7b7b] ${className}`}>
      {items.map((service) => (
        <li key={service.slug} className="py-1">
          <Link
            href={`/service/${service.slug}`}
            className="text-inherit no-underline transition-colors duration-300 hover:text-white focus-visible:text-white"
          >
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
              <h5 className="mb-1 text-base font-medium uppercase leading-normal text-[#606a83]">Normal hours:</h5>
              <ul className="m-0 list-none p-0 text-base font-normal leading-normal text-[#7b7b7b]">
                <li className="py-1">Monday - Sunday 6am to 9pm</li>
                <li className="py-1">24/7 Emergency Service</li>
              </ul>
            </div>

            <div className="mt-5">
              <h5 className="mb-1 text-base font-medium uppercase leading-normal text-[#606a83]">Contact Info:</h5>
              <ul className="m-0 list-none p-0 text-base font-normal leading-normal text-[#7b7b7b]">
                <li className="py-1">
                  <a
                    href="tel:833-200-4087"
                    className="text-inherit no-underline transition-colors duration-300 hover:text-white focus-visible:text-white"
                  >
                    Phone: <strong className="font-bold">(833) 200-4087</strong>
                  </a>
                </li>
                <li className="py-1">
                  <a
                    href="mailto:info@anchorgaragedoor.com"
                    className="text-inherit no-underline transition-colors duration-300 hover:text-white focus-visible:text-white"
                  >
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
        <div className="w-full px-5 pb-[76px] pt-[10px] text-center text-base font-normal leading-normal text-[#7b7b7b] md:px-[10px] md:py-5">
          <p className="m-0">
            Anchor Garage Door and Gate Services Inc © Copyright <CopyrightYear />.
          </p>
        </div>
      </div>
      </footer>

      <p className="relative z-[1] bg-white px-4 py-3 text-center text-[13px] leading-[1.5] text-[#555] [font-family:-apple-system,BlinkMacSystemFont,'Segoe_UI',Roboto,Helvetica,Arial,sans-serif]">
        Website by{" "}
        <a href="https://1realtour.com/" aria-label="1REALTOUR" className="text-black no-underline">
          <svg
            viewBox="-15 -65 8511 1594"
            role="img"
            aria-label="1REALTOUR"
            focusable="false"
            fill="currentColor"
            className="inline-block h-[1.05em] w-auto align-[-0.16em]"
          >
            <title>1REALTOUR</title>
            <g transform="translate(0,1464) scale(1,-1)">
              <path d="M242 1061H25V1233Q157 1284 243.5 1350.5Q330 1417 356 1473H543L541 1323V150L543 0H240L242 150Z" />
              <path
                transform="translate(697,0)"
                d="M492 582H401V150L403 0H96L98 150V1315L96 1464H496Q600 1464 678.5 1440.5Q757 1417 806.0 1377.5Q855 1338 886.0 1280.0Q917 1222 928.5 1159.0Q940 1096 940 1018V1014Q940 758 778 655L973 0H649ZM401 1208V831H461Q558 831 594.5 880.5Q631 930 631 1018V1022Q631 1109 595.0 1158.5Q559 1208 465 1208Z"
              />
              <path
                transform="translate(1736,0)"
                d="M717 631H401V262H801V0H96L98 150V1315L96 1464H793V1202H401V897H717Z"
              />
              <path
                transform="translate(2625,0)"
                d="M358 276 315 0H8L279 1464H696L965 0H662L616 276ZM455 879 401 543H573L520 879Q499 1032 494 1108H481Q473 987 455 879Z"
              />
              <path transform="translate(3637,0)" d="M760 0H96L98 150V1315L96 1464H403L401 1315V262H760Z" />
              <path
                transform="translate(4459,0)"
                d="M850 1202H588V150L590 0H283L285 150V1202H23V1464H850Z"
              />
              <path
                transform="translate(5371,0)"
                d="M508 -25Q322 -25 217 66Q147 127 115.5 238.0Q84 349 84 559V905Q84 1116 115.5 1227.0Q147 1338 217 1399Q324 1489 508 1489Q690 1489 797 1399Q867 1338 899.5 1226.5Q932 1115 932 905V559Q932 349 899.5 238.0Q867 127 797 66Q692 -25 508 -25ZM625 496V969Q625 1009 624.5 1029.5Q624 1050 621.0 1084.5Q618 1119 610.5 1137.5Q603 1156 590.5 1176.0Q578 1196 557.0 1205.0Q536 1214 508.0 1214.0Q480 1214 459.0 1205.0Q438 1196 425.5 1176.0Q413 1156 405.5 1137.5Q398 1119 395.0 1084.5Q392 1050 391.5 1029.5Q391 1009 391 969V496Q391 456 391.5 435.5Q392 415 395.0 380.5Q398 346 405.5 327.5Q413 309 425.5 288.5Q438 268 459.0 259.0Q480 250 508.0 250.0Q536 250 557.0 259.0Q578 268 590.5 288.5Q603 309 610.5 327.5Q618 346 621.0 380.5Q624 415 624.5 435.5Q625 456 625 496Z"
              />
              <path
                transform="translate(6426,0)"
                d="M625 1464H934L932 1315V387Q932 189 820.5 82.0Q709 -25 508 -25Q309 -25 198.5 82.0Q88 189 88 387V1315L86 1464H395L393 1315V416Q393 333 419.5 291.5Q446 250 508 250Q573 250 600.0 291.5Q627 333 627 416V1315Z"
              />
              <path
                transform="translate(7483,0)"
                d="M492 582H401V150L403 0H96L98 150V1315L96 1464H496Q600 1464 678.5 1440.5Q757 1417 806.0 1377.5Q855 1338 886.0 1280.0Q917 1222 928.5 1159.0Q940 1096 940 1018V1014Q940 758 778 655L973 0H649ZM401 1208V831H461Q558 831 594.5 880.5Q631 930 631 1018V1022Q631 1109 595.0 1158.5Q559 1208 465 1208Z"
              />
            </g>
          </svg>
        </a>
      </p>
    </>
  );
}
