import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Code2,
  Workflow,
  Headphones,
  ShoppingBag,
  Unplug,
  CheckCircle2,
  ArrowRight,
  Sparkles
} from "lucide-react"

interface HubSolutionsProps {
  onOpenBooking: () => void
  activeTabIndex?: number
  onTabChange?: (index: number) => void
}

export function HubSolutionsSection({ onOpenBooking, activeTabIndex, onTabChange }: HubSolutionsProps) {
  const [internalTab, setInternalTab] = useState(0)

  const activeTab = activeTabIndex !== undefined ? activeTabIndex : internalTab
  const handleTabSelect = (index: number) => {
    setInternalTab(index)
    onTabChange?.(index)
  }

  const solutions = [
    {
      id: "software",
      title: "Desenvolvimento de Software & Sistemas",
      shortTitle: "Software & Sistemas",
      icon: Code2,
      tag: "Engenharia Sob Medida",
      description: "Desenvolvemos sistemas empresariais, plataformas web e ferramentas operacionais sob medida para estruturas que exigem arquitetura proprietária e não comportam limitações de softwares genéricos.",
      bullets: [
        "Sistemas empresariais & ERPs customizados",
        "Dashboards e painéis de controle em tempo real",
        "Portais de clientes, fornecedores e parceiros",
        "Aplicações web escaláveis e ferramentas internas"
      ],
      highlight: "Projetado exclusivamente para a realidade e as regras da sua empresa."
    },
    {
      id: "automacao",
      title: "Automação de Processos & IA Aplicada",
      shortTitle: "Automação & IA",
      icon: Workflow,
      tag: "Eficiência & Zero Retrabalho",
      description: "Transformamos rotinas manuais e repetitivas em fluxos operacionais automatizados e contínuos. Integramos Inteligência Artificial de forma pragmática: como uma camada de engenharia aplicada que gera eficiência mensurável, velocidade e precisão para a operação.",
      bullets: [
        "Automação de fluxos operacionais e follow-ups comerciais",
        "Sincronização contínua de dados entre múltiplos sistemas",
        "Processamento e triagem estruturada de documentos e mensagens",
        "Disparo de notificações estratégicas e rotinas de backoffice"
      ],
      highlight: "Redução comprovada de tempo operacional e eliminação de falhas manuais."
    },
    {
      id: "atendimento-crm",
      title: "Estruturas de Atendimento Digital & CRM",
      shortTitle: "Atendimento & CRM",
      icon: Headphones,
      tag: "Relacionamento & Vendas",
      description: "Estruturamos centrais integradas de atendimento e gestão comercial via WhatsApp oficial, unificando triagem inteligente, atendimento humano e rastreabilidade total de oportunidades de negócio.",
      bullets: [
        "Integração oficial com API do WhatsApp (múltiplos operadores)",
        "Operação híbrida: triagem inteligente com transição humana fluida",
        "Funil de vendas visual com acompanhamento de pipeline",
        "Envio de orçamentos e agendamentos diretos no canal de conversa"
      ],
      highlight: "Atendimento veloz com governança e rastreabilidade de oportunidades."
    },
    {
      id: "ecommerce",
      title: "E-commerce e Plataformas de Venda",
      shortTitle: "E-commerce & Vendas",
      icon: ShoppingBag,
      tag: "Operação Viva de Venda",
      description: "Projetamos plataformas completas de venda e operação para varejo, atacado e supermercados, sincronizando estoques em tempo real, separação física (picking), logística de despacho e meios de pagamento.",
      bullets: [
        "Catálogo com gestão de estoque por filial em tempo real",
        "Carrinho inteligente, regras promocionais e checkout seguro",
        "Módulo operacional de separação (picking) e despacho de pedidos",
        "Roteirização de entregas e acompanhamento para clientes"
      ],
      highlight: "Sistemas robustos que sustentam a operação comercial de ponta a ponta."
    },
    {
      id: "integracoes",
      title: "Integrações de Sistemas & APIs",
      shortTitle: "Integrações",
      icon: Unplug,
      tag: "Fluxo de Dados Unificado",
      description: "Conectamos sistemas corporativos legados, ERPs de mercado, bancos de dados e APIs externas para garantir que as informações circulem de forma contínua, segura e sem duplicidade manual.",
      bullets: [
        "Conexão com ERPs consolidados (SAP, TOTVS, Sankhya, Senior, etc.)",
        "Integração com gateways de pagamento e serviços bancários",
        "Arquitetura de APIs seguras, webhooks e sincronização de dados",
        "Comunicação fluida entre ferramentas legadas e sistemas modernos"
      ],
      highlight: "Fim das planilhas desconectadas e da digitação manual duplicada."
    }
  ]

  const current = solutions[activeTab] || solutions[0]
  const CurrentIcon = current.icon

  return (
    <section id="hub-solucoes" className="py-20 sm:py-28 relative bg-[#090A0B]/90 backdrop-blur-sm border-t border-[#1D2025]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Positioning */}
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="default" className="mb-4">
            Tecnologia para Problemas Reais
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-tight">
            Não somos agência. Construímos a tecnologia que sua empresa precisa.
          </h2>

          <p className="mt-5 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            A <strong>Vale Mind</strong> desenvolve soluções digitais para melhorar operações empresariais. Entendemos seus processos, eliminamos gargalos e construímos sistemas que escalam com o seu negócio.
          </p>
        </div>

        {/* Minimalist Tabs Navigation */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 p-1.5 rounded-xl bg-[#111316] border border-[#1D2025] max-w-4xl mx-auto">
          {solutions.map((sol, index) => {
            const Icon = sol.icon
            const isSelected = activeTab === index
            return (
              <button
                key={sol.id}
                onClick={() => handleTabSelect(index)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? "bg-[#1D2025] text-[#F5F5F5] font-semibold border border-[#2D3139]"
                    : "text-[#A1A1AA] hover:text-[#F5F5F5] hover:bg-[#16181D]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isSelected ? "text-[#2563EB]" : "text-[#6B6F76]"}`} />
                <span>{sol.shortTitle}</span>
              </button>
            )
          })}
        </div>

        {/* Active Solution Display Card */}
        <div className="mt-6 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-10 rounded-2xl bg-[#111316] border border-[#1D2025]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Details */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#16181D] border border-[#1D2025] text-[#A1A1AA]">
                      {current.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5]">
                    {current.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {current.description}
                  </p>

                  <div className="space-y-2 pt-1">
                    {current.bullets.map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F5F5]">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5 text-[#2563EB]" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                    <Button
                      onClick={onOpenBooking}
                      variant="default"
                      size="default"
                      className="gap-2 text-xs sm:text-sm font-semibold bg-[#FFFFFF] text-[#090A0B] hover:bg-[#E5E5E5] rounded-lg"
                    >
                      <span>Conversar sobre este projeto</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Button>
                    <span className="text-xs font-mono text-[#6B6F76]">
                      * {current.highlight}
                    </span>
                  </div>
                </div>

                {/* Right Subtle Panel */}
                <div className="lg:col-span-5 p-5 rounded-xl bg-[#090A0B] border border-[#1D2025] space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-[#1D2025] text-[#A1A1AA]">
                    <div className="flex items-center gap-2">
                      <CurrentIcon className="w-4 h-4 text-[#2563EB]" />
                      <span className="text-[#F5F5F5] font-semibold">Vale Mind Engine</span>
                    </div>
                    <span className="text-[10px] text-[#6B6F76]">
                      Sob Medida
                    </span>
                  </div>

                  <p className="text-xs text-[#A1A1AA] leading-relaxed font-sans">
                    Não adaptamos sua empresa a um software rígido. Criamos a tecnologia exata que se molda à sua operação.
                  </p>

                  <div className="p-3 rounded-lg bg-[#111316] border border-[#1D2025] text-[11px] text-[#A1A1AA] flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 shrink-0 text-[#2563EB]" />
                    <span>Software + Automação + Integrações</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
