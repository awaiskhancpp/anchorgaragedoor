"use client";

import { FormEvent, useState } from "react";

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return <p className="text-sm text-white/70">Thanks for subscribing!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap items-end gap-4">
      <input
        required
        type="email"
        name="email"
        placeholder="Enter Your Email"
        className="w-full max-w-[260px] rounded-none border-0 border-b-[0.8px] bg-transparent px-1 py-[6px] text-base text-white placeholder:text-white/50 focus:border-b-2 focus:outline-none"
        style={{ borderBottomColor: "rgba(255,255,255,0.4)" }}
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-[10px] rounded-lg border border-accent bg-accent px-5 py-[15px] text-center text-sm capitalize leading-none text-white transition-[background-color,border-color,color] duration-[250ms] ease lg:px-[39px] lg:py-4 lg:text-base"
      >
        Subscribe
      </button>
    </form>
  );
}
