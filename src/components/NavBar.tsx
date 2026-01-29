"use client";

import Link from "next/link";
import Container from "@/components/Container";
import { Button } from "@/components/Button";

const nav = [
  { href: "/platform", label: "Platform" },
  { href: "/candidates", label: "Candidates" },
  { href: "/personnel", label: "Personnel" },
  { href: "/about", label: "About" },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#F6F1E7] shadow-sm">
      {/* Democratic blue accent line */}
      <div className="h-1 w-full bg-blue-700" />

      <div className="border-b border-slate-900/10">
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-slate-900 text-base font-black text-[#F6F1E7]">
                D29
              </div>
              <div className="leading-tight">
                <div className="text-sm font-black text-slate-900">
                  Democrats for 2029
                </div>
                <div className="text-xs text-slate-700">
                  Prepared. Staffed. Day One.
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-7 md:flex">
              {nav.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="text-sm font-semibold text-slate-800 transition-colors hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F6F1E7]"
                >
                  {i.label}
                </Link>
              ))}

              <Button href="#signup" variant="primary" size="sm">
                Join
              </Button>
            </nav>

            {/* Mobile */}
            <div className="md:hidden">
              <Button href="#signup" variant="primary" size="sm">
                Join
              </Button>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}
