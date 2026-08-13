import React from "react"

interface ValeMindLogoProps {
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "hero"
  showText?: boolean
  textColor?: string
  layout?: "horizontal" | "vertical"
}

export function ValeMindLogo({
  className = "",
  size = "md",
  showText = true,
  textColor = "text-[#F5F5F5]",
  layout = "horizontal"
}: ValeMindLogoProps) {
  const sizeMap = {
    sm: { icon: "w-7 h-7", text: "text-sm sm:text-base font-semibold", sub: "text-[9px]" },
    md: { icon: "w-9 h-9 sm:w-10 sm:h-10", text: "text-base sm:text-lg font-bold", sub: "text-[10px]" },
    lg: { icon: "w-14 h-14 sm:w-16 sm:h-16", text: "text-2xl font-bold", sub: "text-xs" },
    xl: { icon: "w-20 h-20 sm:w-24 sm:h-24", text: "text-3xl font-bold", sub: "text-xs" },
    hero: { icon: "w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44", text: "text-3xl sm:text-4xl md:text-5xl font-bold", sub: "text-xs sm:text-sm" }
  }

  const currentSize = sizeMap[size]

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3.5 select-none ${className}`}>
      {/* Official Vale Mind "VM" Monogram SVG (Interlocking Origami V & M) */}
      <div className={`relative shrink-0 ${currentSize.icon} flex items-center justify-center`}>
        {/* Very soft ambient blue backlight to cleanly separate from pure dark background */}
        <div className="absolute inset-0 bg-blue-600/10 rounded-full blur-md pointer-events-none" />
        
        <svg
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full relative z-10 drop-shadow-sm"
        >
          <defs>
            {/* Rich Cobalt/Royal Blue Gradients for the "M" */}
            <linearGradient id="vm-blue-left" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066FF" />
              <stop offset="100%" stopColor="#0047D4" />
            </linearGradient>

            <linearGradient id="vm-blue-right" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0072FF" />
              <stop offset="100%" stopColor="#004AD6" />
            </linearGradient>

            <linearGradient id="vm-blue-center" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#0055F0" />
              <stop offset="100%" stopColor="#0035A8" />
            </linearGradient>

            {/* Subtle Shading on the White "V" Ribbon to give Origami Depth */}
            <linearGradient id="vm-white-left" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="85%" stopColor="#F8FAFC" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>

            <linearGradient id="vm-white-right" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="80%" stopColor="#F1F5F9" />
              <stop offset="100%" stopColor="#CBD5E1" />
            </linearGradient>

            <linearGradient id="vm-white-fold" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#E2E8F0" />
              <stop offset="100%" stopColor="#FFFFFF" />
            </linearGradient>

            {/* Drop Shadow filter for realistic layer overlap */}
            <filter id="vm-shadow-subtle" x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="-2" dy="4" stdDeviation="4" floodColor="#001845" floodOpacity="0.35" />
            </filter>

            <filter id="vm-shadow-ribbon" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="5" stdDeviation="5" floodColor="#000000" floodOpacity="0.4" />
            </filter>
          </defs>

          {/* ======================================================== */}
          {/* 1. THE BLUE "M" BASE STRUCTURE                           */}
          {/* ======================================================== */}
          
          {/* Left Wing / Pillar of the "M" */}
          <path
            d="M55 70 L95 130 L95 170 L55 210 Z"
            fill="url(#vm-blue-left)"
          />
          {/* Left Pillar outer fill */}
          <path
            d="M55 70 L95 130 L95 190 L55 210 Z"
            fill="url(#vm-blue-left)"
          />
          <polygon
            points="55,70 95,130 95,195 55,215"
            fill="url(#vm-blue-left)"
          />

          {/* Right Wing / Pillar of the "M" */}
          <polygon
            points="245,70 205,130 205,195 245,215"
            fill="url(#vm-blue-right)"
          />

          {/* Central Blue V-section of the "M" */}
          <polygon
            points="100,50 150,140 200,50 172,50 150,96 128,50"
            fill="url(#vm-blue-center)"
          />

          {/* Blue connector bevels */}
          <polygon
            points="55,70 100,50 128,50 95,130"
            fill="url(#vm-blue-left)"
          />
          <polygon
            points="245,70 200,50 172,50 205,130"
            fill="url(#vm-blue-right)"
          />

          {/* Bottom Angled Cut of M Pillars */}
          <polygon
            points="55,70 95,130 95,190 55,210"
            fill="url(#vm-blue-left)"
          />
          <polygon
            points="245,70 205,130 205,190 245,210"
            fill="url(#vm-blue-right)"
          />

          {/* ======================================================== */}
          {/* 2. THE WHITE "V" INTERLACING ORIGAMI RIBBON              */}
          {/* ======================================================== */}
          
          {/* Left White Arm of the "V" (Descending over the M) */}
          <polygon
            points="35,45 85,45 150,195 130,215 110,215"
            fill="url(#vm-white-left)"
            filter="url(#vm-shadow-ribbon)"
          />

          {/* Right White Arm of the "V" (Descending & Interlocking) */}
          <polygon
            points="265,45 215,45 150,195 170,215 190,215"
            fill="url(#vm-white-right)"
            filter="url(#vm-shadow-ribbon)"
          />

          {/* White V Left Blade Main Body */}
          <polygon
            points="35,45 85,45 150,195 100,195"
            fill="url(#vm-white-left)"
          />

          {/* White V Right Blade Main Body */}
          <polygon
            points="265,45 215,45 150,195 200,195"
            fill="url(#vm-white-right)"
          />

          {/* Bottom Tip Fold & Precision Apex */}
          <polygon
            points="150,195 130,215 170,215"
            fill="url(#vm-white-fold)"
          />

          {/* Top-Right Chamfer / Fold on Right Arm */}
          <polygon
            points="215,45 265,45 235,95 205,95"
            fill="#FFFFFF"
          />

          {/* Top-Left Chamfer / Fold on Left Arm */}
          <polygon
            points="35,45 85,45 115,95 65,95"
            fill="#F8FAFC"
          />

          {/* Precision inner shadow edge where white crosses blue */}
          <path
            d="M100 50 L150 140 L200 50"
            stroke="#0035A8"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-40"
          />
        </svg>
      </div>

      {/* Official "vale mind" Typography */}
      {showText && (
        <div className="flex flex-col justify-center">
          <span className={`tracking-tight font-display lowercase leading-none ${currentSize.text} ${textColor} flex items-center gap-1`}>
            vale mind
          </span>
          {size !== "sm" && (
            <span className={`font-mono uppercase tracking-[0.18em] text-[#6B6F76] mt-1 font-medium ${currentSize.sub}`}>
              Software & Tecnologia
            </span>
          )}
        </div>
      )}
    </div>
  )
}
