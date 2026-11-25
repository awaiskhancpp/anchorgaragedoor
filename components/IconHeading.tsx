import { HouseIcon } from "@/components/icons";

export default function IconHeading({
  title,
  className = "",
  iconWrapClassName = "flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent",
  iconClassName = "h-6 w-6 text-white",
}: {
  title: string;
  className?: string;
  iconWrapClassName?: string;
  iconClassName?: string;
}) {
  return (
    <h3 className={`flex items-center gap-4 ${className}`}>
      <span className={iconWrapClassName}>
        <HouseIcon className={iconClassName} />
      </span>
      {title}
    </h3>
  );
}
