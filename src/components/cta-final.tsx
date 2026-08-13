import React from "react"
import { Button } from "@/components/ui/button"
import { ValeMindLogo } from "@/components/valemind-logo"
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react"

interface CtaFinalProps {
  onOpenBooking: () => void
}

export function CtaFinalSection({ onOpenBooking }: CtaFinalProps) {
  return (
    <section className="py-24 sm:py-32 relative bg-[#090A0B]/85 backdrop-blur-sm border-t border-[#1D2025]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8 flex justify-center">
          <ValeMindLogo size="lg" showText={true} />
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-tight max-w-2xl mx-auto">
          Qual processo da sua empresa poderia funcionar melhor?
        </h2>

        <p className="mt-5 text-base sm:text-xl text-[#A1A1AA] font-normal max-w-xl mx-auto leading-relaxed">
          Conte o problema para a Vale Mind. Nós pensamos na tecnologia para resolvê-lo.
        </p>

        <div className="mt-8 flex justify-center">
          <Button
            onClick={onOpenBooking}
            variant="default"
            size="lg"
            className="gap-2 font-semibold text-sm sm:text-base px-8 py-3 bg-[#FFFFFF] text-[#090A0B] hover:bg-[#E5E5E5] rounded-lg shadow-sm"
          >
            <span>Vamos conversar</span>
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-[#6B6F76] font-mono">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Diagnóstico técnico inicial</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Sigilo e proteção de dados</span>
          </div>
        </div>
      </div>
    </section>
  )
}
