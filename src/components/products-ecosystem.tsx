import React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Layers, Sparkles, Cpu, Zap, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react"

export function ProductsEcosystemSection() {
  const products = [
    {
      name: "Vale Retail OS",
      type: "Plataforma para Varejo & Supermercados",
      desc: "Ecossistema integrado de e-commerce, picking para separadores, controle de rotas de entrega e sincronização de frente de caixa.",
      status: "Em Produção"
    },
    {
      name: "Vale Flow Sync",
      type: "Motor de Automação & Conectores",
      desc: "Hub de integração e orquestração de APIs, webhooks e sincronização contínua de bancos de dados legados com ferramentas modernas.",
      status: "Ativo"
    },
    {
      name: "Vale Desk Core",
      type: "Central de Atendimento Digital & WhatsApp",
      desc: "Estrutura multiatendente com triagem inteligente, gestão de orçamentos e distribuição unificada de oportunidades de vendas.",
      status: "Ativo"
    }
  ]

  return (
    <section className="py-24 sm:py-32 relative bg-[#020617] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="glow" className="mb-4">
            Ecossistema Proprietário
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight leading-tight">
            Construímos soluções.{" "}
            <span className="text-gradient-primary">Transformamos as melhores em produtos.</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Desenvolver projetos sob medida nos permite identificar problemas que se repetem em diferentes empresas. Quando encontramos uma solução com alto potencial de escala, a transformamos em tecnologia própria da Vale Mind.
          </p>
        </div>

        {/* Products Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((prod, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/40 transition-all hover:bg-slate-900/90 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-2xl bg-slate-800 text-cyan-400">
                    <Layers className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono">
                    {prod.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-display text-white mt-2">
                  {prod.name}
                </h3>

                <div className="text-xs font-mono text-indigo-400 mt-1">
                  {prod.type}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 mt-4 leading-relaxed">
                  {prod.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Tecnologia Própria Vale Mind</span>
                <Sparkles className="w-4 h-4 text-cyan-400" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
