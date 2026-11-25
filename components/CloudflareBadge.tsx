type Variant = "dark" | "light";

/**
 * Placeholder "verification successful" widget standing in for the real
 * Cloudflare Turnstile embed. Two visual treatments, matching each form's
 * own color scheme:
 * - dark: the homepage "Schedule A Service Request" card (dark background)
 * - light: ContactForm's default, used on /freequote and Get In Touch
 */
export default function CloudflareBadge({ variant = "light", className = "" }: { variant?: Variant; className?: string }) {
  if (variant === "dark") {
    return (
      <div
        className={`flex h-20 w-[375px] items-center justify-between border border-[#d7d7d7] bg-[#303030] px-[11px] text-white max-[1600px]:h-[72px] max-lg:w-full max-md:h-[70px] ${className}`}
        role="status"
        aria-label="Cloudflare verification successful"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#27ae60] text-[25px] leading-none">✓</span>
          <span className="text-[16px]">Success!</span>
        </div>
        <div className="text-right leading-none">
          <div className="text-[11px] font-bold tracking-[0.18em]">CLOUDFLARE</div>
          <div className="mt-1 text-[9px] underline">Privacy · Help</div>
        </div>
      </div>
    );
  }

  return (
    <div className={`h-[65px] ${className}`} aria-hidden="true">
      <div className="flex h-[65px] w-[300px] items-center gap-[8px] border border-[#d9d9d9] bg-[#f7f7f7] px-[10px] text-[13px] leading-[1.1] text-[#202124]">
        <span className="inline-flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#2e9b57] text-xl font-bold text-white">
          ✓
        </span>
        <span className="whitespace-nowrap">Success!</span>
        <div className="ml-auto text-right text-[10px] font-bold tracking-[0.04em]">
          <span className="text-[#f58220]">CLOUDFLARE</span>
          <small className="block text-[8px] font-normal tracking-normal text-[#555]">Privacy - Help</small>
        </div>
      </div>
    </div>
  );
}
