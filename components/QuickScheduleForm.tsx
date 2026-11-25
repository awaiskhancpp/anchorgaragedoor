"use client";

import { FormEvent, useState } from "react";
import { services } from "@/lib/services";
import { ACCENT_INVERT_HOVER } from "@/components/buttonStyles";
import CloudflareBadge from "@/components/CloudflareBadge";

const FIELD_BASE =
  "h-[60px] w-full rounded-[8px] border-0 bg-[#142834] px-[10px] text-[18px] focus:outline-2 focus:outline-accent focus:outline-offset-1 max-[1600px]:h-12 max-[1600px]:text-[16px]";

export default function QuickScheduleForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="mt-16 rounded-xl bg-white/5 p-8 text-center max-lg:mt-10">
        <p className="text-lg font-semibold text-white">Thank you! Your request has been received.</p>
        <p className="mt-2 text-sm text-white/60">A member of our team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-[60px] grid grid-cols-4 gap-x-[30px] gap-y-[19px] max-[1600px]:mt-[50px] max-[1600px]:gap-x-[2%] max-[1600px]:gap-y-[15px] max-lg:grid-cols-2 max-md:grid-cols-1"
    >
      <input
        required
        name="fullName"
        placeholder="Full Name"
        className={`${FIELD_BASE} text-white placeholder:text-[#667085]`}
      />
      <input
        required
        type="email"
        name="email"
        placeholder="Email Address"
        className={`${FIELD_BASE} text-white placeholder:text-[#667085]`}
      />
      <input
        required
        type="tel"
        name="phone"
        placeholder="Phone Number"
        className={`${FIELD_BASE} text-white placeholder:text-[#667085]`}
      />
      <select required name="service" defaultValue="" className={`${FIELD_BASE} text-[#667085]`}>
        <option value="" disabled>
          Type of Service
        </option>
        {services.map((s) => (
          <option key={s.slug} value={s.title}>
            {s.title}
          </option>
        ))}
      </select>
      <input type="text" name="hp" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />

      <CloudflareBadge variant="dark" className="col-start-1 row-start-2 max-lg:col-auto max-lg:row-auto" />

      <button
        type="submit"
        className={`col-start-3 row-start-2 h-[61px] w-[226px] rounded-[8px] px-5 text-[21px] leading-none max-[1600px]:h-12 max-[1600px]:w-auto max-[1600px]:text-[16px] max-lg:col-auto max-lg:row-auto max-lg:w-full max-lg:text-[18px] ${ACCENT_INVERT_HOVER}`}
      >
        Schedule Now
      </button>
    </form>
  );
}
