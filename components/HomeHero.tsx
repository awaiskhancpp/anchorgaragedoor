"use client";

import Image from "next/image";
import { PointerEvent, useEffect, useRef, useState } from "react";
import { HouseIcon } from "@/components/icons";
import DialNowButton from "@/components/DialNowButton";
import GetStartedButton from "@/components/GetStartedButton";

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
    }, 5000);

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
      className="relative h-auto touch-pan-y cursor-grab overflow-hidden bg-accent select-none md:h-[700px]"
      aria-label="Featured services"
      style={{ cursor: isDragging ? "grabbing" : "grab" }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={finishDrag}
      onPointerCancel={finishDrag}
    >
      <div
        className={`flex h-auto w-[200%] md:h-full ${isDragging ? "transition-none" : "transition-transform duration-[1500ms] ease-out"}`}
        style={{ transform: `translateX(calc(-${active * 50}% + ${dragOffset}px))` }}
      >
        {slides.map((slide, index) => (
          <article key={slide.image} className="relative h-auto w-1/2 shrink-0 md:h-full" aria-hidden={index !== active}>
            <div className="relative h-[280px] w-full md:absolute md:left-0 md:right-auto md:top-0 md:bottom-0 md:h-auto md:w-[65.05%]">
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                sizes="(min-width: 768px) 65vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="relative flex h-auto flex-col items-center justify-start gap-5 overflow-hidden bg-accent px-5 pb-[30px] pt-[25px] text-center text-white md:absolute md:inset-y-0 md:left-auto md:right-0 md:w-[34.95%] md:justify-center md:px-5 md:py-5">
              <p className="flex min-h-10 items-center gap-2 text-base font-normal leading-[1.2] text-white">
                <span className="grid h-10 w-10 shrink-0 place-items-center">
                  <HouseIcon className="h-5 w-5" />
                </span>
                Welcome to Anchor Garage Door and Gate Services
              </p>
              <h1>{slide.title}</h1>
              <p className="max-w-xl py-0 text-[14px] leading-[21px] text-white max-md:pb-[15px] max-md:pt-[5px] md:text-[17px] md:leading-[1.5]">{slide.description}</p>
              <div className="flex flex-col items-stretch justify-center gap-5 md:flex-row md:items-center">
                <DialNowButton variant="dark" className="max-md:leading-4" />
                <GetStartedButton variant="dark" className="max-md:py-[19px] max-md:leading-4" />
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
