import React, { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Compass,
  Code2,
  Unplug,
  Rocket,
  TrendingUp,
  ArrowRight,
  CheckCircle2
} from "lucide-react"

export function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      number: "01",
      name: "Entender",
      headline: "Conhecemos a empresa e identificamos o problema.",
      description: "Mapeamos a rotina operacional, ouvimos os envolvidos e identificamos onde o tempo e o dinheiro estão sendo desperdiçados antes de qualquer decisão técnica.",
      icon: Search,
      deliverables: ["Diagnóstico de gargalos operacionais", "Mapeamento de rotinas e processos", "Definição clara do problema a resolver"]
    },
    {
      number: "02",
      name: "Projetar",
      headline: "Definimos a solução e sua arquitetura.",
      description: "Planejamos como o software, as automações e as integrações devem funcionar em conjunto para resolver a dor com máxima eficiência e segurança.",
      icon: Compass,
      deliverables: ["Arquitetura de sistemas e dados", "Wireframes e fluxos de usuário", "Plano de integrações com ferramentas atuais"]
    },
    {
      number: "03",
      name: "Desenvolver",
      headline: "Construímos a tecnologia.",
      description: "Nossa equipe técnica escreve o código, desenvolve os módulos e constrói a infraestrutura com padrões modernos de engenharia e escalabilidade.",
      icon: Code2,
      deliverables: ["Desenvolvimento com código limpo", "Testes de validação e segurança", "Ambientes de homologação e validação"]
    },
    {
      number: "04",
      name: "Integrar",
      headline: "Conectamos sistemas, dados e processos.",
      description: "Ligamos a nova tecnologia ao seu ERP, CRM, WhatsApp, bancos de dados e ferramentas existentes para que os dados circulem sem intervenção manual.",
      icon: Unplug,
      deliverables: ["Conectores de APIs e Webhooks", "Sincronização bidirecional de dados", "Testes de integridade em tempo real"]
    },
    {
      number: "05",
      name: "Operar",
      headline: "Colocamos a solução no ambiente real.",
      description: "Implantamos a tecnologia na operação do dia a dia, acompanhamos o uso real pelos colaboradores e ajustamos qualquer detalhe operacional.",
      icon: Rocket,
      deliverables: ["Deploy em produção monitorada", "Treinamento da equipe operacional", "Suporte e acompanhamento intensivo"]
    },
    {
      number: "06",
      name: "Evoluir",
      headline: "Continuamos melhorando conforme a operação cresce.",
      description: "Não entregamos um projeto e sumimos. Acompanhamos métricas, sugerimos melhorias e desenvolvemos novas funcionalidades para sustentar o crescimento.",
      icon: TrendingUp,
      deliverables: ["Análise contínua de métricas", "Novas automações e melhorias", "Parceria tecnológica de longo prazo"]
    }
  ]

  return (
    <section id="metodologia" className="py-24 sm:py-32 relative bg-[#020617] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="glow" className="mb-4">
            Metodologia Vale Mind
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight leading-tight">
            Como <span className="text-gradient-primary">Trabalhamos</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Um processo estruturado de engenharia que garante previsibilidade, foco no resultado e tecnologia verdadeiramente útil.
          </p>
        </div>

        {/* Steps Flow Matrix */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/40 transition-all hover:bg-slate-900/90 group"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    ETAPA {step.number}
                  </span>
                  <div className="p-3 rounded-2xl bg-slate-800 text-slate-300 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-display text-white">
                  {step.name}
                </h3>

                <div className="text-xs sm:text-sm font-semibold text-indigo-300 mt-1">
                  {step.headline}
                </div>

                <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
                  {step.description}
                </p>

                <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-2">
                  {step.deliverables.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
