import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
  Monitor,
  Smartphone,
  Layers,
  ShoppingBag,
  Building2,
  Headphones,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Workflow,
  Sparkles
} from "lucide-react"

export function ProjectsShowcase() {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      id: "supermercado-ecommerce",
      title: "Plataforma E-commerce & Logística para Supermercados",
      category: "E-commerce & Operação de Varejo",
      headline: "Sistema completo de vendas online integrado à separação e entrega física.",
      description: "Desenvolvimento de plataforma de e-commerce personalizada para rede de supermercados, com sincronização de estoque por filial em tempo real, aplicativo para operadores de separação (picking) e despacho com roteirização de entregas.",
      metrics: [
        { label: "Tempo de separação", value: "-45%" },
        { label: "Precisão de estoque", value: "99.8%" },
        { label: "Novos pedidos diários", value: "+320%" }
      ],
      features: [
        "Catálogo com mais de 15.000 SKUs e controle por peso/unidade",
        "Roteirização e aplicativo dedicado para motoristas e entregadores",
        "Painel de separação em tempo real com leitor de código de barras",
        "Integração nativa com ERP de frente de caixa e checkout Pix/Cartão"
      ],
      mockupType: "ecommerce"
    },
    {
      id: "erp-operacional",
      title: "Sistema Administrativo & ERP Customizado",
      category: "Sistemas Empresariais & Backoffice",
      headline: "Gestão operacional e financeira unificada sem depender de planilhas soltas.",
      description: "Plataforma web empresarial desenvolvida para centralizar a emissão de ordens de serviço, controle financeiro, conciliação bancária automática e relatórios de lucratividade por projeto.",
      metrics: [
        { label: "Horas de digitação manual", value: "-30h/mês" },
        { label: "Erros de conciliação", value: "0%" },
        { label: "Visibilidade em tempo real", value: "100%" }
      ],
      features: [
        "Dashboard financeiro interativo com fluxo de caixa projetado",
        "Módulo de compras com aprovações hierárquicas e alçadas",
        "Controle de contratos com reajustes e alertas automáticos",
        "Exportação de dados para contabilidade com conciliação bancária"
      ],
      mockupType: "erp"
    },
    {
      id: "atendimento-omnichannel",
      title: "Central de Atendimento Digital & CRM",
      category: "Atendimento & Automação Comercial",
      headline: "Estrutura inteligente de WhatsApp multiatendente com triagem e CRM.",
      description: "Construção de uma central de atendimento com número único de WhatsApp, triagem automatizada de solicitações, distribuição por setor da empresa e registro automático de oportunidades no funil comercial.",
      metrics: [
        { label: "Tempo de 1ª resposta", value: "< 15 seg" },
        { label: "Capacidade de atendimento", value: "4x maior" },
        { label: "Satisfação do cliente", value: "4.9 / 5" }
      ],
      features: [
        "Múltiplos atendentes humanos em uma única conta oficial",
        "Qualificação automática com gravação de histórico de compras",
        "Agendamento de visitas e envio de orçamentos com PDF dinâmico",
        "Painel de supervisão ao vivo com métricas de tempo de resposta"
      ],
      mockupType: "crm"
    }
  ]

  const current = projects[activeProject]

  return (
    <section id="projetos" className="py-24 sm:py-32 relative bg-[#020617] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="glow" className="mb-4">
            Casos de Aplicação Real
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight leading-tight">
            Tecnologia aplicada a <span className="text-gradient-primary">operações reais</span>.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Veja exemplos de como nossos sistemas e automações transformam o dia a dia de negócios em diferentes segmentos.
          </p>
        </div>

        {/* Project Selector Tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {projects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setActiveProject(idx)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeProject === idx
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-105"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {proj.title.split(" ")[0]} {proj.title.split(" ")[1]} {proj.title.split(" ")[2]}
            </button>
          ))}
        </div>

        {/* Project Interactive Card Showcase */}
        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-xl shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Details */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-mono">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{current.category}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                    {current.title}
                  </h3>

                  <p className="text-base font-semibold text-cyan-300">
                    {current.headline}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {current.description}
                  </p>

                  {/* Metrics Row */}
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    {current.metrics.map((m, i) => (
                      <div key={i} className="p-3.5 rounded-2xl bg-slate-950/80 border border-slate-800 text-center">
                        <div className="text-lg sm:text-2xl font-bold font-display text-indigo-400">
                          {m.value}
                        </div>
                        <div className="text-[10px] sm:text-xs text-slate-400 font-mono mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Capabilities */}
                  <div className="space-y-2 pt-2">
                    {current.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Interactive Mockup */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl bg-[#030712] border border-slate-700/80 p-4 shadow-2xl">
                    {/* Browser/Window Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
                      <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                      </div>
                      <div className="text-[11px] font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
                        https://app.valemind.com.br/{current.id}
                      </div>
                      <div className="w-12"></div>
                    </div>

                    {/* Mockup Screen Inside */}
                    <div className="rounded-xl bg-slate-900/90 p-5 space-y-4 font-mono text-xs text-slate-300 border border-slate-800">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                          <span className="font-bold text-white text-sm">{current.title.split(" ")[0]} Hub</span>
                        </div>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300">
                          PRODUÇÃO • ONLINE
                        </span>
                      </div>

                      {/* Mockup Data Grid */}
                      <div className="grid grid-cols-2 gap-3">
                        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                          <div className="text-[10px] text-slate-400 uppercase">Processamento</div>
                          <div className="text-lg font-bold text-cyan-400 font-display mt-1">Tempo Real</div>
                          <div className="text-[10px] text-slate-500 mt-1">Sincronização 100% ativa</div>
                        </div>
                        <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                          <div className="text-[10px] text-slate-400 uppercase">Status do Fluxo</div>
                          <div className="text-lg font-bold text-emerald-400 font-display mt-1">Otimizado</div>
                          <div className="text-[10px] text-slate-500 mt-1">0 gargalos detectados</div>
                        </div>
                      </div>

                      {/* Activity Log preview */}
                      <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1.5 text-[11px]">
                        <div className="text-slate-400 font-bold mb-1">Últimas Ações Operacionais:</div>
                        <div className="text-slate-300 flex items-center justify-between">
                          <span>✓ Pedido #8492 aprovado & despachado</span>
                          <span className="text-slate-500">12s atrás</span>
                        </div>
                        <div className="text-slate-300 flex items-center justify-between">
                          <span>✓ Conciliação de estoque filial B concluída</span>
                          <span className="text-slate-500">45s atrás</span>
                        </div>
                        <div className="text-slate-300 flex items-center justify-between">
                          <span>✓ Atendimento WhatsApp transferido para operador</span>
                          <span className="text-slate-500">2m atrás</span>
                        </div>
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
