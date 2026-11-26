import { PhoneIconFilled } from "@/components/icons";

/**
 * Full-width "Dial Now" bar pinned to the bottom of the viewport on mobile,
 * matching the live site's sticky mobile CTA (every page, mobile only).
 */
export default function MobileStickyCallBar() {
  return (
    <a
      href="tel:8332004087"
      className="fixed inset-x-0 bottom-0 z-[70] flex items-center justify-center gap-[10px] bg-accent px-[15px] py-[13px] text-center text-[14px] font-semibold leading-4 text-light md:hidden"
    >
      <PhoneIconFilled className="h-[30px] w-[30px]" />
      Dial Now (833) 200-4087
    </a>
  );
}
