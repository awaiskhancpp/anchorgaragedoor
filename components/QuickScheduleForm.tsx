"use client";

import { FormEvent, useState } from "react";
import { services } from "@/lib/services";

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
        className="h-[60px] w-full rounded-[8px] border-0 bg-[#142834] px-[10px] text-[18px] text-white placeholder:text-[#667085] focus:outline-2 focus:outline-accent focus:outline-offset-1 max-[1600px]:h-12 max-[1600px]:text-[16px]"
      />
      <input
        required
        type="email"
        name="email"
        placeholder="Email Address"
        className="h-[60px] w-full rounded-[8px] border-0 bg-[#142834] px-[10px] text-[18px] text-white placeholder:text-[#667085] focus:outline-2 focus:outline-accent focus:outline-offset-1 max-[1600px]:h-12 max-[1600px]:text-[16px]"
      />
      <input
        required
        type="tel"
        name="phone"
        placeholder="Phone Number"
        className="h-[60px] w-full rounded-[8px] border-0 bg-[#142834] px-[10px] text-[18px] text-white placeholder:text-[#667085] focus:outline-2 focus:outline-accent focus:outline-offset-1 max-[1600px]:h-12 max-[1600px]:text-[16px]"
      />
      <select
        required
        name="service"
        defaultValue=""
        className="h-[60px] w-full rounded-[8px] border-0 bg-[#142834] px-[10px] text-[18px] text-[#667085] focus:outline-2 focus:outline-accent focus:outline-offset-1 max-[1600px]:h-12 max-[1600px]:text-[16px]"
      >
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

      <div
        className="col-start-1 row-start-2 flex h-20 w-[375px] items-center justify-between border border-[#d7d7d7] bg-[#303030] px-[11px] text-white max-[1600px]:h-[72px] max-lg:col-auto max-lg:row-auto max-lg:w-full max-md:h-[70px]"
        role="status"
        aria-label="Cloudflare verification successful"
      >
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#27ae60] text-[25px] leading-none">✓</span>
          <span className="text-[16px]">Success!</span>
        </div>
        <div className="text-right leading-none">
          <div className="text-[11px] font-bold tracking-[0.18em]">CLOUDFLARE</div>
          <div className="mt-1 text-[9px] underline">Privacy · Help</div>
        </div>
      </div>

      <button
        type="submit"
        className="col-start-3 row-start-2 h-[61px] w-[226px] rounded-[8px] border border-accent bg-accent px-5 text-[21px] leading-none text-white transition hover:border-[#0260fa] hover:bg-[#0260fa] max-[1600px]:h-12 max-[1600px]:w-auto max-[1600px]:text-[16px] max-lg:col-auto max-lg:row-auto max-lg:w-full max-lg:text-[18px]"
      >
        Schedule Now
      </button>
    </form>
  );
}
