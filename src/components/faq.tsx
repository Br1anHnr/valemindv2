import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, HelpCircle, Shield, Cpu, Lock } from "lucide-react"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Como a Vale Mind garante a segurança e privacidade dos dados da minha empresa?",
      answer: "A segurança é nosso princípio fundamental. Todos os dados são processados com isolamento de tenant criptografado (AES-256 em repouso e TLS 1.3 em trânsito). Nós não utilizamos dados de clientes para treinar modelos públicos e suportamos implantação 100% On-Premise ou em VPC privada compatível com LGPD e SOC-2 Type II."
    },
    {
      question: "Quais modelos de Inteligência Artificial a Vale Mind utiliza?",
      answer: "Nossa arquitetura é 100% agnóstica a modelos (Model-Agnostic). Orquestramos dinamicamente modelos de ponta como Claude 3.7 Sonnet, GPT-4.5, Gemini 2.0 Pro e DeepSeek R1, além de modelos de código aberto (Llama 3.3, Mistral) rodando em infraestrutura dedicada conforme o perfil de custo e latência do cliente."
    },
    {
      question: "Quanto tempo leva para colocar o primeiro agente em produção?",
      answer: "Graças aos nossos conectores modulares e pipelines pré-construídos, o primeiro fluxo operacional geralmente entra em ambiente de homologação em menos de 48 horas e em produção completa em até 7 dias úteis com acompanhamento do nosso time de engenharia."
    },
    {
      question: "A Vale Mind se integra com nossos sistemas atuais (ERP, CRM, Banco de Dados)?",
      answer: "Sim! Dispomos de SDKs, APIs REST e Webhooks para conexão nativa com SAP, Salesforce, Hubspot, TOTVS, Jira, Slack, PostgreSQL, Snowflake, BigQuery e sistemas legados com autenticação segura via OAuth2/mTLS."
    },
    {
      question: "Como funciona a intervenção humana (Human-in-the-loop)?",
      answer: "Você define níveis de confiança e regras de negócio. Caso um agente encontre um cenário de incerteza ou uma ação financeira crítica acima do limite configurado, ele pausa a execução e solicita aprovação em um clique via Slack, Teams ou painel de controle da Vale Mind."
    },
    {
      question: "Posso personalizar a voz, tom e comportamento dos agentes?",
      answer: "Com certeza. Nossos perfis de agentes permitem configurar tom de voz, regras de compliance, vocabulário corporativo e diretrizes específicas de atendimento ou análise técnica."
    }
  ]

  return (
    <section id="faq" className="py-24 relative bg-slate-950/40 border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Badge variant="glow" className="mb-4">
            Dúvidas Frequentes
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Perguntas & <span className="text-gradient-primary">Respostas</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Tudo o que você precisa saber sobre a arquitetura, implantação e segurança da Vale Mind.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="rounded-2xl bg-slate-900/70 border border-slate-800/80 overflow-hidden transition-colors hover:border-slate-700"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-semibold text-white font-display">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg bg-slate-800 text-slate-300 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180 bg-indigo-600 text-white" : ""}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-slate-800/40">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
