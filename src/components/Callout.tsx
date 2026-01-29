"use client";

import * as React from "react";

export default function Callout({
  title,
  children,
  className = "",
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-slate-200 bg-white p-8 shadow-soft",
        className,
      ].join(" ")}
    >
      <h3 className="text-xl font-black text-navy text-[#1e3a5f]">
        {title}
      </h3>

      <div className="mt-4 text-sm leading-relaxed text-slate-700">
        {children}
      </div>
    </div>
  );
}
