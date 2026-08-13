import React, { useState } from "react"
import { motion } from "framer-motion"
import { SplineSceneBasic } from "@/components/ui/demo"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sparkles, Eye, Sliders, Play, RotateCcw, Cpu, CheckCircle } from "lucide-react"

interface InteractiveDemoProps {
  onOpenBooking: () => void
}

export function InteractiveDemoSection({ onOpenBooking }: InteractiveDemoProps) {
  const [activePreset, setActivePreset] = useState("neural-mesh")
  const [modelMode, setModelMode] = useState<"fast" | "deep-reasoning" | "multi-agent">("deep-reasoning")

  return (
    <section id="demo-3d" className="py-24 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="glow" className="mb-4">
            3D Studio & Interatividade
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Interaja com o <span className="text-gradient-primary">Núcleo 3D da Vale Mind</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Experimente a fusão entre interfaces modernas e renderização tridimensional interativa. Arraste, gire e visualize a computação neural em tempo real.
          </p>
        </div>

        {/* 3D Demo Component Integration */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="rounded-3xl p-1 bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-cyan-500/30 shadow-2xl">
            {/* The exact SplineSceneBasic component requested */}
            <SplineSceneBasic />
          </div>

          {/* Interactive controls under the 3D demo */}
          <div className="mt-6 p-6 rounded-2xl bg-slate-900/80 border border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Sliders className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-white">
                  Modo de Execução do Agente
                </div>
                <div className="text-xs text-slate-400">
                  Selecione o perfil cognitivo para teste de estresse
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => setModelMode("fast")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  modelMode === "fast"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "bg-slate-800/80 text-slate-400 hover:text-white"
                }`}
              >
                ⚡ Modo Flash (&lt;100ms)
              </button>
              <button
                onClick={() => setModelMode("deep-reasoning")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  modelMode === "deep-reasoning"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "bg-slate-800/80 text-slate-400 hover:text-white"
                }`}
              >
                🧠 Deep Reasoning (CoT)
              </button>
              <button
                onClick={() => setModelMode("multi-agent")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  modelMode === "multi-agent"
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                    : "bg-slate-800/80 text-slate-400 hover:text-white"
                }`}
              >
                🌐 Swarm de 8 Agentes
              </button>
            </div>

            <Button
              onClick={onOpenBooking}
              variant="outline"
              size="sm"
              className="gap-1.5 text-xs text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/10"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Solicitar Acesso ao Sandbox</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
