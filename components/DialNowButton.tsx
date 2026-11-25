import { PhoneIconFilled } from "@/components/icons";

export default function DialNowButton({
  className = "",
  phone = "8332004087",
  label = "(833) 200-4087",
}: {
  className?: string;
  phone?: string;
  label?: string;
}) {
  return (
    <a
      href={`tel:${phone}`}
      className={`group inline-flex animate-[fadeIn_2s_ease] items-center justify-center gap-[10px] rounded-lg border border-accent bg-accent px-[15px] py-[13px] text-center text-lg font-semibold capitalize leading-none text-white transition-[background-color,border-color,color] duration-[250ms] ease motion-reduce:animate-none hover:border-white hover:bg-white hover:text-accent ${className}`}
    >
      <PhoneIconFilled className="h-7 w-7 [&>circle]:transition-[fill,fill-opacity] [&>circle]:duration-[250ms] group-hover:[&>circle]:fill-accent group-hover:[&>circle]:[fill-opacity:1] group-hover:[&>path]:fill-white" />
      Dial Now {label}
    </a>
  );
}
