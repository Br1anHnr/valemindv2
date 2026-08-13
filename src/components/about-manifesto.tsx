import React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Cpu, Terminal, Shield, Sparkles, Layers } from "lucide-react"

export function AboutManifestoSection() {
  return (
    <section className="py-24 sm:py-32 relative bg-[#030712] border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Badge variant="glow" className="mb-4">
          Manifesto Técnico
        </Badge>

        <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Tecnologia construída por quem{" "}
          <span className="text-gradient-primary">gosta de construir</span>.
        </h2>

        <p className="mt-8 text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          A <strong>Vale Mind</strong> nasceu da união entre desenvolvimento, engenharia, tecnologia e visão de negócio. Somos uma equipe técnica que participa diretamente da concepção e da construção de cada solução.
        </p>

        <p className="mt-4 text-sm sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Queremos dominar a tecnologia necessária para criar nossos próprios sistemas e produtos, reduzindo dependências externas sempre que isso fizer sentido para o cliente.
        </p>

        {/* Formula Bar */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-slate-800 backdrop-blur-md max-w-4xl mx-auto shadow-2xl">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">
            Nossa Visão Combina
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-sm sm:text-lg font-bold font-display text-white">
            <span className="px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300">
              Software
            </span>
            <span className="text-slate-600">+</span>
            <span className="px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300">
              Automação
            </span>
            <span className="text-slate-600">+</span>
            <span className="px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-300">
              Dados
            </span>
            <span className="text-slate-600">+</span>
            <span className="px-4 py-2 rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-300">
              Integrações
            </span>
            <span className="text-slate-600">+</span>
            <span className="px-4 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
              Inteligência
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
