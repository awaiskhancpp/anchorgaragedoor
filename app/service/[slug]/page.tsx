import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import InnerHero from "@/components/InnerHero";
import BrandGallery from "@/components/BrandGallery";
import ServiceGrid from "@/components/ServiceGrid";
import TrustFeatures from "@/components/TrustFeatures";
import { services, garageServices, garageBrandLogos } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} - Anchor Garage Door and Gate Services, Inc`,
    description: service.shortDescription,
  };
}

const whatWeDo = [
  {
    title: "Quality All The Way",
    text: "We're a team of licensed professionals offering top-tier products to the local community",
  },
  {
    title: "24/7 Service Hours",
    text: "If you have an urgent garage door or gate issue at any time of the day, we're just a phone call away",
  },
  {
    title: "Trusted Professionals",
    text: "We've installed and repaired garage doors and gates in thousands of homes across the state",
  },
];

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const relatedServices = garageServices.slice(0, 4);

  return (
    <>
      <InnerHero title={service.title} description={service.shortDescription} image={service.heroImage} />

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <Image
            src={service.bodyImage}
            alt={service.title}
            width={700}
            height={500}
            className="h-auto w-full rounded-2xl object-cover"
          />
          <div>
            <h3 className="mb-5 flex items-center gap-4">
              <Image src={service.heroIcon} alt="" width={40} height={40} className="h-10 w-10" />
              {service.title}
            </h3>
            <p className="text-ink/70">{service.bodyParagraph}</p>
          </div>
        </div>
      </section>

      <BrandGallery title="Garage Door" logos={garageBrandLogos} />

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <h2 className="mb-8">Related Services</h2>
          <ServiceGrid items={relatedServices} />
        </div>
      </section>

      <TrustFeatures heading="What we do" items={whatWeDo} />
    </>
  );
}
