import React from "react"

interface ValeMindSymbolProps {
  /** Size in pixels */
  size?: number
  className?: string
  /** "default" = blue+white crisp symbol; "watermark" = ultra-faint monochrome */
  variant?: "default" | "watermark"
}

/**
 * Flat, geometric VM monogram for digital use.
 * V in front (white) + M behind (blue).
 * No shadows, no 3D, no glossy effects.
 */
export function ValeMindSymbol({
  size = 96,
  className = "",
  variant = "default",
}: ValeMindSymbolProps) {
  const isWatermark = variant === "watermark"

  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {!isWatermark && (
          <defs>
            {/* Extremely subtle blue gradient */}
            <linearGradient id="vm-flat-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
          </defs>
        )}

        {/* ============================================ */}
        {/* M — BEHIND (Blue / Watermark Gray)           */}
        {/* ============================================ */}

        {/* Left Pillar */}
        <polygon
          points="28,38 56,38 56,176 28,176"
          fill={isWatermark ? "#1A1B1E" : "url(#vm-flat-blue)"}
        />

        {/* Right Pillar */}
        <polygon
          points="144,38 172,38 172,176 144,176"
          fill={isWatermark ? "#1A1B1E" : "url(#vm-flat-blue)"}
        />

        {/* Center Chevron (M peak band) */}
        <path
          d="M56,38 L100,105 L144,38 L130,38 L100,82 L70,38 Z"
          fill={isWatermark ? "#1A1B1E" : "url(#vm-flat-blue)"}
        />

        {/* ============================================ */}
        {/* V — IN FRONT (White / Watermark Light Gray)  */}
        {/* ============================================ */}

        {/* Left Arm of V */}
        <polygon
          points="16,26 46,26 100,168 82,168"
          fill={isWatermark ? "#222326" : "#FFFFFF"}
        />

        {/* Right Arm of V */}
        <polygon
          points="184,26 154,26 100,168 118,168"
          fill={isWatermark ? "#222326" : "#F8FAFC"}
        />
      </svg>
    </div>
  )
}
