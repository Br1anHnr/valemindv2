import React from "react"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight, Play, CheckCircle2, ShieldCheck, Zap, Layers, Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { SplineScene } from "@/components/ui/splite"

interface HeroProps {
  onOpenBooking: () => void
}

export function Hero({ onOpenBooking }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[500px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Announcements Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-medium backdrop-blur-md shadow-lg shadow-indigo-950/50 hover:border-indigo-400/50 transition-colors cursor-pointer">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="font-semibold text-indigo-200">Vale Mind OS v2.4</span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-300">Nova geração de Agentes Autônomos Cognitivos</span>
            <ArrowRight className="w-3.5 h-3.5 text-indigo-400" />
          </div>
        </motion.div>

        {/* Main Headline & Subtitle */}
        <div className="mt-8 text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display tracking-tight text-white leading-[1.1]"
          >
            Inteligência Artificial que{" "}
            <span className="text-gradient-primary">Amplifica a Mente</span> e{" "}
            <span className="text-gradient-cyan">Escala Negócios</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            Orquestramos redes neurais, agentes autônomos multi-tarefas e modelos de raciocínio avançados para automatizar fluxos complexos, acelerar tomadas de decisão e multiplicar o ROI da sua empresa.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              onClick={onOpenBooking}
              variant="glow"
              size="lg"
              className="w-full sm:w-auto gap-2 text-base font-semibold group"
            >
              <Sparkles className="w-5 h-5 text-cyan-300 group-hover:rotate-12 transition-transform" />
              <span>Solicitar Demonstração Gratuita</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <a href="#demo-3d" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto gap-2 text-base border-slate-800 bg-slate-900/60 hover:bg-slate-800/90 text-slate-200"
              >
                <Brain className="w-5 h-5 text-indigo-400" />
                <span>Explorar 3D Studio & IA</span>
              </Button>
            </a>
          </motion.div>

          {/* Trust points */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400 font-mono"
          >
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Privacidade Total & SOC-2</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Implantação em menos de 48h</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Compatível com GPT-4.5, Claude 3.7 & On-Premise</span>
            </div>
          </motion.div>
        </div>

        {/* 3D Spline Interactive Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 relative"
        >
          <div className="relative rounded-3xl p-1 bg-gradient-to-b from-indigo-500/30 via-slate-800/50 to-cyan-500/20 shadow-2xl shadow-indigo-950/60">
            <Card className="w-full min-h-[560px] lg:h-[620px] bg-[#070d1e]/90 backdrop-blur-2xl relative overflow-hidden border border-slate-800/80 rounded-[22px]">
              {/* Cursor-Following Spotlight */}
              <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                size={320}
              />

              <div className="flex flex-col lg:flex-row h-full">
                {/* Left Content Side */}
                <div className="flex-1 p-8 sm:p-12 relative z-10 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs w-fit mb-4 font-mono">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span>Cena 3D Interativa Neural</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight leading-tight">
                    Experiência Imersiva &{" "}
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400">
                      Raciocínio Tridimensional
                    </span>
                  </h2>

                  <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl">
                    Interaja com a representação neural em tempo real da Vale Mind. Nossos agentes processam dados multidimensionais, reconhecem intenções e geram ações autônomas em milissegundos.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
                      <div className="text-2xl sm:text-3xl font-bold font-display text-indigo-400">
                        0.18s
                      </div>
                      <div className="text-xs text-slate-400 mt-1 font-mono">
                        Latência de Raciocínio
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80">
                      <div className="text-2xl sm:text-3xl font-bold font-display text-cyan-400">
                        100%
                      </div>
                      <div className="text-xs text-slate-400 mt-1 font-mono">
                        Controle & Rastreabilidade
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-3">
                    <Button
                      onClick={onOpenBooking}
                      variant="default"
                      size="default"
                      className="bg-indigo-600 hover:bg-indigo-500 gap-2 font-medium"
                    >
                      <span>Iniciar com a Vale Mind</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                    <span className="text-xs text-slate-400 hidden sm:inline-block font-mono">
                      * Arraste e gire o modelo 3D ao lado →
                    </span>
                  </div>
                </div>

                {/* Right 3D Spline Scene Side */}
                <div className="flex-1 relative min-h-[380px] lg:min-h-full w-full h-full bg-gradient-to-b from-slate-950/40 to-slate-900/80 overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 z-0">
                    <SplineScene 
                      scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                      className="w-full h-full"
                    />
                  </div>
                  
                  {/* Subtle 3D Interaction overlay badge */}
                  <div className="absolute bottom-4 right-4 z-20 pointer-events-none px-3 py-1.5 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300 backdrop-blur-md font-mono flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                    <span>Spline 3D Live Engine</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
