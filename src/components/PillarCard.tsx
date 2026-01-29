"use client";

import * as React from "react";
import {
  DollarSign,
  Heart,
  Vote,
  Leaf,
  Bot,
  Users,
  Shield,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "dollar-sign": DollarSign,
  heart: Heart,
  vote: Vote,
  leaf: Leaf,
  bot: Bot,
  users: Users,
  shield: Shield,
};

type PillarCardProps = {
  title: string;
  summary: string;
  implementation: string;
  icon: string;
  className?: string;
};

export default function PillarCard({
  title,
  summary,
  implementation,
  icon,
  className = "",
}: PillarCardProps) {
  const Icon = iconMap[icon] ?? Shield;

  return (
    <div
      className={[
        "relative rounded-2xl border border-slate-200 bg-white shadow-soft",
        "p-7",
        "transition-all duration-200 hover:shadow-md",
        className,
      ].join(" ")}
    >
      {/* Democratic blue accent — restrained, institutional */}
      <div className="absolute left-0 top-6 h-[calc(100%-3rem)] w-1 rounded-full bg-blue-700/70" />

      <div className="flex items-start gap-5 pl-2">
        {/* Icon */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50">
          <Icon className="h-6 w-6 text-blue-800" aria-hidden="true" />
        </div>

        <div className="flex-1">
          <div className="text-sm font-black tracking-wide text-slate-900">
            {title}
          </div>

          <div className="mt-2 text-sm leading-6 text-slate-700">
            {summary}
          </div>

          <div className="mt-3 text-sm italic text-slate-600">
            <span className="mr-2">→</span>
            {implementation}
          </div>
        </div>
      </div>
    </div>
  );
}
