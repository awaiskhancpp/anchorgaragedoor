"use client";

import { FormEvent, useState } from "react";
import { services } from "@/lib/services";

const FIELD_BASE =
  "w-full rounded-none border-0 border-b-[0.8px] border-dark bg-transparent px-1 py-[6px] text-base text-ink placeholder:text-ink/55 focus:border-b-2 focus:outline-none";

const SUBMIT_DEFAULT =
  "mt-2 inline-flex w-fit items-center justify-center gap-[10px] rounded-lg border border-accent bg-accent px-5 py-[15px] text-center text-sm capitalize leading-none text-white transition-[background-color,border-color,color] duration-[250ms] ease sm:col-span-2 lg:px-[39px] lg:py-4 lg:text-base";

export default function ContactForm({
  className = "",
  fieldClassName = "",
  textareaClassName = "",
  submitClassName = SUBMIT_DEFAULT,
  submitLabel = "Request Quote",
  showCaptcha = false,
}: {
  className?: string;
  fieldClassName?: string;
  textareaClassName?: string;
  submitClassName?: string;
  submitLabel?: string;
  showCaptcha?: boolean;
}) {
  const [submitted, setSubmitted] = useState(false);
  const field = `${FIELD_BASE} ${fieldClassName}`;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-xl bg-white p-8 text-center">
        <p className="text-lg font-semibold">Thank you! Your request has been received.</p>
        <p className="mt-2 text-sm text-ink/70">A member of our team will get back to you shortly.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${className}`}>
      <input required name="firstName" placeholder="First Name" className={field} />
      <input required name="lastName" placeholder="Last Name" className={field} />
      <input required type="email" name="email" placeholder="Email Address" className={field} />
      <input required type="tel" name="phone" placeholder="Phone Number" className={field} />
      <input required name="zip" placeholder="Zip Code" className={field} />
      <select required name="service" defaultValue="" className={field}>
        <option value="" disabled>
          Type of Service
        </option>
        {services.map((s) => (
          <option key={s.slug} value={s.title}>
            {s.title}
          </option>
        ))}
      </select>
      <textarea
        name="message"
        placeholder="Write Your Query Here"
        rows={5}
        className={`${field} sm:col-span-2 ${textareaClassName}`}
      />
      <input type="text" name="hp" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      {showCaptcha && (
        <div className="h-[72px]" aria-hidden="true">
          <div className="flex h-[47px] w-[218px] items-center gap-[7px] border border-[#d9d9d9] bg-[#f7f7f7] px-[7px] text-[10px] leading-[1.1] text-[#202124]">
            <span className="inline-flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#2e9b57] text-base font-bold text-white">
              ✓
            </span>
            <span className="whitespace-nowrap">Success!</span>
            <div className="ml-auto text-right text-[8px] font-bold tracking-[0.04em]">
              <span className="text-[#f58220]">CLOUDFLARE</span>
              <small className="block text-[6px] font-normal tracking-normal text-[#555]">Privacy - Help</small>
            </div>
          </div>
        </div>
      )}
      <button type="submit" className={submitClassName}>
        {submitLabel}
      </button>
    </form>
  );
}
