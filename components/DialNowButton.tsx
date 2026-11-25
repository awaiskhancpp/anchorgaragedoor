import { PhoneIconFilled } from "@/components/icons";
import { ACCENT_INVERT_HOVER } from "@/components/buttonStyles";

type Variant = "dark" | "light" | "schedule";

/**
 * Visual-only classes per placement:
 * - dark: hero panel on an accent-blue background (e.g. homepage hero)
 * - light: hero panel on a photo background (e.g. inner page heroes, blog sidebar)
 * - schedule: the larger CTA inside the homepage "Schedule A Service Request" card
 */
const VARIANT_CLASSES: Record<Variant, string> = {
  dark: "gap-[10px] rounded-lg border border-dark bg-dark px-[15px] py-[13px] text-center text-lg capitalize transition-[background-color,border-color,color] duration-[250ms] ease hover:border-white hover:bg-white hover:text-accent",
  light:
    "gap-[10px] rounded-lg border border-accent bg-accent px-[15px] py-[13px] text-center text-lg capitalize transition-[background-color,border-color,color] duration-[250ms] ease hover:border-white hover:bg-white hover:text-accent",
  schedule: `h-[69px] w-[353px] shrink-0 gap-2 rounded-[8px] px-6 text-[22px] max-[1600px]:h-[56px] max-[1600px]:w-auto max-[1600px]:px-[15px] max-[1600px]:text-[18px] max-md:h-[56px] max-md:px-4 max-md:text-[16px] ${ACCENT_INVERT_HOVER}`,
};

const VARIANT_ICON_CLASSES: Record<Variant, string> = {
  dark: "h-7 w-7 [&>circle]:transition-[fill,fill-opacity] [&>circle]:duration-[250ms] group-hover:[&>circle]:fill-accent group-hover:[&>circle]:[fill-opacity:1] group-hover:[&>path]:fill-white",
  light:
    "h-7 w-7 [&>circle]:transition-[fill,fill-opacity] [&>circle]:duration-[250ms] group-hover:[&>circle]:fill-accent group-hover:[&>circle]:[fill-opacity:1] group-hover:[&>path]:fill-white",
  schedule:
    "h-7 w-7 [&>circle]:transition-[fill,fill-opacity] [&>circle]:duration-[250ms] group-hover:[&>circle]:fill-accent group-hover:[&>circle]:[fill-opacity:1] group-hover:[&>path]:fill-white",
};

export default function DialNowButton({
  variant = "light",
  animate = true,
  className = "",
  phone = "8332004087",
  label = "(833) 200-4087",
}: {
  variant?: Variant;
  /** Fades the button in on mount, matching the live site's hero CTA. */
  animate?: boolean;
  className?: string;
  phone?: string;
  label?: string;
}) {
  return (
    <a
      href={`tel:${phone}`}
      className={`group inline-flex items-center justify-center font-semibold leading-none text-white ${
        animate ? "animate-[fadeIn_2s_ease] motion-reduce:animate-none" : ""
      } ${VARIANT_CLASSES[variant]} ${className}`}
    >
      <PhoneIconFilled className={VARIANT_ICON_CLASSES[variant]} />
      Dial Now {label}
    </a>
  );
}
