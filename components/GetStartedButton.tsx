type Variant = "dark" | "light" | "outline";

/**
 * Visual-only classes per placement:
 * - dark: paired with the dark Dial Now button on an accent-blue background (homepage hero)
 * - light: paired with the light Dial Now button on a photo background (inner page heroes)
 * - outline: the transparent sidebar CTA on blog posts
 */
const VARIANT_CLASSES: Record<Variant, string> = {
  dark: "border border-white bg-white px-[42px] py-5 text-accent hover:border-dark hover:bg-dark hover:text-white",
  light: "border border-white bg-white px-[42px] py-5 text-accent hover:border-accent hover:bg-accent hover:text-white",
  outline: "border border-accent bg-transparent px-[90px] py-[19px] text-accent hover:bg-accent hover:text-white",
};

export default function GetStartedButton({
  variant = "light",
  href = "/freequote",
  label = "Get Started",
  className = "",
}: {
  variant?: Variant;
  href?: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-[10px] rounded-lg text-center text-lg font-semibold capitalize leading-none transition-[background-color,border-color,color] duration-[250ms] ease ${VARIANT_CLASSES[variant]} ${className}`}
    >
      {label}
    </a>
  );
}
