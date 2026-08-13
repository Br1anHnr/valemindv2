import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Code2,
  Workflow,
  Headphones,
  LineChart,
  ShoppingBag,
  Unplug,
  Layers,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Sparkles
} from "lucide-react"

interface SolutionsGridProps {
  onOpenBooking: () => void
}

export function SolutionsGrid({ onOpenBooking }: SolutionsGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all")

  const solutions = [
    {
      id: "software",
      title: "Desenvolvimento de Software",
      category: "engenharia",
      icon: Code2,
      tag: "Sistemas Sob Medida",
      description: "Criamos sistemas, plataformas e aplicações sob medida para operações que não podem depender apenas de ferramentas prontas.",
      capabilities: [
        "Sistemas empresariais & ERPs",
        "Aplicações web de alta performance",
        "Plataformas administrativas",
        "Dashboards e painéis de controle",
        "Portais de clientes e parceiros",
        "Ferramentas operacionais internas",
        "Sistemas comerciais customizados",
        "Plataformas personalizadas escaláveis"
      ],
      accent: "text-blue-400",
      gradient: "from-blue-500/15 via-slate-900/80 to-slate-950",
      border: "border-blue-500/30"
    },
    {
      id: "automacao",
      title: "Automação de Processos",
      category: "automacao",
      icon: Workflow,
      tag: "Eficiência & Zero Erros",
      description: "Transformamos processos repetitivos e manuais em fluxos automatizados inteligentes e confiáveis.",
      capabilities: [
        "Automação de atendimento & triagem",
        "Fluxos e funis comerciais",
        "Follow-ups automatizados",
        "Agendamentos inteligentes",
        "Comunicação multicanal",
        "Sincronização & atualização de dados",
        "Notificações e alertas em tempo real",
        "Processos administrativos & backoffice"
      ],
      accent: "text-cyan-400",
      gradient: "from-cyan-500/15 via-slate-900/80 to-slate-950",
      border: "border-cyan-500/30"
    },
    {
      id: "atendimento",
      title: "Atendimento Digital",
      category: "atendimento",
      icon: Headphones,
      tag: "Estruturas Completas",
      description: "Desenvolvemos estruturas completas de atendimento digital integrando múltiplos canais e tecnologia aplicada.",
      capabilities: [
        "Integração oficial WhatsApp API",
        "Híbrido: Automação + Atendimento Humano",
        "Histórico unificado de clientes",
        "Catálogo de produtos & orçamentos",
        "Agendamento direto na conversa",
        "Qualificação e roteamento de leads",
        "Follow-up de oportunidades abertas",
        "Inteligência Artificial quando agrega valor real"
      ],
      accent: "text-emerald-400",
      gradient: "from-emerald-500/15 via-slate-900/80 to-slate-950",
      border: "border-emerald-500/30"
    },
    {
      id: "crm",
      title: "CRM e Gestão Comercial",
      category: "comercial",
      icon: LineChart,
      tag: "Controle & Conversão",
      description: "Criamos tecnologia para organizar o relacionamento, oportunidades e processos comerciais da sua equipe.",
      capabilities: [
        "Gestão centralizada de clientes e leads",
        "Funil comercial visual e customizável",
        "Linha do tempo e histórico de contatos",
        "Gestão de tarefas e compromissos da equipe",
        "Agenda integrada e lembretes automáticos",
        "Indicadores de performance de vendas (KPIs)",
        "Disparo de mensagens via WhatsApp integrado",
        "Relatórios executivos e projeções"
      ],
      accent: "text-purple-400",
      gradient: "from-purple-500/15 via-slate-900/80 to-slate-950",
      border: "border-purple-500/30"
    },
    {
      id: "ecommerce",
      title: "E-commerce e Plataformas de Venda",
      category: "vendas",
      icon: ShoppingBag,
      tag: "Sistemas de Operação & Venda",
      description: "Criamos plataformas de venda completas que fazem parte da operação viva da empresa — não apenas sites simples.",
      capabilities: [
        "Catálogo estruturado com variações e estoque",
        "Carrinho inteligente e checkout otimizado",
        "Gateways de pagamento (Pix, Cartão, Boleto)",
        "Gestão de pedidos, separação e entregas",
        "Regras avançadas de cupons e promoções",
        "Painel administrativo completo de operação",
        "Pós-venda e rastreamento automatizado",
        "Integração direta com ERPs e logística física"
      ],
      accent: "text-indigo-400",
      gradient: "from-indigo-500/15 via-slate-900/80 to-slate-950",
      border: "border-indigo-500/30"
    },
    {
      id: "integracoes",
      title: "Integrações de Sistemas",
      category: "engenharia",
      icon: Unplug,
      tag: "Dados Circulando",
      description: "Conectamos sistemas para fazer informações circularem automaticamente entre todas as pontas da empresa.",
      capabilities: [
        "APIs RESTful, GraphQL e Webhooks",
        "Bancos de dados SQL e NoSQL",
        "Conexão com ERPs de mercado e legados",
        "Integração de pagamentos e faturamento",
        "Sincronização com CRMs e plataformas de vendas",
        "Integração com calendários e agendas corporativas",
        "Serviços externos e ferramentas SaaS",
        "Arquitetura de dados unificada e segura"
      ],
      accent: "text-sky-400",
      gradient: "from-sky-500/15 via-slate-900/80 to-slate-950",
      border: "border-sky-500/30"
    },
    {
      id: "produtos",
      title: "Produtos Digitais Próprios",
      category: "produtos",
      icon: Layers,
      tag: "Ecossistema Escalável",
      description: "Além de projetos sob medida, transformamos soluções de alto impacto em produtos escaláveis da Vale Mind.",
      capabilities: [
        "Identificação de dores universais em operações",
        "Construção de módulos reutilizáveis",
        "Plataformas SaaS verticais para setores específicos",
        "Evolução contínua orientada a feedback",
        "Arquitetura modular de rápida implantação",
        "Tecnologia 100% sob nosso domínio e governança"
      ],
      accent: "text-pink-400",
      gradient: "from-pink-500/15 via-slate-900/80 to-slate-950",
      border: "border-pink-500/30"
    }
  ]

  return (
    <section id="solucoes" className="py-24 sm:py-32 relative bg-[#020617] border-t border-slate-800/80">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-blue-600/10 via-cyan-500/10 to-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="glow" className="mb-4">
            Áreas de Atuação
          </Badge>

          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight leading-tight">
            Nossas <span className="text-gradient-primary">Soluções</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Não vendemos pacotes prontos. Desenvolvemos a tecnologia exata que sua operação precisa para eliminar gargalos e crescer.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, index) => {
            const Icon = sol.icon
            return (
              <motion.div
                key={sol.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-8 rounded-3xl bg-gradient-to-b ${sol.gradient} border ${sol.border} flex flex-col justify-between hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-950/40`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 ${sol.accent}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-slate-900/80 border border-slate-800 text-slate-300">
                      {sol.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    {sol.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {sol.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-slate-800/80 space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-3 font-semibold">
                      O que desenvolvemos:
                    </div>
                    {sol.capabilities.map((cap, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${sol.accent}`} />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800/80">
                  <button
                    onClick={onOpenBooking}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-xs sm:text-sm font-semibold text-slate-200 border border-slate-700/80 hover:text-white transition-all cursor-pointer"
                  >
                    <span>Conversar sobre este projeto</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
