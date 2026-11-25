"use client";

import { usePathname } from "next/navigation";

export default function SiteCreditBadge() {
  const pathname = usePathname();

  if (pathname !== "/about-us") return null;

  return (
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
  );
}
