import type { Metadata } from "next";
import Image from "next/image";
import InnerHero from "@/components/InnerHero";
import IconHeading from "@/components/IconHeading";
import ContactForm from "@/components/ContactForm";
import { EyebrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About Us - Anchor Garage Door and Gate Services, Inc",
};

export default function AboutUsPage() {
  return (
    <>
      <InnerHero
        title="About Us"
        description="Anchor Garage Door and Gate Services Inc. has been setting the standard for exceptional service in the garage door and gate installation industry."
        image="/images/hero-about-2nd.jpeg"
      />

      <section className="relative isolate flex min-h-[100vh] flex-row items-center gap-5 overflow-hidden bg-white max-md:my-[30px] max-md:flex-col-reverse max-md:items-start max-md:gap-[15px] max-md:px-5 max-md:py-[14px] md:grid md:min-h-[120vh] md:grid-cols-[49.5%_minmax(0,1fr)] md:gap-5 min-[1025px]:flex min-[1025px]:min-h-[100vh] min-[1025px]:grid-cols-none">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 bg-[url('/images/anchor-garage-door-Fav.png')] bg-center bg-no-repeat bg-[length:472px_auto] opacity-[0.06]"
        />

        <div className="relative z-10 h-[120vh] w-full shrink md:h-[120vh] md:w-full max-md:ml-[-10px] max-md:mt-[10px] max-md:aspect-[11/7] max-md:h-auto max-md:w-[calc(100%+20px)] min-[1025px]:h-[100vh] min-[1025px]:w-1/2">
          <Image
            src="/images/Garage-DoorGate-Services-44.jpg"
            alt="Anchor Garage Door and Gate Services Inc."
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="relative z-10 flex w-full shrink justify-start max-md:w-full min-[1025px]:w-1/2">
          <div className="ml-0 flex w-[91%] flex-col items-start gap-5 max-md:w-full min-[1025px]:ml-[2%] min-[1025px]:w-4/5">
            <p className="inline-flex items-center gap-0 font-heading text-xl font-semibold capitalize leading-[1.5] text-eyebrow max-md:leading-6 md:text-base md:leading-[21px] min-[1025px]:text-xl min-[1025px]:leading-[1.5]">
              <EyebrowIcon className="h-[45px] w-[45px] shrink-0 max-lg:h-[34px] max-lg:w-[34px]" />
              Anchor Garage Door And Gate Services Inc.
            </p>

            <h2 className="text-[32px] leading-[1.2] max-md:leading-8 md:mt-[-10px] md:leading-8 min-[1025px]:mt-0 min-[1025px]:leading-[1.2]">
              How We Became the Area’s Leading Garage Door and Gate Installation Company
            </h2>

            <div className="flex w-full items-start gap-1 text-xl font-semibold leading-[1.5] text-eyebrow max-md:text-base max-md:leading-[21px] md:text-base md:leading-[21px] min-[1025px]:text-xl min-[1025px]:leading-[1.5]">
              <svg aria-hidden="true" viewBox="0 0 512 512" className="mt-1 h-5 w-5 shrink-0 fill-current text-ink">
                <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z" />
              </svg>
              <p>It all began 15 years ago with a vision to make a real difference in the industry.</p>
            </div>

            <p className="text-[17px] leading-[1.5] italic text-ink max-md:text-[14px] max-md:leading-[21px] md:min-h-[147px] md:text-[14px] md:leading-[21px] min-[1025px]:min-h-0 min-[1025px]:text-[17px] min-[1025px]:leading-[1.5]">
              “I spent years observing family members working in the field and felt inspired to start my own journey.
              At the time, the industry was flooded with unqualified and unlicensed businesses, which motivated me to
              create a company people could trust. That’s how, 15 years ago, Anchor Garage Door and Gate Services Inc.
              was born—a fully licensed, bonded, and insured company committed to quality, reliability, and fairness.”
            </p>
            <p className="text-[17px] leading-[1.5] text-ink max-md:text-[14px] max-md:leading-[21px] md:text-[14px] md:leading-[21px] min-[1025px]:text-[17px] min-[1025px]:leading-[1.5]">
              Over the past decade and a half, we’ve worked tirelessly to build a reputation for excellence. From
              garage doors to gates and activating devices, we combine skilled craftsmanship with top-notch customer
              care.
            </p>
            <p className="text-[17px] leading-[1.5] text-ink max-md:text-[14px] max-md:leading-[21px] md:text-[14px] md:leading-[21px] min-[1025px]:text-[17px] min-[1025px]:leading-[1.5]">
              Our unwavering dedication to quality and customer satisfaction has made us the go-to choice for
              residential and commercial clients alike. We’re proud to have spent 15 years serving our community and
              look forward to continuing to serve you!
            </p>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="mx-auto max-w-3xl rounded-3xl border border-black/10 p-8 sm:p-12">
            <IconHeading title="Get In Touch With Us" className="mb-4" />
            <p className="mb-8 text-ink/70">Get a quote from Anchor Garage Door and Gate Services Experts</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
