import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bot, Database, Mic, ShieldAlert, Cpu, Check, ArrowRight, Zap, Terminal, Sparkles, Network } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface SolutionsProps {
  onOpenBooking: () => void
}

export function SolutionsSection({ onOpenBooking }: SolutionsProps) {
  const [activeTab, setActiveTab] = useState(0)

  const solutions = [
    {
      id: "autonomous-agents",
      title: "Agentes Autônomos Multi-Agente",
      badge: "Orquestração Swarm",
      icon: Bot,
      shortDesc: "Equipes digitais autônomas que planejam, delegam, executam ferramentas e validam resultados com zero intervenção manual constante.",
      features: [
        "Arquitetura ReAct com ciclos de auto-correção e reflexão",
        "Execução assíncrona com paralelismo de ferramentas",
        "Comunicação inter-agentes com divisão hierárquica de papéis",
        "Gatilhos orientados a eventos via Webhooks e mensageria"
      ],
      codeSnippet: `// Orquestração de Agentes Vale Mind
const swarm = new ValeMindSwarm({
  leadAgent: "FinancialAnalyst",
  subAgents: ["DataExtractor", "RiskAuditor", "Reporter"],
  maxIterations: 10,
  humanInTheLoop: true
});

const result = await swarm.executeTask({
  goal: "Analisar DRE Q3 e gerar diagnóstico preditivo",
  dataset: "s3://enterprise-data/q3-reports.parquet"
});`,
      stats: { primary: "10x", label: "Velocidade de resolução de tarefas" }
    },
    {
      id: "neural-rag",
      title: "RAG Neural & Memória Corporativa",
      badge: "Knowledge Engine",
      icon: Database,
      shortDesc: "Indexação semântica profunda de documentos complexos, bancos relacionais e conversas com busca híbrida de altíssima precisão.",
      features: [
        "Busca híbrida vetorial + BM25 com Re-Ranking em tempo real",
        "Extração estruturada de PDFs, planilhas e contratos",
        "Memória episódica e semântica com retenção contextual",
        "Zero alucinação com citação direta da fonte original"
      ],
      codeSnippet: `// RAG Híbrido com Re-Ranking
const rag = new ValeMindRAG({
  index: "corporate-knowledge-base",
  reranker: "cohere-rerank-v3",
  chunkStrategy: "semantic-adaptive"
});

const context = await rag.retrieve({
  query: "Qual a cláusula de rescisão contratual para clientes enterprise?",
  topK: 5,
  minRelevanceScore: 0.92
});`,
      stats: { primary: "99.8%", label: "Precisão em recuperação semântica" }
    },
    {
      id: "voice-vision",
      title: "Voz & Visão Multimodal em Tempo Real",
      badge: "Realtime Multimodal",
      icon: Mic,
      shortDesc: "Agentes que escutam, veem e respondem com latência inferior a 300ms, integrando visão computacional e síntese de voz ultra-realista.",
      features: [
        "Streaming de áudio bidirecional com suporte a interrupção humana",
        "Inspeção visual automatizada de imagens e fluxos de vídeo",
        "Entonação emocional adaptativa ao sentimento do usuário",
        "Suporte a mais de 40 idiomas com sotaque nativo"
      ],
      codeSnippet: `// Streaming de Voz em Tempo Real
const voiceAgent = new ValeVoiceAgent({
  voiceProfile: "natural-executive-ptBR",
  latencyTargetMs: 250,
  visionEnabled: true
});

voiceAgent.onStream((audioChunk, visualFrame) => {
  // Processamento e resposta instantânea
  voiceAgent.speak(audioChunk);
});`,
      stats: { primary: "< 280ms", label: "Latência ponta-a-ponta" }
    },
    {
      id: "governance-security",
      title: "Governança & Segurança Enterprise",
      badge: "SOC2 & LGPD Compliant",
      icon: ShieldAlert,
      shortDesc: "Camada robusta de guarda-corpos (Guardrails), mascaramento de PII, controle de acesso baseado em funções (RBAC) e auditoria completa.",
      features: [
        "Mascaramento automático de dados sensíveis (PII, CPF, Cartões)",
        "Detecção de injeção de prompt e jailbreaks em tempo real",
        "Logs imutáveis de cada pensamento e decisão do modelo",
        "Opções de deploy 100% On-Premise ou Nuvem Soberana"
      ],
      codeSnippet: `// Guardrails de Segurança Vale Mind
const guard = new ValeGuardrails({
  piiMasking: true,
  jailbreakDetection: "strict",
  auditLogger: "datadog-siem",
  allowedTopics: ["enterprise-operations", "support"]
});

await guard.sanitizeAndValidate(incomingPayload);`,
      stats: { primary: "100%", label: "Conformidade e dados isolados" }
    }
  ]

  const current = solutions[activeTab]

  return (
    <section id="solucoes" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="glow" className="mb-4">
            Poder de Engenharia Cognitiva
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Soluções Construídas para a{" "}
            <span className="text-gradient-primary">Era dos Agentes</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Elimine gargalos operacionais e empodere seu time com uma infraestrutura inteligente e modular pronta para escala enterprise.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 rounded-2xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-md max-w-4xl mx-auto">
          {solutions.map((sol, index) => {
            const Icon = sol.icon
            const isSelected = activeTab === index
            return (
              <button
                key={sol.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 scale-[1.02]"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? "text-cyan-300" : "text-slate-400"}`} />
                <span>{sol.title.split(" ")[0]} {sol.title.split(" ")[1]}</span>
              </button>
            )
          })}
        </div>

        {/* Active Solution Card */}
        <div className="mt-10 max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-12 rounded-3xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-xl shadow-2xl relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Left details */}
                <div className="lg:col-span-6 space-y-6">
                  <div className="flex items-center gap-3">
                    <Badge variant="glow">{current.badge}</Badge>
                    <div className="flex items-center gap-1.5 text-xs text-emerald-400 font-mono">
                      <Zap className="w-3.5 h-3.5" />
                      <span>Produção Pronta</span>
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                    {current.title}
                  </h3>

                  <p className="text-slate-300 text-base leading-relaxed">
                    {current.shortDesc}
                  </p>

                  <div className="space-y-3 pt-2">
                    {current.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                        <div className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 mt-0.5 border border-indigo-500/30">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Button
                      onClick={onOpenBooking}
                      variant="glow"
                      size="default"
                      className="gap-2 font-semibold"
                    >
                      <span>Implementar Solução</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                    <div className="border-l border-slate-800 pl-4">
                      <div className="text-xl font-bold font-display text-cyan-400">
                        {current.stats.primary}
                      </div>
                      <div className="text-[11px] text-slate-400 font-mono">
                        {current.stats.label}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right interactive Code Visualizer */}
                <div className="lg:col-span-6">
                  <div className="rounded-2xl bg-[#030712] border border-slate-800/90 overflow-hidden shadow-2xl">
                    <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800/80 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                        <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1">
                          <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                          valemind-engine.ts
                        </span>
                      </div>
                      <Badge variant="outline" className="text-[10px] py-0.5">TypeScript</Badge>
                    </div>
                    <div className="p-5 font-mono text-xs sm:text-[13px] text-slate-300 leading-relaxed overflow-x-auto selection:bg-indigo-500/40">
                      <pre className="text-slate-300">
                        <code>{current.codeSnippet}</code>
                      </pre>
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
