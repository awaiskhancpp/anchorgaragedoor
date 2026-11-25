"use client";

import Image from "next/image";
import { PointerEvent, useEffect, useRef, useState } from "react";
import { HouseIcon, PhoneIconFilled } from "@/components/icons";

const slides = [
  {
    image: "/images/hero-garage-2nd.jpeg",
    title: "Hassle-Free Garage Door Installations and Repairs",
    description:
      "Say goodbye to garage door troubles! From broken spring repairs to brand-new installations, our experienced professionals ensure fast, reliable, and cost-effective services tailored to your needs.",
  },
  {
    image: "/images/hero-gate-new-gate-installation-1.webp",
    title: "Hassle-Free Gate Installations and Repairs",
    description:
      "Experience seamless gate installation and repair services from a licensed, bonded, and insured team. Whether it’s a custom gate design or emergency repairs, we’ve got you covered with precision and care.",
  },
];

const SWIPE_THRESHOLD = 50;

export default function HomeHero() {
  const [active, setActive] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const dragDistance = useRef(0);

  const goToSlide = (index: number) => {
    setActive((index + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isDragging) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(id);
  }, [isDragging]);

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    dragStartX.current = event.clientX;
    dragDistance.current = 0;
    setDragOffset(0);
    setIsDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: PointerEvent<HTMLElement>) => {
    if (dragStartX.current === null) return;
    dragDistance.current = event.clientX - dragStartX.current;
    setDragOffset(dragDistance.current);
  };

  const finishDrag = (event: PointerEvent<HTMLElement>) => {
    if (dragStartX.current === null) return;

    const distance = dragDistance.current;
    dragStartX.current = null;
    dragDistance.current = 0;
    setDragOffset(0);
    setIsDragging(false);

    if (Math.abs(distance) < SWIPE_THRESHOLD) return;

    goToSlide(active + (distance < 0 ? 1 : -1));
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section
      className="relative h-[900px] touch-pan-y cursor-grab overflow-hidden bg-accent select-none sm:h-[820px] md:h-[700px]"
      aria-label="Featured services"
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishDrag}
      onPointerCancel={finishDrag}
    >
      <div
        className={`flex h-full w-[200%] ${isDragging ? "transition-none" : "transition-transform duration-500 ease-out"}`}
        style={{ transform: `translateX(calc(-${active * 50}% + ${dragOffset}px))` }}
      >
        {slides.map((slide, index) => (
          <article key={slide.image} className="relative h-full w-1/2 shrink-0" aria-hidden={index !== active}>
            <div className="absolute left-0 right-0 top-0 h-[36%] md:right-auto md:bottom-0 md:h-auto md:w-[65.05%]">
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                sizes="(min-width: 768px) 65vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="absolute left-0 right-0 bottom-0 flex h-[64%] flex-col items-center justify-center gap-5 overflow-hidden bg-accent px-6 py-10 text-center text-white sm:px-12 sm:py-12 md:left-auto md:right-0 md:top-0 md:h-auto md:w-[34.95%] md:px-[10px] md:py-[15px]">
              <p className="flex items-center gap-2 text-base font-normal text-white">
                <HouseIcon className="h-5 w-5 shrink-0" />
                Welcome to Anchor Garage Door and Gate Services
              </p>
              <h1>{slide.title}</h1>
              <p className="max-w-xl text-white">{slide.description}</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:8333494283"
                  className="group inline-flex items-center justify-center gap-[10px] rounded-lg border border-dark bg-dark px-[15px] py-[13px] text-center text-lg font-semibold capitalize leading-none text-white transition-[background-color,border-color,color] duration-[250ms] ease hover:border-white hover:bg-white hover:text-accent"
                >
                  <PhoneIconFilled className="h-8 w-8 [&>circle]:transition-[fill,fill-opacity] [&>circle]:duration-[250ms] group-hover:[&>circle]:fill-accent group-hover:[&>circle]:[fill-opacity:1] group-hover:[&>path]:fill-white" />
                  Dial Now (833) 349-4283
                </a>
                <a
                  href="/freequote"
                  className="inline-flex items-center justify-center gap-[10px] rounded-lg border border-white bg-white px-[42px] py-5 text-center text-lg font-semibold capitalize leading-none text-accent transition-[background-color,border-color,color] duration-[250ms] ease"
                >
                  Get Started
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="absolute left-1/2 top-[80%] flex -translate-x-1/2 -translate-y-1/2 gap-[10px] max-md:hidden min-[1250px]:left-[calc(10vw+50px)] min-[1250px]:translate-x-0 min-[1250px]:translate-y-0">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === active}
            onPointerDown={(event) => event.stopPropagation()}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 hover:bg-accent ${index === active ? "h-2 w-10 bg-accent" : "h-0.5 w-20 bg-white"}`}
          />
        ))}
      </div>
    </section>
  );
}
