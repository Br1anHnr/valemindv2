import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sparkles, ArrowRight, ShieldCheck, Zap, Headphones, CheckCircle2 } from "lucide-react"

interface CtaProps {
  onOpenBooking: () => void
}

export function CtaSection({ onOpenBooking }: CtaProps) {
  return (
    <section className="py-24 relative overflow-hidden bg-grid-pattern">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-r from-indigo-600/30 via-purple-600/20 to-cyan-500/25 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-16 bg-gradient-to-b from-indigo-950/80 via-slate-900/95 to-slate-950/90 border border-indigo-500/40 shadow-2xl text-center backdrop-blur-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-6 font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>Acelere sua Transformação Cognitiva</span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Pronto para Multiplicar o Potencial da sua Empresa?
          </h2>

          <p className="mt-6 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Agende uma sessão estratégica com nossos engenheiros de IA. Mapeamos os fluxos de maior impacto e entregamos um plano de ação completo em até 48 horas.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={onOpenBooking}
              variant="glow"
              size="lg"
              className="w-full sm:w-auto gap-2 font-bold text-base px-10 py-6"
            >
              <Sparkles className="w-5 h-5 text-cyan-300" />
              <span>Agendar Diagnóstico Gratuito de IA</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-slate-400 font-mono">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Sem compromisso contratual</span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-indigo-400" />
              <span>Acordo de Confidencialidade (NDA) imediato</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Headphones className="w-4 h-4 text-cyan-400" />
              <span>Atendimento por Especialistas Sêniores</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
