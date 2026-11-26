import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import InnerHero from "@/components/InnerHero";
import BrandGallery from "@/components/BrandGallery";
import ServiceGrid from "@/components/ServiceGrid";
import TrustFeatures from "@/components/TrustFeatures";
import { services, garageServices, garageBrandLogos } from "@/lib/services";
import GetInTouchSection from "@/components/GetInTouchSection";

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
      <InnerHero tabletCompact title={service.title} description={service.shortDescription} image={service.heroImage} />

      <section className="relative isolate mt-[30px] mb-[30px] overflow-hidden bg-white min-[1025px]:mt-0 min-[1025px]:mb-0">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[url('/images/anchor-garage-door-Fav.png')] bg-center bg-no-repeat bg-[length:472px_auto] opacity-[0.06] max-md:bg-[length:300px_auto]"
        />
        <div className="relative z-10 grid grid-cols-1 gap-[15px] min-[1025px]:grid-cols-[48.6%_minmax(0,1fr)] min-[1025px]:gap-5">
          <div className="relative order-2 block min-h-[450px] overflow-hidden min-[1025px]:order-1 min-[1025px]:min-h-[600px]">
            <Image
              src={service.bodyImage}
              alt={service.title}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="order-1 flex p-5 md:items-center min-[1025px]:order-2 min-[1025px]:p-[10px] min-[1025px]:pl-5 min-[1025px]:pr-[10px]">
            <div className="w-full min-[1025px]:w-4/5">
              <h3 className="mb-5 flex items-center gap-4">
                <span className="relative z-0 grid h-[30px] w-[30px] shrink-0 place-items-center before:absolute before:inset-[-10px] before:-z-10 before:rounded-full before:bg-badge min-[1025px]:h-[50px] min-[1025px]:w-[50px]">
                  <Image
                    src={service.heroIcon}
                    alt=""
                    width={50}
                    height={50}
                    className="h-[30px] w-[30px] min-[1025px]:h-[50px] min-[1025px]:w-[50px]"
                  />
                </span>
                {service.title}
              </h3>
              <div className="space-y-5 text-[14px] leading-[21px] text-ink max-md:space-y-[14.4px] max-md:pb-[14.4px] min-[1025px]:text-[17px] min-[1025px]:leading-[1.5]">
                <p>{service.bodyParagraph}</p>
                {service.bodyParagraph2 && <p>{service.bodyParagraph2}</p>}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <BrandGallery title="Garage Door" logos={garageBrandLogos} /> */}

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <h2 className="mb-8">Related Services</h2>
          <ServiceGrid items={relatedServices} />
        </div>
      </section>

      <TrustFeatures heading="What we do" items={whatWeDo} />
      <GetInTouchSection/>
    </>
  );
}
