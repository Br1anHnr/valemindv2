import React from "react"
import { motion } from "framer-motion"
import { TrendingUp, Award, Activity, Clock, Zap, ShieldCheck } from "lucide-react"

export function MetricsSection() {
  const metrics = [
    {
      value: "+340%",
      label: "Produtividade Operacional",
      description: "Aumento comprovado na velocidade de execução de fluxos analíticos e operacionais.",
      icon: TrendingUp,
      glow: "from-indigo-500/20 to-purple-500/5",
      accent: "text-indigo-400",
      border: "hover:border-indigo-500/50"
    },
    {
      value: "99.4%",
      label: "Acurácia Cognitiva",
      description: "Precisão em extração de dados, validação de regras de negócios e orquestração de ferramentas.",
      icon: Award,
      glow: "from-cyan-500/20 to-blue-500/5",
      accent: "text-cyan-400",
      border: "hover:border-cyan-500/50"
    },
    {
      value: "45M+",
      label: "Decisões Diárias",
      description: "Decisões e chamadas de agentes executadas por segundo com rastreabilidade criptográfica total.",
      icon: Activity,
      glow: "from-purple-500/20 to-pink-500/5",
      accent: "text-purple-400",
      border: "hover:border-purple-500/50"
    },
    {
      value: "48h",
      label: "Time-to-Production",
      description: "Implantação ágil com conectores nativos para ERPs, CRMs, bancos de dados SQL e APIs REST.",
      icon: Clock,
      glow: "from-emerald-500/20 to-teal-500/5",
      accent: "text-emerald-400",
      border: "hover:border-emerald-500/50"
    },
  ]

  return (
    <section className="py-16 relative border-y border-slate-800/80 bg-slate-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative group p-6 rounded-2xl bg-gradient-to-b ${metric.glow} border border-slate-800/80 transition-all duration-300 ${metric.border} hover:shadow-xl hover:shadow-indigo-950/40 hover:-translate-y-1`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 ${metric.accent}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500">
                    Métrica Validada
                  </span>
                </div>

                <div className={`text-4xl font-bold font-display tracking-tight text-white ${metric.accent}`}>
                  {metric.value}
                </div>

                <div className="text-base font-semibold text-slate-200 mt-1">
                  {metric.label}
                </div>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {metric.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
