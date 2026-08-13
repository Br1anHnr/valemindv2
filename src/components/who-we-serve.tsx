import React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Building, TrendingUp, Users, Workflow, HelpCircle } from "lucide-react"

export function WhoWeServeSection() {
  const profiles = [
    "Empresas com processos manuais e retrabalho constante",
    "Operações que utilizam ferramentas desconectadas e planilhas",
    "Equipes com tarefas repetitivas que tomam tempo valioso",
    "Negócios que precisam organizar o atendimento ao cliente",
    "Empresas que precisam estruturar e acelerar vendas",
    "Operações em crescimento que não encontram soluções prontas no mercado",
    "Empresas que precisam de sistemas e integrações específicas"
  ]

  return (
    <section className="py-24 sm:py-32 relative bg-[#030712] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description */}
          <div className="lg:col-span-5 space-y-6">
            <Badge variant="glow">
              Perfil de Empresas
            </Badge>

            <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight leading-tight">
              Quem a Vale Mind <span className="text-gradient-primary">Atende</span>
            </h2>

            <p className="text-base text-slate-300 leading-relaxed">
              Não limitamos nossa atuação a um nicho fechado. Trabalhamos com empresas de diferentes setores que compartilham um desafio em comum: a necessidade de destravar a operação com tecnologia sob medida.
            </p>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 text-sm text-slate-400">
              Se sua empresa tem complexidade operacional e precisa de mais velocidade, nós temos a capacidade técnica para projetar e construir a solução.
            </div>
          </div>

          {/* Right Checklist Grid */}
          <div className="lg:col-span-7 space-y-3">
            {profiles.map((profile, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 hover:border-indigo-500/30 flex items-center gap-4 transition-all"
              >
                <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-200">
                  {profile}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
