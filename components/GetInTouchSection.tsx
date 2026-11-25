import ContactForm from "@/components/ContactForm";
import IconHeading from "@/components/IconHeading";

export default function GetInTouchSection() {
  return (
    <section className="bg-white px-5 pb-10 pt-5 md:px-[10px] md:py-10">
      <div className="mx-auto min-h-0 w-full max-w-[860px] rounded-[20px] border border-[#edf0f2] bg-white p-5 shadow-[0_0_4px_rgba(0,0,0,0.1)] md:min-h-[717px] md:p-10">
        <IconHeading
          title="Get In Touch With Us"
          className="gap-[10px] capitalize"
          iconWrapClassName="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent"
          iconClassName="h-5 w-5 text-white"
        />
        <p className="mt-[25px] mb-[35px] text-[17px] leading-normal text-ink">
          Get a quote from Anchor Garage Door and Gate Services Experts
        </p>
        <ContactForm
          className="!gap-x-[10px] !gap-y-[15px]"
          fieldClassName="min-w-0 h-12 !px-4 text-base leading-[1.4]"
          textareaClassName="!h-[121px] !min-h-[121px] resize-y"
          submitClassName="mt-[10px] inline-flex min-h-12 w-full items-center justify-center gap-[10px] rounded-lg border border-accent bg-accent px-[39px] py-[5px] text-center text-base capitalize leading-none text-white transition-[background-color,border-color,color] duration-[250ms] ease sm:col-span-2"
          submitLabel="Request A Quote"
          showCaptcha
        />
      </div>
    </section>
  );
}
