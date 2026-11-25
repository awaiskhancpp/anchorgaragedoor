import Link from "next/link";

export default function GetAQuoteButton({
  className = "",
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/freequote"
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-[10px] rounded-lg border border-white bg-accent text-center text-sm font-semibold capitalize leading-none text-white transition-[background-color,border-color,color] duration-[250ms] ease hover:border-accent hover:bg-white hover:text-accent lg:text-base ${className}`}
    >
      Get a Quote
    </Link>
  );
}
