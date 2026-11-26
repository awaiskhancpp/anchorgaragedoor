import Image from "next/image";
import DialNowButton from "@/components/DialNowButton";
import GetStartedButton from "@/components/GetStartedButton";

export default function InnerHero({
  title,
  description,
  image,
  showDialButton = true,
  className,
}: {
  title: string;
  description?: string;
  image: string;
  showDialButton?: boolean;
  className?: string;
}) {
  return (
    <section className={`${className ?? ""} relative flex min-h-[80vh] items-center justify-center overflow-hidden text-center text-white max-lg:min-h-[60vh] max-md:min-h-[80vh]`}>
      <Image src={image} alt="" fill priority unoptimized className="object-cover" />
      <div className="absolute inset-0 bg-dark/60" />
      <div className="relative z-10 mx-auto flex w-full max-w-[820px] flex-col items-center gap-5 px-5 sm:max-w-[884px] sm:px-8">
        <h1 className="w-full max-w-full max-md:text-[30px] max-md:leading-[40px] md:text-[35px] md:leading-[45px] lg:text-[55px] lg:leading-[66px]">{title}</h1>
        {description && <p className="mt-[5px] mb-[15px] w-full max-w-full text-[17px] leading-[1.5] text-white max-md:text-[14px] max-md:leading-[21px] lg:max-w-[640px]">{description}</p>}
        <div className="flex flex-col items-center justify-center gap-4 max-md:gap-5 sm:flex-row sm:flex-wrap sm:items-center">
          {showDialButton && <DialNowButton className="max-md:h-[56px] max-md:w-[279px] max-md:whitespace-nowrap max-md:py-0 lg:w-[279px] lg:whitespace-nowrap" />}
          <GetStartedButton className="max-md:h-[56px] max-md:w-[270px] max-md:px-[86px] max-md:py-0 lg:h-[56px] lg:py-0" />
        </div>
      </div>
    </section>
  );
}
