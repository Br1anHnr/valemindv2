import React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Code2, Search, Network, TrendingUp, Layers, CheckCircle2 } from "lucide-react"

export function DifferentialsSection() {
  const diffs = [
    {
      title: "Construímos tecnologia",
      desc: "Temos capacidade técnica real de desenvolver nossas próprias soluções de engenharia, sem terceirizações opacas.",
      icon: Code2,
      accent: "text-blue-400"
    },
    {
      title: "Entendemos antes de desenvolver",
      desc: "O problema vem antes da ferramenta. Jamais empurramos uma tecnologia antes de dissecar o fluxo operacional.",
      icon: Search,
      accent: "text-cyan-400"
    },
    {
      title: "Pensamos na operação inteira",
      desc: "Software, pessoas, processos e sistemas precisam funcionar juntos com fluidez e ergonomia de trabalho.",
      icon: Network,
      accent: "text-indigo-400"
    },
    {
      title: "Construímos para evoluir",
      desc: "A arquitetura é modular para crescer junto com a empresa, sem exigir reconstruções do zero no futuro.",
      icon: TrendingUp,
      accent: "text-emerald-400"
    },
    {
      title: "Pensamos como produto",
      desc: "Boas soluções resolvem a dor imediata e abrem espaço para produtos escaláveis de alta performance.",
      icon: Layers,
      accent: "text-purple-400"
    }
  ]

  return (
    <section className="py-24 sm:py-32 relative bg-[#020617] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="glow" className="mb-4">
            Por que a Vale Mind
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight leading-tight">
            Nossos <span className="text-gradient-primary">Diferenciais</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Uma abordagem técnica séria, orientada a engenharia de software e geração de valor de negócio duradouro.
          </p>
        </div>

        {/* 5 Differentials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {diffs.map((d, idx) => {
            const Icon = d.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all hover:-translate-y-1"
              >
                <div className={`p-3.5 rounded-2xl bg-slate-800/90 w-fit mb-6 ${d.accent}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold font-display text-white">
                  {d.title}
                </h3>

                <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                  {d.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
