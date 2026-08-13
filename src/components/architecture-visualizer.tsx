import React, { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Database, Cpu, ArrowRight, ShieldCheck, Zap, Server, CheckCircle2, RefreshCw } from "lucide-react"

export function ArchitectureVisualizer() {
  const [selectedStep, setSelectedStep] = useState(1)

  const steps = [
    {
      step: "01",
      title: "Ingestão & Percepção",
      subtitle: "Multi-fonte & Multimodal",
      icon: Server,
      details: "Recebimento contínuo de dados de APIs, bancos SQL/NoSQL, webhooks, documentos PDF, planilhas e fluxos de voz com validação de esquema em tempo real.",
      tech: ["WebSocket Streaming", "OCR Neural", "Embeddings v3"]
    },
    {
      step: "02",
      title: "Memória & RAG Híbrido",
      subtitle: "Recuperação de Contexto",
      icon: Database,
      details: "Busca vetorial de alta dimensionalidade combinada com BM25 esparso e Re-Ranking neural para injetar apenas as informações 100% relevantes.",
      tech: ["Qdrant / pgvector", "Cohere Re-Rank", "Janela de 2M Tokens"]
    },
    {
      step: "03",
      title: "Núcleo de Raciocínio (CoT)",
      subtitle: "Orquestração & Planejamento",
      icon: Cpu,
      details: "Quebra de metas em subtarefas atômicas, seleção dinâmica de ferramentas, raciocínio em cadeia (Tree of Thoughts) e reflexão crítica antes da ação.",
      tech: ["Claude 3.7 Sonnet", "DeepSeek R1 / GPT-4.5", "Swarm Coordinator"]
    },
    {
      step: "04",
      title: "Execução Segura & Auditoria",
      subtitle: "Ações com Guardrails",
      icon: ShieldCheck,
      details: "Chamada de APIs transacionais, atualização de bancos de dados, disparo de e-mails/notificações e gravação de logs imutáveis para conformidade SOC2.",
      tech: ["PII Redaction", "Human-in-the-Loop", "OpenTelemetry Traces"]
    }
  ]

  return (
    <section id="arquitetura" className="py-24 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="glow" className="mb-4">
            Pipeline de Engenharia
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Como a <span className="text-gradient-primary">Vale Mind</span> Processa e Age
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Uma arquitetura resiliente projetada para tolerância a falhas, baixa latência e observabilidade total de ponta a ponta.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, index) => {
            const Icon = item.icon
            const isSelected = selectedStep === index
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedStep(index)}
                className={`relative p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? "bg-slate-900/90 border-2 border-indigo-500 shadow-2xl shadow-indigo-950/60 scale-[1.03]"
                    : "bg-slate-900/50 border border-slate-800 hover:border-slate-700 hover:bg-slate-900/70"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-indigo-400">
                    ETAPA {item.step}
                  </span>
                  <div className={`p-2 rounded-xl ${isSelected ? "bg-indigo-600 text-white" : "bg-slate-800 text-slate-400"}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-bold font-display text-white">
                  {item.title}
                </h3>
                <div className="text-xs font-medium text-cyan-400 mt-0.5">
                  {item.subtitle}
                </div>

                <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                  {item.details}
                </p>

                <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {item.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded-md bg-slate-800/80 text-[10px] font-mono text-slate-300 border border-slate-700/60"
                    >
                      {t}
                    </span>
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
