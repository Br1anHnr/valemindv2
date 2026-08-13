import React, { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Zap, Sparkles, Shield, ArrowRight, Star } from "lucide-react"

interface PricingProps {
  onOpenBooking: () => void
}

export function PricingSection({ onOpenBooking }: PricingProps) {
  const [isAnnual, setIsAnnual] = useState(true)

  const plans = [
    {
      name: "Starter Neural",
      badge: "Para Validação Rápida",
      description: "Ideal para empresas que desejam automatizar o primeiro fluxo crítico com agentes autônomos.",
      priceMonthly: 3490,
      priceAnnual: 2790,
      popular: false,
      features: [
        "Até 3 Agentes Autônomos em Produção",
        "RAG Neural com 500k Páginas Indexadas",
        "Até 50.000 chamadas de raciocínio/mês",
        "Integração via Webhooks & API REST",
        "Suporte técnico prioritário via Slack",
        "SLA de 99.5% de disponibilidade"
      ],
      buttonText: "Começar com Starter",
      buttonVariant: "outline" as const
    },
    {
      name: "Scale Business",
      badge: "Mais Escolhido • ROI Acelerado",
      description: "Para equipes em expansão que exigem múltiplos swarms, multimodalidade e governança completa.",
      priceMonthly: 7990,
      priceAnnual: 6390,
      popular: true,
      features: [
        "Até 12 Agentes Autônomos Orquestrados (Swarms)",
        "RAG Híbrido Multimodal com Re-ranking",
        "Agentes de Voz & Visão em Tempo Real",
        "Até 250.000 chamadas de raciocínio/mês",
        "Guardrails de Segurança & Mascaramento PII",
        "Conectores Nativos (Salesforce, SAP, Hubspot)",
        "Gerente de Conta & Engenheiro Dedicado",
        "SLA de 99.9% com suporte 24/7"
      ],
      buttonText: "Acelerar com Scale",
      buttonVariant: "glow" as const
    },
    {
      name: "Enterprise Custom",
      badge: "Soberania Total de Dados",
      description: "Para grandes corporações que exigem deploy On-Premise / VPC privada, fine-tuning e SOC2 auditado.",
      priceMonthly: 18900,
      priceAnnual: 15120,
      popular: false,
      isCustom: true,
      features: [
        "Agentes & Swarms Ilimitados",
        "Deploy On-Premise, AWS GovCloud ou GCP VPC",
        "Fine-tuning & LoRA de Modelos Proprietários",
        "Volumes Ilimitados de Processamento",
        "Contrato Customizado de SLA 99.99%",
        "Auditoria de Segurança SOC2 & Certificações",
        "Treinamento in-company de Engenharia Cognitiva"
      ],
      buttonText: "Falar com Arquiteto Enterprise",
      buttonVariant: "outline" as const
    }
  ]

  return (
    <section id="planos" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="glow" className="mb-4">
            Investimento Transparente
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Planos Dimensionados para a <span className="text-gradient-primary">Sua Escala</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Sem custos ocultos. Escolha o plano ideal e amplifique a produtividade da sua empresa hoje.
          </p>

          {/* Billing Switcher */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-full bg-slate-900/90 border border-slate-800 backdrop-blur-md">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                !isAnnual ? "bg-indigo-600 text-white shadow-md" : "text-slate-400 hover:text-white"
              }`}
            >
              Faturamento Mensal
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer ${
                isAnnual ? "bg-indigo-600 text-white shadow-md" : "text-slate-400 hover:text-white"
              }`}
            >
              <span>Faturamento Anual</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                -20% OFF
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => {
            const price = isAnnual ? plan.priceAnnual : plan.priceMonthly
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative rounded-3xl flex flex-col justify-between p-8 transition-all duration-300 ${
                  plan.popular
                    ? "bg-slate-900/95 border-2 border-indigo-500 shadow-2xl shadow-indigo-950/70 lg:-translate-y-2"
                    : "bg-slate-900/60 border border-slate-800 hover:border-slate-700"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white text-xs font-bold font-mono tracking-wide shadow-lg shadow-indigo-500/40 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    <span>MAIS POPULAR</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold font-display text-white">
                      {plan.name}
                    </h3>
                    <Badge variant={plan.popular ? "glow" : "outline"} className="text-[11px]">
                      {plan.badge}
                    </Badge>
                  </div>

                  <p className="text-xs text-slate-400 mt-2 min-h-[36px]">
                    {plan.description}
                  </p>

                  <div className="mt-6 pb-6 border-b border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-slate-400 font-mono">R$</span>
                      <span className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
                        {price.toLocaleString('pt-BR')}
                      </span>
                      <span className="text-xs text-slate-400 font-mono">/mês</span>
                    </div>
                    {isAnnual && (
                      <div className="text-[11px] text-emerald-400 font-mono mt-1">
                        Faturado anualmente com desconto de 20%
                      </div>
                    )}
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-6 space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      O que está incluído:
                    </div>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <div className="w-4 h-4 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800/80">
                  <Button
                    onClick={onOpenBooking}
                    variant={plan.buttonVariant}
                    size="lg"
                    className="w-full gap-2 font-bold justify-center"
                  >
                    <span>{plan.buttonText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
