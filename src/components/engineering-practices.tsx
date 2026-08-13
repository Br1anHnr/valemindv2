import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ArrowRight } from "lucide-react"

export function EngineeringPracticesSection() {
  const [activeProject, setActiveProject] = useState(0)

  const steps = [
    { num: "01", name: "Entender", desc: "Identificamos a dor e mapeamos a rotina." },
    { num: "02", name: "Projetar", desc: "Definimos a solução e a arquitetura." },
    { num: "03", name: "Desenvolver", desc: "Construímos o software com código limpo." },
    { num: "04", name: "Integrar", desc: "Conectamos ERPs, bancos de dados e APIs." },
    { num: "05", name: "Operar", desc: "Implantamos em produção com acompanhamento." },
    { num: "06", name: "Evoluir", desc: "Aprimoramos conforme sua empresa cresce." },
  ]

  const projects = [
    {
      id: "supermercado",
      title: "Plataforma E-commerce & Logística para Supermercados",
      category: "Varejo & Operação Física",
      tagline: "Vendas online integradas à separação em loja e despacho de entregas.",
      metrics: [
        { label: "Tempo de separação", val: "-45%" },
        { label: "Precisão de estoque", val: "99.8%" },
        { label: "Novos pedidos/dia", val: "+320%" }
      ],
      points: [
        "Catálogo com milhares de SKUs sincronizados com PDV",
        "App exclusivo de picking para operadores de loja",
        "Roteirização automática de entregas por bairros",
        "Checkout veloz com Pix, Cartão e carteiras digitais"
      ]
    },
    {
      id: "erp",
      title: "Sistema Administrativo & ERP Customizado",
      category: "Sistemas & Backoffice",
      tagline: "Gestão financeira, compras e contratos centralizados sem planilhas.",
      metrics: [
        { label: "Digitação manual", val: "-30h/mês" },
        { label: "Erros de conciliação", val: "0%" },
        { label: "Visibilidade em tempo real", val: "100%" }
      ],
      points: [
        "Dashboard financeiro com fluxo de caixa projetado",
        "Módulo de compras com alçadas de aprovação",
        "Conciliação bancária automática com extrato OFX",
        "Emissão de relatórios e indicadores por centro de custo"
      ]
    },
    {
      id: "atendimento",
      title: "Central de Atendimento Digital & CRM",
      category: "Atendimento & Vendas",
      tagline: "WhatsApp oficial com multiatendentes, triagem e funil comercial.",
      metrics: [
        { label: "1ª resposta", val: "< 15s" },
        { label: "Capacidade de atendimento", val: "4x maior" },
        { label: "Satisfação dos clientes", val: "4.9 / 5" }
      ],
      points: [
        "Vários atendentes em um único número oficial de WhatsApp",
        "Triagem automática com gravação no histórico do CRM",
        "Envio de orçamentos e agendamentos instantâneos",
        "Painel ao vivo com métricas de fila e produtividade"
      ]
    }
  ]

  const currentProj = projects[activeProject]

  return (
    <section id="metodologia" className="py-20 sm:py-28 relative bg-[#0F1012]/90 backdrop-blur-sm border-t border-[#1D2025]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="default" className="mb-4">
            Da Concepção à Prática
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-tight">
            Como Trabalhamos & O Que Entregamos
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            Uma esteira de engenharia rigorosa que transforma diagnósticos em produtos tecnológicos reais.
          </p>
        </div>

        {/* 6 Step Method Bar */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-[#111316] border border-[#1D2025] text-left flex flex-col justify-between hover:border-[#2D3139] transition-colors"
            >
              <div className="text-xs font-mono font-semibold text-[#A1A1AA]">
                {step.num}
              </div>
              <div className="text-sm font-semibold text-[#F5F5F5] mt-1">
                {step.name}
              </div>
              <p className="text-[11px] text-[#6B6F76] mt-1 leading-snug">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Projects Showcase Tabs & Visual */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {projects.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => setActiveProject(idx)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                  activeProject === idx
                    ? "bg-[#1D2025] text-[#F5F5F5] font-semibold border border-[#2D3139]"
                    : "bg-[#111316] text-[#A1A1AA] hover:text-[#F5F5F5] border border-[#1D2025]"
                }`}
              >
                {p.title.split(" ")[0]} {p.title.split(" ")[1]} {p.title.split(" ")[2]}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="p-6 sm:p-10 rounded-2xl bg-[#111316] border border-[#1D2025]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Description */}
                <div className="lg:col-span-6 space-y-4">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#090A0B] border border-[#1D2025] text-[#A1A1AA]">
                    {currentProj.category}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5]">
                    {currentProj.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A1A1AA]">
                    {currentProj.tagline}
                  </p>

                  <div className="grid grid-cols-3 gap-2 pt-2">
                    {currentProj.metrics.map((m, i) => (
                      <div key={i} className="p-3 rounded-lg bg-[#090A0B] border border-[#1D2025] text-center">
                        <div className="text-base sm:text-xl font-bold text-[#F5F5F5]">
                          {m.val}
                        </div>
                        <div className="text-[10px] text-[#6B6F76] font-mono mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 pt-2">
                    {currentProj.points.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#F5F5F5]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB] shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Mockup Screen */}
                <div className="lg:col-span-6 rounded-xl bg-[#090A0B] border border-[#1D2025] p-4 font-mono text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-[#1D2025] mb-3 text-[11px] text-[#6B6F76]">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#2D3139]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#2D3139]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#2D3139]" />
                    </div>
                    <span>app.valemind.com.br/{currentProj.id}</span>
                    <span className="text-[#A1A1AA]">Online</span>
                  </div>

                  <div className="p-4 rounded-lg bg-[#111316] border border-[#1D2025] space-y-3 font-sans">
                    <div className="flex justify-between items-center text-[#F5F5F5]">
                      <span className="font-semibold text-sm">{currentProj.title.split(" ")[0]} Engine</span>
                      <span className="text-[10px] font-mono bg-[#16181D] border border-[#1D2025] text-[#A1A1AA] px-2 py-0.5 rounded">
                        Produção Ativa
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="p-2.5 rounded bg-[#090A0B] border border-[#1D2025]">
                        <div className="text-[#6B6F76] text-[10px] uppercase">Gargalos Eliminados</div>
                        <div className="text-[#F5F5F5] font-semibold text-sm mt-0.5">100% dos Fluxos</div>
                      </div>
                      <div className="p-2.5 rounded bg-[#090A0B] border border-[#1D2025]">
                        <div className="text-[#6B6F76] text-[10px] uppercase">Integrações Ativas</div>
                        <div className="text-[#F5F5F5] font-semibold text-sm mt-0.5">ERPs & WhatsApp</div>
                      </div>
                    </div>
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
