import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "glow" | "gradient"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all duration-150 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-400 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer"
    
    const variants = {
      // Primary: Pure White button with dark text, subtle hover
      default: "bg-[#FFFFFF] text-[#090A0B] hover:bg-[#E5E5E5] font-semibold active:scale-[0.99]",
      // Secondary: Dark graphite with subtle border
      secondary: "bg-[#111316] text-[#F5F5F5] hover:bg-[#16181D] hover:border-[#2D3139] border border-[#1D2025] active:scale-[0.99]",
      // Outline: Transparent with subtle border
      outline: "border border-[#1D2025] bg-transparent text-[#F5F5F5] hover:bg-[#111316] hover:border-[#2D3139] active:scale-[0.99]",
      // Ghost: Minimalist text only
      ghost: "text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-[#111316]",
      // Glow/Gradient mapped to clean high-contrast primary
      glow: "bg-[#FFFFFF] text-[#090A0B] hover:bg-[#E5E5E5] font-semibold active:scale-[0.99] shadow-sm",
      gradient: "bg-[#FFFFFF] text-[#090A0B] hover:bg-[#E5E5E5] font-semibold active:scale-[0.99]"
    }

    const sizes = {
      default: "h-10 px-4 py-2 rounded-lg text-sm",
      sm: "h-8 px-3 text-xs rounded-md",
      lg: "h-12 px-6 text-sm sm:text-base font-semibold rounded-lg",
      icon: "h-9 w-9 rounded-lg p-0",
    }

    return (
      <button
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
