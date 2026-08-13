import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ChevronRight } from "lucide-react"
import { ValeMindLogo } from "@/components/valemind-logo"
import { Button } from "@/components/ui/button"

interface NavbarProps {
  onOpenBooking: () => void
  onSelectSolution?: (index: number) => void
}

const navLinks = [
  { label: "Soluções", href: "#hub-solucoes" },
  { label: "Metodologia", href: "#metodologia" },
  { label: "Diferenciais", href: "#diferenciais" },
]

export function Navbar({ onOpenBooking, onSelectSolution }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#090A0B]/85 backdrop-blur-xl border-b border-[#1D2025]/60 py-2.5"
          : "bg-transparent py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <ValeMindLogo size="sm" showText={true} />
          </a>

          {/* Desktop Nav — Glass Pill */}
          <div className="hidden md:flex items-center justify-center">
            <nav className="bg-[#111316]/80 border border-[#1D2025]/70 rounded-full px-1.5 py-1 backdrop-blur-xl shadow-lg shadow-black/30">
              <ul className="flex items-center gap-0.5">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="inline-flex h-8 items-center px-4 text-xs font-medium text-[#A1A1AA] hover:text-[#F5F5F5] rounded-full hover:bg-[#1D2025]/60 transition-all duration-200 select-none"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center">
            <Button
              onClick={onOpenBooking}
              variant="default"
              size="sm"
              className="text-xs font-semibold px-4 py-1.5 rounded-lg bg-[#FFFFFF] text-[#090A0B] hover:bg-[#E5E5E5] transition-colors"
            >
              Vamos conversar
            </Button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#A1A1AA] hover:text-white rounded-lg hover:bg-[#111316] transition-colors"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#090A0B]/98 border-b border-[#1D2025] backdrop-blur-2xl overflow-hidden"
          >
            <div className="px-6 py-6 space-y-4">
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href)
                      setMobileMenuOpen(false)
                    }}
                    className="flex items-center justify-between py-2.5 text-sm text-[#A1A1AA] hover:text-white font-medium transition-colors"
                  >
                    {link.label}
                    <ChevronRight className="w-4 h-4 text-[#6B6F76]" />
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-[#1D2025]">
                <Button
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenBooking()
                  }}
                  variant="default"
                  className="w-full justify-center py-2.5 rounded-lg bg-[#FFFFFF] text-[#090A0B]"
                >
                  Vamos conversar
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
