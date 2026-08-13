import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "glow" | "gradient" | "success"
}

function Badge({
  className,
  variant = "default",
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-[#111316] text-[#A1A1AA] border border-[#1D2025]",
    secondary: "bg-[#16181D] text-[#A1A1AA] border border-[#1D2025]",
    outline: "text-[#A1A1AA] border border-[#1D2025] bg-transparent",
    glow: "bg-[#111316] text-[#F5F5F5] border border-[#1D2025]",
    gradient: "bg-[#111316] text-[#F5F5F5] border border-[#1D2025]",
    success: "bg-[#111316] text-emerald-400 border border-[#1D2025]",
  }

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 text-xs font-mono font-medium tracking-wide select-none",
        variantStyles[variant],
        className
      )}
      {...props}
    />
  )
}

export { Badge }
