import React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Search, Code2, TrendingUp, CheckCircle2, ShieldCheck, Zap } from "lucide-react"

export function AboutSection() {
  const pillars = [
    {
      step: "01",
      title: "Entendimento do Problema",
      desc: "Analisamos detalhadamente seus fluxos, rotinas e gargalos antes de escrever qualquer linha de código.",
      icon: Search,
      accent: "text-blue-400"
    },
    {
      step: "02",
      title: "Construção Sob Medida",
      desc: "Desenvolvemos tecnologia proprietária e sistemas dedicados à realidade exata do seu negócio.",
      icon: Code2,
      accent: "text-cyan-400"
    },
    {
      step: "03",
      title: "Evolução da Operação",
      desc: "Acompanhamos a implantação e aprimoramos a tecnologia continuamente conforme sua empresa cresce.",
      icon: TrendingUp,
      accent: "text-purple-400"
    }
  ]

  return (
    <section id="sobre" className="py-24 sm:py-32 relative bg-[#020617] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="glow" className="mb-4">
            Sobre a Vale Mind
          </Badge>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display text-white tracking-tight leading-tight">
            Tecnologia construída para{" "}
            <span className="text-gradient-primary">problemas reais</span>.
          </h2>

          <p className="mt-8 text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
            A <strong>Vale Mind</strong> é uma empresa de tecnologia que desenvolve soluções digitais para melhorar operações empresariais.
          </p>

          <p className="mt-4 text-sm sm:text-lg text-slate-400 leading-relaxed font-normal">
            Entendemos os processos do cliente, identificamos gargalos e desenvolvemos sistemas, plataformas, automações e integrações capazes de transformar a forma como a empresa trabalha.
          </p>

          <div className="mt-8 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 text-sm sm:text-base text-cyan-300 font-medium">
            "Queremos ser parceiros tecnológicos das empresas que atendemos, participando desde o entendimento do problema até o desenvolvimento, implantação e evolução da solução."
          </div>
        </div>

        {/* 3 Value Pillars */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pillars.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-8 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-slate-500">
                    FASE {item.step}
                  </span>
                  <div className={`p-3 rounded-2xl bg-slate-800/80 ${item.accent}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-xl font-bold font-display text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
