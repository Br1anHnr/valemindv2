import React from "react"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight, ShieldCheck, Zap, Layers, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Spotlight } from "@/components/ui/spotlight"
import { SplineScene } from "@/components/ui/splite"

interface HeroProps {
  onOpenBooking: () => void
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden bg-[#070b15] flex items-center">
      {/* Interactive Cursor Spotlight */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        size={400}
      />

      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[500px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* 3D Spline Robot Background Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-end overflow-hidden opacity-90 lg:opacity-100">
        <div className="w-full h-full lg:w-[60%] lg:h-[110%] relative lg:-right-10 pointer-events-auto">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
          {/* Gradient overlays for smooth text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#070b15] via-[#070b15]/40 to-transparent pointer-events-none lg:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070b15] via-transparent to-[#070b15]/50 pointer-events-none lg:hidden block" />
        </div>
      </div>

      {/* Main Foreground Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-7 text-left max-w-2xl">
            
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-lg shadow-indigo-950/50 hover:border-indigo-400/50 transition-colors cursor-pointer">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span className="font-semibold text-indigo-200">Vale Mind OS v2.4</span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300">Robôs & Agentes Cognitivos 3D</span>
                <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-[1.08]"
            >
              Inteligência Artificial que{" "}
              <span className="text-gradient-primary bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
                Amplifica a Mente
              </span>{" "}
              e Escala Negócios
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-slate-300 leading-relaxed font-normal backdrop-blur-xs rounded-xl"
            >
              Orquestramos redes neurais, agentes autônomos multi-tarefas e modelos de raciocínio avançados para automatizar fluxos complexos, acelerar tomadas de decisão e multiplicar o ROI da sua empresa.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Button
                onClick={onOpenBooking}
                variant="glow"
                size="lg"
                className="gap-2 text-base font-semibold group bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white shadow-xl shadow-indigo-900/40"
              >
                <Sparkles className="w-5 h-5 text-cyan-200 group-hover:rotate-12 transition-transform" />
                <span>Solicitar Demonstração Gratuita</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <a href="#solucoes" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto gap-2 text-base border-slate-700/80 bg-slate-900/80 hover:bg-slate-800 text-slate-200 backdrop-blur-md"
                >
                  <Bot className="w-5 h-5 text-indigo-400" />
                  <span>Conhecer Soluções</span>
                </Button>
              </a>
            </motion.div>

            {/* Key Metrics / Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-md">
                <div className="text-xl sm:text-2xl font-bold font-display text-indigo-400">
                  0.18s
                </div>
                <div className="text-xs text-slate-400 mt-0.5 font-mono">
                  Latência de Resposta
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-md">
                <div className="text-xl sm:text-2xl font-bold font-display text-cyan-400">
                  100%
                </div>
                <div className="text-xs text-slate-400 mt-0.5 font-mono">
                  Controle & Rastreabilidade
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-md col-span-2 sm:col-span-1">
                <div className="text-xl sm:text-2xl font-bold font-display text-emerald-400">
                  10x+
                </div>
                <div className="text-xs text-slate-400 mt-0.5 font-mono">
                  Ganho em Produtividade
                </div>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Privacidade & SOC-2</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Implantação Rápida em 48h</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-cyan-400" />
                <span>GPT-4.5 & Claude 3.7</span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Interaction Badge/Hint */}
          <div className="lg:col-span-5 hidden lg:flex flex-col justify-end items-end h-full pointer-events-none pb-12">
            <div className="pointer-events-auto p-4 rounded-2xl bg-slate-950/80 border border-slate-800/90 text-slate-300 text-xs backdrop-blur-md shadow-2xl max-w-xs flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse shrink-0" />
              <div>
                <p className="font-semibold text-white font-mono">Robô 3D Interativo</p>
                <p className="text-slate-400 text-[11px] mt-0.5">Clique e arraste com o mouse no robô no fundo para interagir em 360°</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

