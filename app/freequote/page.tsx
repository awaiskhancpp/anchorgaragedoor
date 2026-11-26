import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import IconHeading from "@/components/IconHeading";

export const metadata: Metadata = {
  title: "Free Quote - Anchor Garage Door and Gate Services, Inc",
};

export default function FreeQuotePage() {
  return (
    <section className="relative isolate flex min-h-[100vh] flex-row items-center gap-5 overflow-hidden bg-white max-md:my-[30px] max-md:flex-col-reverse max-md:items-start max-md:gap-[15px] max-md:px-[10px] max-md:py-[10px] md:grid md:grid-cols-[51.05%_minmax(0,1fr)] md:gap-5 min-[1025px]:flex min-[1025px]:grid-cols-none">
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
      <div className="relative z-10 flex w-full shrink flex-col items-start justify-start max-md:pb-[40px] md:w-full md:-translate-y-[21px] md:px-5 min-[1025px]:w-[90%] min-[1025px]:flex-[0_1_90%] min-[1025px]:translate-y-0 min-[1025px]:px-0">
        <div className="flex w-full flex-col items-start gap-5 max-md:gap-0 max-md:p-2.5 min-[1025px]:w-4/5">
          <IconHeading
            title="Get In Touch With Us"
            className="gap-[10px] capitalize"
            iconWrapClassName="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent"
            iconClassName="h-5 w-5 text-white"
          />
          <p className="mt-[5px] mb-[15px] text-[17px] leading-normal text-ink max-md:mb-[14.4px] max-md:text-[14px] max-md:leading-[21px] md:mb-[14.4px] md:text-[14px] md:leading-[21px] min-[1025px]:mb-[15px] min-[1025px]:text-[17px] min-[1025px]:leading-normal">
            Get a quote from Anchor Garage Door and Gate Services Experts
          </p>
          <ContactForm
            className="w-full !gap-x-[10px] !gap-y-[15px]"
            fieldClassName="min-w-0 h-12 !px-0 text-base leading-[1.3]"
            textareaClassName="!h-[121px] !min-h-[121px] resize-none"
            submitClassName="mt-[10px] inline-flex min-h-12 w-full items-center justify-center gap-[10px] rounded-lg border border-accent bg-accent px-[39px] py-[5px] text-center text-base capitalize leading-none text-white transition-[background-color,border-color,color] duration-[250ms] ease hover:border-accent hover:bg-white hover:text-accent sm:col-span-2"
            submitLabel="Request a Quote"
            showCaptcha
            captchaClassName="max-md:h-0 max-md:min-h-0 max-md:overflow-hidden"
          />
        </div>
      </div>
    </section>
  );
}
