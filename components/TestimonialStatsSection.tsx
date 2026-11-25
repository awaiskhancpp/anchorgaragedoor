import Image from "next/image";

function TrendIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 45 44" fill="none" aria-hidden="true">
      <path d="M42.3286 11.0103L25.0106 27.8991L15.8958 19.0103L2.22363 32.3436" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31.3909 11.0103H42.3286V21.6769" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 25 25" fill="none" aria-hidden="true">
      <path d="M3.64478 23.5381H20.6448C21.0548 23.5381 21.3948 23.1981 21.3948 22.7881C21.3948 22.3781 21.0548 22.0381 20.6448 22.0381H3.64478C3.23478 22.0381 2.89478 22.3781 2.89478 22.7881C2.89478 23.1981 3.23478 23.5381 3.64478 23.5381Z" fill="currentColor" />
      <path d="M5.14484 19.0385C5.33484 19.0385 5.52483 18.9685 5.67483 18.8185L19.6748 4.81852C19.9648 4.52852 19.9648 4.04852 19.6748 3.75852C19.3848 3.46852 18.9048 3.46852 18.6148 3.75852L4.61484 17.7585C4.32484 18.0485 4.32484 18.5285 4.61484 18.8185C4.76484 18.9685 4.95484 19.0385 5.14484 19.0385Z" fill="currentColor" />
      <path d="M19.1448 15.3081C19.5548 15.3081 19.8948 14.9681 19.8948 14.5581V4.28809C19.8948 3.87809 19.5548 3.53809 19.1448 3.53809H8.87477C8.46478 3.53809 8.12477 3.87809 8.12477 4.28809C8.12477 4.69809 8.46478 5.03809 8.87477 5.03809H18.3948V14.5581C18.3948 14.9681 18.7348 15.3081 19.1448 15.3081Z" fill="currentColor" />
    </svg>
  );
}

function CustomerAvatars() {
  return (
    <div className="relative h-[41px] w-[85px] flex-none" aria-hidden="true">
      <Image
        src="/images/customer-avatar-2.jpg"
        alt=""
        width={40}
        height={40}
        className="absolute left-0 top-0 h-10 w-10 rounded-full border-2 border-[#272727] object-cover"
      />
      <Image
        src="/images/customer-avatar-1.jpg"
        alt=""
        width={40}
        height={40}
        className="absolute left-[22px] top-0 h-10 w-10 rounded-full border-2 border-[#272727] object-cover"
      />
      <Image
        src="/images/customer-avatar-0.jpg"
        alt=""
        width={40}
        height={40}
        className="absolute left-[44px] top-0 h-10 w-10 rounded-full border-2 border-[#272727] object-cover"
      />
    </div>
  );
}

export default function TestimonialStatsSection() {
  return (
    <section className="overflow-hidden bg-light bg-[url('/images/testimonial-left-circle.png')] bg-left-top bg-no-repeat px-5 pb-8 pt-[48px] md:pb-10 md:pt-[70px] lg:px-0 lg:pb-[50px] lg:pt-[50px]">
      <div className="mx-auto grid min-h-0 w-full max-w-[1320px] grid-cols-1 gap-12 md:min-h-[601px] lg:grid-cols-2 lg:gap-5">
        <div className="min-w-0 pr-0 lg:pr-[10px]">
          <h2 className="relative flex flex-col items-start text-[36px] font-bold leading-[1.2] text-ink md:text-[clamp(40px,7vw,55px)] lg:leading-[82px] lg:text-[55px]">
            <span>Simply Put - A Job</span>
            <span>Well Done</span>
            <Image
              src="/images/jessica.svg"
              alt="Jessica Tremblay"
              width={126}
              height={74}
              className="absolute bottom-[-8px] left-[262px] hidden h-[80px] w-[126px] object-contain lg:block"
            />
          </h2>
          <p className="mb-5 max-w-[502px] text-[17px] font-semibold leading-[1.275] text-eyebrow md:text-xl">
            Elevate your marketing skills with the proven growth hacking techniques.
          </p>
          <p className="mb-5 max-w-[491px] text-[17px] leading-[1.6] text-ink md:text-[18px] md:leading-[1.78]">
            “We had a big family event coming up, and I was doing all that I could to get the house in order. The
            garage door had been sticking for months and simply not responding to the remote. I was certain we would
            have to get a new door entirely, but after inspecting it, the team at Anchor Garage Door and Gate
            Services assured me that it merely needed a few repairs. They saved me so much time, money, and hassle. I
            only wish I’d reached out to them sooner!”
          </p>
          <p className="text-xl font-semibold leading-[1.275] text-eyebrow">JESSICA TREMBLAY</p>
          <p className="text-[17px] leading-normal text-ink">CUSTOMER</p>
        </div>

        <div className="grid min-h-0 min-w-0 grid-rows-[auto_auto] gap-5 p-[10px] md:min-h-[601px] md:grid-rows-[auto_175px]">
          <div className="relative flex min-h-[220px] min-w-0 md:min-h-0">
            <div className="relative aspect-[380/340] min-w-0 flex-none basis-[58.75%] overflow-hidden rounded-l-3xl">
              <Image
                src="/images/Rectangle-23805.png"
                alt="Garage door technician at work"
                fill
                sizes="(min-width: 1025px) 35vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute right-0 top-2 z-[1] flex h-[calc(100%-16px)] w-[45%] min-w-0 flex-col items-center justify-center rounded-3xl bg-white text-ink">
              <div className="absolute -top-[22px] right-5 grid h-[60px] w-[60px] place-items-center rounded-full bg-accent text-white shadow-[0_18px_28px_rgb(15_14_14_/_20%)]">
                <TrendIcon className="h-[34px] w-[34px]" />
              </div>
              <strong className="text-[clamp(64px,7vw,88px)] font-bold leading-[1.2]">3.5k</strong>
              <span className="text-center text-[17px] leading-normal">Projects Done This Year</span>
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-[14px] md:flex-row md:gap-0">
            <div className="flex min-h-0 min-w-0 flex-[1_1_50%] flex-col justify-between rounded-3xl bg-[#cdebff] p-5 text-ink">
              <div className="flex items-center justify-between gap-2 text-[17px] font-semibold leading-normal">
                <span>Professional Experts</span>
                <span className="grid h-12 w-12 flex-none place-items-center rounded-full bg-[#272727] text-white">
                  <ArrowIcon className="h-6 w-6" />
                </span>
              </div>
              <div className="flex items-center justify-start gap-4">
                <strong className="whitespace-nowrap text-[50px] font-medium leading-none">100%</strong>
                <span className="text-[17px]">Collection</span>
              </div>
            </div>
            <div className="ml-0 flex min-h-0 min-w-0 flex-[1_1_50%] flex-col justify-between rounded-3xl bg-accent p-5 text-white md:ml-[14px]">
              <div className="flex items-center justify-between gap-2 text-[17px] font-semibold leading-normal">
                <span>Happy customer</span>
                <span className="grid h-12 w-12 flex-none place-items-center rounded-full bg-white text-[#272727]">
                  <ArrowIcon className="h-6 w-6" />
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <strong className="whitespace-nowrap text-[50px] font-medium leading-none text-white">1.5M +</strong>
                <CustomerAvatars />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
