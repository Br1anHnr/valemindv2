import React from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Cpu, CheckCircle2, ShieldCheck, Zap, Sparkles } from "lucide-react"

export function AiPhilosophySection() {
  return (
    <section className="py-20 sm:py-28 relative bg-[#030712] border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/60 border border-indigo-500/30 text-indigo-300 text-xs font-mono mb-6">
          <Cpu className="w-3.5 h-3.5 text-cyan-400" />
          <span>Visão Pragmática de Tecnologia</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Não aplicamos Inteligência Artificial por mera tendência de mercado.{" "}
          <span className="text-gradient-cyan block mt-2">Aplicamos quando ela eleva a eficiência da solução.</span>
        </h2>

        <p className="mt-8 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          A Inteligência Artificial não é tratada pela Vale Mind como um artifício promocional isolado. Ela é uma camada de engenharia aplicada dentro de softwares, automações e plataformas sempre que trouxer eficiência operacional mensurável, redução de tempo e valor tangível para a empresa.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-indigo-400 font-display font-bold text-lg mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              IA Integrada ao Fluxo
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Processamento de documentos, triagem de mensagens, extração de dados e automações conectadas aos seus bancos de dados e ERPs.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-indigo-400 font-display font-bold text-lg mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              Privacidade & Segurança
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Seus dados empresariais nunca são utilizados para treinamento de modelos públicos e permanecem protegidos por criptografia.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div className="text-indigo-400 font-display font-bold text-lg mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-cyan-400" />
              Impacto Mensurável
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Se uma automação tradicional de software resolver o problema com menor custo e maior previsibilidade, é ela que será implementada.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
