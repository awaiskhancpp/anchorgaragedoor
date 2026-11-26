"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { garageServices, gateServices } from "@/lib/services";
import GetAQuoteButton from "@/components/GetAQuoteButton";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<"garage" | "gate" | null>(null);
  const pathname = usePathname();

  return (
    <>
      <div className="bg-accent text-white">
        <div className="mx-auto flex max-w-[1340px] flex-wrap items-center justify-between gap-2 px-[10px] py-[15px] text-sm max-md:flex-col max-md:items-center max-md:gap-[10px] max-md:px-0 max-md:py-[10px]">
          <a
            href="tel:8332004087"
            className="flex items-center gap-2 text-[16px] max-md:h-[42px] max-md:w-[230px] max-md:items-start max-md:justify-center max-md:gap-0 max-md:text-[12px] max-md:leading-[21px]"
          >
            <span className="max-md:mr-[4.5px] max-md:grid max-md:h-[18px] max-md:w-[18px] max-md:shrink-0 max-md:place-items-center max-md:[&>svg]:h-[18px] max-md:[&>svg]:w-[18px]"><PhoneIcon /></span>
            <span className="max-md:w-[230px] max-md:pl-[5px] max-md:text-center">
              Call us for a FREE Estimate. Dial Now <span className="font-bold text-[20px] max-md:block max-md:text-[20px]">(833) 200-4087</span>
            </span>
          </a>
          <span className="flex items-center gap-2 text-[17px] max-md:gap-0 max-md:text-[14px] max-md:leading-[21px]">
            <span className="max-md:mr-[4.5px] max-md:grid max-md:h-[18px] max-md:w-[18px] max-md:shrink-0 max-md:place-items-center max-md:[&>svg]:h-[18px] max-md:[&>svg]:w-[18px]"><ClockIcon /></span>
            24/7 Emergency Service
          </span>
        </div>
      </div>

      <header className="relative sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto flex max-w-[1340px] items-center justify-between gap-4 px-[10px] py-[10px]">
          <div className="flex min-w-0 items-center gap-5 max-md:gap-[10px]">
            <button
              aria-label="Toggle menu"
              aria-controls="mobile-navigation"
              aria-expanded={mobileOpen}
              className="relative flex h-10 w-[37.5px] shrink-0 items-center justify-center lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span
                aria-hidden="true"
                className={`absolute h-0.5 w-7 origin-center transform-gpu bg-ink transition-[transform,opacity] duration-500 ease-in-out max-md:w-6 ${
                  mobileOpen ? "translate-y-0 rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute h-0.5 w-7 origin-center transform-gpu bg-ink transition-[transform,opacity] duration-500 ease-in-out max-md:w-6 ${
                  mobileOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute h-0.5 w-7 origin-center transform-gpu bg-ink transition-[transform,opacity] duration-500 ease-in-out max-md:w-6 ${
                  mobileOpen ? "translate-y-0 -rotate-45" : "translate-y-2"
                }`}
              />
            </button>
            <Link href="/" className="shrink-0">
            <Image
              src="/images/anchor-garage-door-logo.png"
              alt="Anchor Garage Door and Gate Services, Inc"
              width={161}
              height={46}
              className="h-auto max-md:w-[135px] max-lg:w-[145px] lg:w-[161px]"
              priority
            />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-7 lg:flex">
              <NavDropdown
                label="Garage Services"
                items={garageServices.map((s) => ({ label: s.title, href: `/service/${s.slug}` }))}
                pathname={pathname}
              />
              <NavDropdown
                label="Gate Services"
                items={gateServices.map((s) => ({ label: s.title, href: `/service/${s.slug}` }))}
                pathname={pathname}
              />
              <Link href="/about-us" className={isCurrentPath(pathname, "/about-us") ? "text-accent" : "hover:text-accent"}>
                About Us
              </Link>
              <Link href="/projects" className={isCurrentPath(pathname, "/projects") ? "text-accent" : "hover:text-accent"}>
                Projects
              </Link>
              <Link href="/blogs" className={isCurrentPath(pathname, "/blogs") ? "text-accent" : "hover:text-accent"}>
                Blogs
              </Link>
            </nav>
            <GetAQuoteButton className="px-3 py-3 text-[16px] leading-4 lg:px-[39px] lg:py-4" />
          </div>
        </div>

        <div
          id="mobile-navigation"
          aria-hidden={!mobileOpen}
          className={`absolute left-0 right-0 top-full z-[60] origin-top overflow-x-hidden overflow-y-auto bg-white shadow-[0_8px_16px_rgba(0,0,0,0.08)] transition-[max-height,opacity,transform] duration-500 ease-out lg:hidden ${
            mobileOpen
              ? "min-h-[calc(100dvh-210px)] max-h-[calc(100dvh-210px)] scale-y-100 opacity-100 md:min-h-[calc(100dvh-120px)] md:max-h-[calc(100dvh-120px)]"
              : "pointer-events-none max-h-0 scale-y-0 opacity-0"
          }`}
        >
          <div className="flex min-h-full w-full flex-col">
            <MobileGroup
              label="Garage Services"
              items={garageServices.map((s) => ({ label: s.title, href: `/service/${s.slug}` }))}
              pathname={pathname}
              open={openGroup === "garage"}
              onToggle={() => setOpenGroup(openGroup === "garage" ? null : "garage")}
            />
            <MobileGroup
              label="Gate Services"
              items={gateServices.map((s) => ({ label: s.title, href: `/service/${s.slug}` }))}
              pathname={pathname}
              open={openGroup === "gate"}
              onToggle={() => setOpenGroup(openGroup === "gate" ? null : "gate")}
            />
            <Link
              href="/about-us"
              className="block border-b border-[#ededed] px-5 py-[27px] text-[15px] leading-[1.2]"
              onClick={() => setMobileOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/projects"
              className="block border-b border-[#ededed] px-5 py-[27px] text-[15px] leading-[1.2]"
              onClick={() => setMobileOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/blogs"
              className="block px-5 py-[27px] text-[15px] leading-[1.2]"
              onClick={() => setMobileOpen(false)}
            >
              Blogs
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><path d="M15.1835 20.1509C14.1244 20.1509 13.009 19.8978 11.8562 19.4105C10.7315 18.9325 9.59744 18.2764 8.49149 17.4797C7.3949 16.6737 6.33582 15.7739 5.33296 14.7898C4.33947 13.787 3.43972 12.7279 2.64305 11.6406C1.83702 10.5159 1.19031 9.39125 0.731054 8.30404C0.243684 7.14185 0 6.01714 0 4.95805C0 4.22699 0.131218 3.53344 0.384276 2.88673C0.646706 2.22129 1.06847 1.6027 1.64019 1.06847C2.36187 0.356155 3.18665 0 4.06766 0C4.43319 0 4.8081 0.0843526 5.12676 0.234313C5.49229 0.403018 5.80157 0.656073 6.02651 0.993483L8.20094 4.0583C8.39777 4.3301 8.54772 4.59252 8.65082 4.85495C8.77266 5.13613 8.83827 5.41732 8.83827 5.68912C8.83827 6.04527 8.73518 6.39205 8.53835 6.72008C8.39777 6.97314 8.1822 7.24495 7.9104 7.51675L7.27306 8.18219C7.28243 8.21031 7.2918 8.22906 7.30118 8.24781C7.41365 8.44463 7.63859 8.78204 8.06973 9.28816C8.52898 9.81302 8.96012 10.291 9.39125 10.7315C9.94423 11.2751 10.4035 11.7063 10.8346 12.0624C11.3688 12.5123 11.7156 12.7372 11.9218 12.8403L11.9031 12.8872L12.5873 12.2124C12.8778 11.9218 13.159 11.7063 13.4308 11.5657C13.9463 11.247 14.6024 11.1908 15.2584 11.4626C15.5021 11.5657 15.7646 11.7063 16.0457 11.9031L19.1574 14.115C19.5042 14.3493 19.7572 14.6492 19.9072 15.0054C20.0478 15.3615 20.1134 15.6896 20.1134 16.0176C20.1134 16.4675 20.0103 16.9174 19.8135 17.3391C19.6167 17.7609 19.373 18.1264 19.0637 18.4638C18.5294 19.0543 17.9483 19.4761 17.2735 19.7479C16.6268 20.0103 15.9239 20.1509 15.1835 20.1509ZM4.06766 1.40588C3.55218 1.40588 3.07418 1.63082 2.61492 2.0807C2.18379 2.48372 1.88387 2.92423 1.69642 3.40222C1.4996 3.88959 1.40588 4.40507 1.40588 4.95805C1.40588 5.82969 1.61207 6.77633 2.02446 7.75107C2.44623 8.74455 3.03669 9.77552 3.78649 10.8065C4.53629 11.8375 5.38919 12.8403 6.32644 13.787C7.26369 14.7148 8.27592 15.5771 9.31627 16.3363C10.3285 17.0767 11.3688 17.6766 12.3998 18.1077C14.0025 18.7919 15.5021 18.9512 16.7393 18.4357C17.2173 18.2389 17.6391 17.939 18.0233 17.5078C18.2389 17.2735 18.4076 17.0205 18.5482 16.7205C18.6607 16.4862 18.7169 16.2426 18.7169 15.9989C18.7169 15.8489 18.6888 15.699 18.6138 15.5302C18.5857 15.474 18.5294 15.3709 18.3514 15.2491L15.2397 13.0372C15.0522 12.9059 14.8835 12.8122 14.7242 12.7466C14.518 12.6623 14.4337 12.5779 14.115 12.7747C13.9275 12.8685 13.7588 13.009 13.5714 13.1965L12.8591 13.8994C12.4936 14.2556 11.9312 14.3399 11.5001 14.1806L11.247 14.0681C10.8627 13.8619 10.4129 13.5433 9.91611 13.1215C9.46623 12.7372 8.97886 12.2874 8.38839 11.7063C7.92914 11.2376 7.46989 10.7409 6.9919 10.1879C6.55139 9.67242 6.23272 9.23192 6.0359 8.8664L5.92343 8.58522C5.8672 8.36965 5.84845 8.24781 5.84845 8.11659C5.84845 7.77918 5.97028 7.47926 6.20459 7.24494L6.90753 6.51389C7.09498 6.32644 7.23558 6.14836 7.32931 5.98903C7.40429 5.86719 7.43239 5.76409 7.43239 5.67037C7.43239 5.59539 7.40428 5.48291 7.35742 5.37044C7.29181 5.22048 7.18871 5.05178 7.0575 4.8737L4.88308 1.79952C4.78936 1.6683 4.67688 1.57458 4.53629 1.50897C4.38633 1.44337 4.227 1.40588 4.06766 1.40588ZM11.9031 12.8966L11.7531 13.5339L12.0062 12.8778C11.9593 12.8685 11.9218 12.8778 11.9031 12.8966Z" fill="white"></path></svg>
  );
}

function ClockIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22" fill="none"><path d="M9.5 21.75C4.26 21.75 0 17.49 0 12.25C0 7.01 4.26 2.75 9.5 2.75C14.74 2.75 19 7.01 19 12.25C19 17.49 14.74 21.75 9.5 21.75ZM9.5 4.25C5.09 4.25 1.5 7.84 1.5 12.25C1.5 16.66 5.09 20.25 9.5 20.25C13.91 20.25 17.5 16.66 17.5 12.25C17.5 7.84 13.91 4.25 9.5 4.25Z" fill="white"></path><path d="M9.5 12.75C9.09 12.75 8.75 12.41 8.75 12V7C8.75 6.59 9.09 6.25 9.5 6.25C9.91 6.25 10.25 6.59 10.25 7V12C10.25 12.41 9.91 12.75 9.5 12.75Z" fill="white"></path><path d="M12.5 1.75H6.5C6.09 1.75 5.75 1.41 5.75 1C5.75 0.59 6.09 0.25 6.5 0.25H12.5C12.91 0.25 13.25 0.59 13.25 1C13.25 1.41 12.91 1.75 12.5 1.75Z" fill="white"></path></svg>
  );
}

