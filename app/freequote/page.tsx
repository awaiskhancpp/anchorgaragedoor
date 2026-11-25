import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import IconHeading from "@/components/IconHeading";

export const metadata: Metadata = {
  title: "Free Quote - Anchor Garage Door and Gate Services, Inc",
};

export default function FreeQuotePage() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2">
      <div className="relative hidden min-h-[320px] lg:block">
        <Image src="/images/hero-garage-opener-opnener.webp" alt="" fill className="object-cover" />
      </div>
      <div className="px-6 py-14 sm:px-12 lg:px-16 lg:py-20">
        <IconHeading title="Get In Touch With Us" className="mb-4" />
        <p className="mb-8 text-ink/70">Get a quote from Anchor Garage Door and Gate Services Experts</p>
        <ContactForm />
      </div>
    </section>
  );
}
