"use client";

import Link from "next/link";
import * as React from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

function isExternalHref(href: string) {
  return (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:")
  );
}

export function Button({
  href,
  variant = "primary",
  size = "md",
  external,
  className = "",
  children,
}: {
  href: string;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  const isExternal = external ?? isExternalHref(href);

  /**
   * Democratic Institutional Style Lock
   * - Primary: Civic Blue
   * - Secondary: White surface + border + ink text
   * - Ghost: Ink text, subtle hover
   * - Focus ring: Blue (never white)
   *
   * NOTE: use hard fallbacks so it still renders even if theme tokens drift.
   */
  const base =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgba(29,78,216,0.35)] " +
    "focus-visible:ring-offset-2 focus-visible:ring-offset-white";

  const sizes: Record<Size, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
  };

  const variants: Record<Variant, string> = {
    primary:
      // Civic Blue — not red
      "bg-blue-700 bg-[#1D4ED8] text-white " +
      "shadow-sm shadow-blue-700/15 shadow-[#1D4ED8]/15 " +
      "hover:bg-blue-800 hover:bg-[#1E40AF] " +
      "hover:-translate-y-0.5 active:translate-y-0",

    secondary:
      // Institutional outline button that works on cream, white, and light gray
      "bg-white text-slate-900 text-[#0B1220] " +
      "ring-1 ring-slate-300 ring-[#CBD5E1] " +
      "hover:bg-slate-50 hover:bg-[#F1F5F9] " +
      "hover:ring-slate-400 hover:ring-[#94A3B8] " +
      "shadow-sm shadow-black/5",

    ghost:
      // Quiet link-button
      "bg-transparent text-slate-900 text-[#0B1220] " +
      "hover:bg-slate-100 hover:bg-[#F1F5F9] " +
      "hover:text-blue-800 hover:text-[#1E40AF]",
  };

  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`.trim();

  // In-page anchors like #signup should remain anchors.
  if (href.startsWith("#")) {
    return (
      <a href={href} className={cls}>
        {children}
      </a>
    );
  }

  if (isExternal) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