function isCurrentPath(pathname: string, href: string) {
  const normalizedPath = pathname.replace(/\/$/, "") || "/";
  const normalizedHref = href.replace(/\/$/, "") || "/";
  return normalizedPath === normalizedHref;
}

function NavDropdown({
  label,
  items,
  pathname,
}: {
  label: string;
  items: { label: string; href: string }[];
  pathname: string;
}) {
  const hasActiveItem = items.some((item) => isCurrentPath(pathname, item.href));

  return (
    <div className={`group relative ${hasActiveItem ? "text-accent" : ""}`}>
      <button className="flex items-center gap-2 transition-colors duration-200 group-hover:text-accent">
        {label}
        <svg width="16" height="10" viewBox="0 0 12 7" fill="none" className="mt-0.5 rotate-180 transition-transform duration-[400ms] ease group-hover:rotate-0">
          <path d="M6.02829 0.555879C5.90933 0.555879 5.79025 0.601347 5.69943 0.692167L1.04794 5.34366C0.866182 5.52541 0.866182 5.81974 1.04794 6.00138C1.2297 6.18302 1.52402 6.18313 1.70566 6.00138L6.02829 1.67875L10.3509 6.00138C10.5327 6.18313 10.827 6.18313 11.0086 6.00138C11.1903 5.81962 11.1904 5.5253 11.0086 5.34366L6.35715 0.692167C6.26633 0.601347 6.14725 0.555879 6.02829 0.555879Z" fill="currentColor" />
        </svg>
      </button>
      <div className="invisible absolute left-0 top-full z-10 w-[250px] overflow-hidden bg-white opacity-0 shadow-[0_4px_12px_rgba(0,0,0,0.12)] transition-[opacity,visibility] duration-150 group-hover:visible group-hover:opacity-100">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block px-6 py-[13px] text-[15px] leading-5 transition-colors duration-150 ${
              isCurrentPath(pathname, item.href)
                ? "bg-accent text-white"
                : "text-ink hover:bg-accent hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function MobileGroup({
  label,
  items,
  pathname,
  open,
  onToggle,
}: {
  label: string;
  items: { label: string; href: string }[];
  pathname: string;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[#ededed]">
      <button
        type="button"
        aria-expanded={open}
        onClick={onToggle}
        className="flex w-full items-center justify-between px-5 py-[27px] text-left text-[15px] leading-[1.2]"
      >
        {label}
        <ChevronIcon open={open} />
      </button>
      <div
        aria-hidden={!open}
        className={`flex flex-col overflow-hidden pl-5 transition-[max-height,opacity,transform,padding] duration-[450ms] ease-out ${
          open ? "max-h-[1200px] pb-0 translate-y-0 opacity-100" : "max-h-0 pb-0 -translate-y-1 opacity-0"
        }`}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`border-b border-[#ededed] px-5 py-[27px] text-[15px] leading-[1.2] last:border-b-0 ${isCurrentPath(pathname, item.href) ? "font-semibold text-accent" : "text-ink"}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="8"
      viewBox="0 0 12 7"
      fill="none"
      className={`shrink-0 transition-transform duration-500 ease-in-out ${open ? "rotate-180" : "rotate-0"}`}
    >
      <path
        d="M1.04794 1.00138L6.02829 5.98173L11.0086 1.00138"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
