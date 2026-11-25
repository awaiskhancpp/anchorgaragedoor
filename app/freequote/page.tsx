import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import IconHeading from "@/components/IconHeading";

export const metadata: Metadata = {
  title: "Free Quote - Anchor Garage Door and Gate Services, Inc",
};

export default function FreeQuotePage() {
  return (
    <section className="relative isolate flex min-h-[100vh] flex-row items-center gap-5 overflow-hidden bg-white max-md:my-[30px] max-md:flex-col-reverse max-md:items-start max-md:gap-[15px] max-md:px-[10px] max-md:py-[10px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[url('/images/anchor-garage-door-Fav.png')] bg-center bg-no-repeat bg-[length:472px_auto] opacity-[0.06] max-md:bg-[length:300px_auto]"
      />
      <div className="relative z-10 h-[100vh] w-full shrink max-md:h-[380px] max-md:w-full lg:flex-[0_1_100%]">
        <Image
          src="/images/Garage-Door-Opnener.webp"
          alt=""
          fill
          className="object-cover object-[right_center]"
          priority
        />
      </div>
      <div className="relative z-10 flex w-full shrink flex-col items-start justify-start lg:w-[90%] lg:flex-[0_1_90%]">
        <div className="flex w-full flex-col items-start gap-5 lg:w-4/5">
          <IconHeading
            title="Get In Touch With Us"
            className="gap-[10px] capitalize"
            iconWrapClassName="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent"
            iconClassName="h-5 w-5 text-white"
          />
          <p className="mt-[5px] mb-[15px] text-[17px] leading-normal text-ink">
            Get a quote from Anchor Garage Door and Gate Services Experts
          </p>
          <ContactForm
            className="!gap-x-[10px] !gap-y-[15px]"
            fieldClassName="min-w-0 h-12 !px-0 text-base leading-[1.3]"
            textareaClassName="!h-[121px] !min-h-[121px] resize-none"
            submitClassName="mt-[10px] inline-flex min-h-12 w-full items-center justify-center gap-[10px] rounded-lg border border-accent bg-accent px-[39px] py-[5px] text-center text-base capitalize leading-none text-white transition-[background-color,border-color,color] duration-[250ms] ease hover:border-accent hover:bg-white hover:text-accent sm:col-span-2"
            submitLabel="Request a Quote"
            showCaptcha
          />
        </div>
      </div>
    </section>
  );
}
