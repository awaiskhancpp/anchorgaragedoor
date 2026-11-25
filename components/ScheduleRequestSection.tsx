import QuickScheduleForm from "@/components/QuickScheduleForm";
import { HouseIcon, PhoneIconFilled, ScheduleChatIcon } from "@/components/icons";

export default function ScheduleRequestSection() {
  return (
    <section className="bg-white px-[10px] py-[65px] max-md:py-5">
      <div className="relative mx-auto min-h-[442px] max-w-[1320px] rounded-[20px] bg-dark px-[57px] py-[65px] shadow-[14px_0_42px_rgba(8,15,52,0.06)] max-[1600px]:min-h-[353px] max-[1600px]:px-[46px] max-[1600px]:pb-3 max-[1600px]:pt-[52px] max-md:rounded-[20px] max-md:px-5 max-md:pb-10 max-md:pt-[100px]">
        <div className="pointer-events-none absolute -top-10 right-0 flex h-20 w-20 items-center justify-center rounded-full bg-light">
          <ScheduleChatIcon className="h-[34px] w-[34px]" />
        </div>

        <div className="flex items-start justify-between gap-5 max-lg:flex-col">
          <div className="min-w-0">
            <div className="flex items-center gap-[19px] max-[1600px]:gap-4">
              <span className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-full bg-white max-[1600px]:h-[54px] max-[1600px]:w-[54px]">
                <HouseIcon className="h-[27px] w-[27px] text-[#f36827]" />
              </span>
              <h2 className="m-0 font-medium text-white lg:text-[32px]">
                Schedule A Service Request
              </h2>
            </div>
            <p className="m-0 ml-[87px] mt-0 text-[22px] leading-[1.2] text-white max-[1600px]:ml-[70px] max-[1600px]:mt-[-6px] max-[1600px]:text-[17px] max-[1600px]:leading-[1.5] max-md:ml-0 max-md:mt-4">
              Talk to a representative today! Share your details, and we’ll get back to you promptly.
            </p>
          </div>

          <a
            href="tel:8332004087"
            className="mt-3 inline-flex h-[69px] w-[353px] shrink-0 items-center justify-center gap-2 rounded-[8px] bg-accent px-6 text-[22px] font-semibold leading-none text-white transition hover:bg-[#0260fa] max-[1600px]:mt-[9px] max-[1600px]:h-[56px] max-[1600px]:w-auto max-[1600px]:px-[15px] max-[1600px]:text-[18px] max-md:mt-5 max-md:h-[56px] max-md:px-4 max-md:text-[16px]"
          >
            <PhoneIconFilled className="h-7 w-7" />
            Dial Now (833) 200-4087
          </a>
        </div>

        <QuickScheduleForm />
      </div>
    </section>
  );
}
