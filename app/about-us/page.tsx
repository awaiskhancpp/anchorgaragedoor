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

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <Image
            src="/images/Garage-DoorGate-Services-44.jpg"
            alt="Anchor Garage Door and Gate Services Inc."
            width={700}
            height={500}
            className="h-auto w-full rounded-2xl object-cover"
          />
          <div>
            <p className="mb-2 inline-flex items-center gap-2 font-heading text-base font-semibold text-eyebrow lg:text-xl">
              <EyebrowIcon className="h-11 w-11" />
              Anchor Garage Door and Gate Services Inc.
            </p>
            <h2 className="mb-5">How We Became the Area’s Leading Garage Door and Gate Installation Company</h2>
            <p className="mb-5 font-semibold text-ink/80">
              It all began 15 years ago with a vision to make a real difference in the industry.
            </p>
            <p className="mb-5 text-ink/70">
              “I spent years observing family members working in the field and felt inspired to start my own
              journey. At the time, the industry was flooded with unqualified and unlicensed businesses, which
              motivated me to create a company people could trust. That’s how, 15 years ago, Anchor Garage Door and
              Gate Services Inc. was born—a fully licensed, bonded, and insured company committed to quality,
              reliability, and fairness.”
            </p>
            <p className="mb-5 text-ink/70">
              Over the past decade and a half, we’ve worked tirelessly to build a reputation for excellence. From
              garage doors to gates and activating devices, we combine skilled craftsmanship with top-notch customer
              care.
            </p>
            <p className="text-ink/70">
              Our unwavering dedication to quality and customer satisfaction has made us the go-to choice for
              residential and commercial clients alike. We’re proud to have spent 15 years serving our community and
              look forward to continuing to serve you!
            </p>
          </div>
        </div>
      </section>

      <section className="pb-14 lg:pb-20">
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
