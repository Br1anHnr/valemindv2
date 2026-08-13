import React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, CheckCircle, Building2 } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rodrigo Mendonça",
      role: "CTO & Co-founder",
      company: "FinTech Quantum",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      content: "A Vale Mind transformou nosso pipeline de conciliação e análise de crédito. Reduzimos o tempo de processamento de 4 horas para 12 segundos com 99.9% de precisão auditável.",
      stats: "92% de redução no tempo de análise"
    },
    {
      name: "Camila Guimarães",
      role: "Head de Operações & IA",
      company: "Logix Supply Global",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
      content: "Integrar os agentes de voz e visão multimodal da Vale Mind foi um divisor de águas na nossa triagem de documentos alfandegários. A interface 3D e os dashboards em tempo real dão controle total.",
      stats: "+R$ 1.8M economizados em 6 meses"
    },
    {
      name: "Lucas Alencar",
      role: "VP de Engenharia",
      company: "HealthNova Tech",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      content: "A governança e os guardrails da Vale Mind nos permitiram passar por auditorias de segurança hospitalar sem nenhum apontamento crítico. Agentes cognitivos de verdade.",
      stats: "Zero falhas de conformidade SOC-2"
    }
  ]

  const logos = [
    "OmniGlobal AI", "NovaFin Corp", "Atlas Health", "Apex Logistics", "Vanguard Cloud"
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logos Marquee */}
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6">
            Confiado por líderes de tecnologia e operações escaláveis
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60">
            {logos.map((logo, index) => (
              <div key={index} className="flex items-center gap-2 text-slate-400 font-display font-bold text-lg sm:text-xl">
                <Building2 className="w-5 h-5 text-indigo-400" />
                <span>{logo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="glow" className="mb-4">
            Resultados Comprovados
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            O que Dizem os Líderes que <span className="text-gradient-primary">Escalaram com a Vale Mind</span>
          </h2>
        </div>

        {/* Testimonials Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="p-8 rounded-3xl bg-slate-900/70 border border-slate-800/80 flex flex-col justify-between relative group hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-950/40 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed italic">
                  "{t.content}"
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-800/80">
                <div className="flex items-center gap-3">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/40"
                  />
                  <div>
                    <div className="text-sm font-bold text-white font-display">
                      {t.name}
                    </div>
                    <div className="text-xs text-slate-400">
                      {t.role} • <span className="text-cyan-400">{t.company}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 px-3 py-1.5 rounded-lg bg-indigo-950/50 border border-indigo-500/20 text-xs font-mono text-indigo-300 flex items-center gap-1.5">
                  <CheckCircle className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{t.stats}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
