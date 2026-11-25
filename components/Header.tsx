"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { garageServices, gateServices } from "@/lib/services";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<"garage" | "gate" | null>(null);

  return (
    <>
      <div className="bg-accent text-white">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 flex flex-wrap items-center justify-between gap-2 py-[15px] text-sm">
          <a href="tel:8333494283" className="flex items-center text-[16px] gap-2">
            <PhoneIcon />
            Call us for a FREE Estimate. Dial Now <span className="font-bold text-[20px]">(833) 349-4283</span>
          </a>
          <span className="flex items-center gap-2 text-[17px]">
            <ClockIcon />
            24/7 Emergency Service
          </span>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="mx-auto max-w-[1320px] px-5 flex items-center justify-between gap-4 py-3">
          <Link href="/" className="shrink-0">
            <Image
              src="/images/anchor-garage-door-logo.png"
              alt="Anchor Garage Door and Gate Services, Inc"
              width={161}
              height={46}
              className="h-auto"
              priority
            />
          </Link>

          <div className="flex items-center gap-3">
            <nav className="hidden items-center gap-7 lg:flex">
              <NavDropdown
                label="Garage Services"
                items={garageServices.map((s) => ({ label: s.title, href: `/service/${s.slug}` }))}
              />
              <NavDropdown
                label="Gate Services"
                items={gateServices.map((s) => ({ label: s.title, href: `/service/${s.slug}` }))}
              />
              <Link href="/about-us" className="hover:text-accent">
                About Us
              </Link>
              <Link href="/projects" className="hover:text-accent">
                Projects
              </Link>
              <Link href="/blogs" className="hover:text-accent">
                Blogs
              </Link>
            </nav>
            <Link
              href="/freequote"
              className="hidden items-center justify-center gap-[10px] rounded-lg border border-white bg-accent px-5 py-[15px] text-center text-sm font-semibold capitalize leading-none text-white transition-[background-color,border-color,color] duration-[250ms] ease hover:border-accent hover:bg-white hover:text-accent sm:inline-flex lg:px-[39px] lg:py-4 lg:text-base"
            >
              Get a Quote
            </Link>
            <button
              aria-label="Toggle menu"
              className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="h-0.5 w-6 bg-ink" />
              <span className="h-0.5 w-6 bg-ink" />
              <span className="h-0.5 w-6 bg-ink" />
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-black/10 bg-white lg:hidden">
            <div className="mx-auto max-w-[1320px] px-5 sm:px-8 flex flex-col gap-1 py-4">
              <MobileGroup
                label="Garage Services"
                items={garageServices.map((s) => ({ label: s.title, href: `/service/${s.slug}` }))}
                open={openGroup === "garage"}
                onToggle={() => setOpenGroup(openGroup === "garage" ? null : "garage")}
              />
              <MobileGroup
                label="Gate Services"
                items={gateServices.map((s) => ({ label: s.title, href: `/service/${s.slug}` }))}
                open={openGroup === "gate"}
                onToggle={() => setOpenGroup(openGroup === "gate" ? null : "gate")}
              />
              <Link href="/about-us" className="py-2" onClick={() => setMobileOpen(false)}>
                About Us
              </Link>
              <Link href="/projects" className="py-2" onClick={() => setMobileOpen(false)}>
                Projects
              </Link>
              <Link href="/blogs" className="py-2" onClick={() => setMobileOpen(false)}>
                Blogs
              </Link>
              <Link
                href="/freequote"
                className="mt-2 inline-flex items-center justify-center gap-[10px] rounded-lg border border-white bg-accent px-5 py-[15px] text-center text-sm font-semibold capitalize leading-none text-white transition-[background-color,border-color,color] duration-[250ms] ease hover:border-accent hover:bg-white hover:text-accent sm:hidden lg:px-[39px] lg:py-4 lg:text-base"
                onClick={() => setMobileOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
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

function NavDropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 hover:text-accent">
        {label}
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="mt-0.5">
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>
      <div className="invisible absolute left-0 top-full z-10 min-w-[260px] rounded-lg border border-black/5 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="block px-5 py-2 text-sm text-ink hover:bg-light hover:text-accent">
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
  open,
  onToggle,
}: {
  label: string;
  items: { label: string; href: string }[];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-black/5">
      <button onClick={onToggle} className="flex w-full items-center justify-between py-2">
        {label}
        <span>{open ? "−" : "+"}</span>
      </button>
      {open && (
        <div className="flex flex-col gap-1 pb-2 pl-3">
          {items.map((item) => (
            <Link key={item.href} href={item.href} className="py-1 text-sm text-ink">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
