import React from "react"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, ShieldCheck, Layers, Building2 } from "lucide-react"

export function BentoEcosystemSection() {
  const problems = [
    "Empresas com processos manuais e retrabalho contínuo",
    "Operações reféns de planilhas e ferramentas soltas",
    "Equipes que precisam organizar e acelerar vendas",
    "Empresas que precisam de atendimento ao cliente estruturado",
    "Negócios em expansão que não encontram software pronto no mercado"
  ]

  const differentials = [
    { title: "Construímos tecnologia própria", desc: "Equipe técnica dedicada, sem terceirização opaca." },
    { title: "Entendemos antes de programar", desc: "O problema da sua operação vem antes da ferramenta." },
    { title: "Pensamos na operação inteira", desc: "Pessoas, processos e sistemas funcionando juntos." },
    { title: "Arquitetura para evoluir", desc: "Tecnologia modular que cresce com sua empresa." },
    { title: "Visão de produto", desc: "Soluções robustas prontas para escala." }
  ]

  const products = [
    { name: "Vale Retail OS", tag: "Varejo & Supermercados" },
    { name: "Vale Flow Sync", tag: "Automações & APIs" },
    { name: "Vale Desk Core", tag: "Atendimento & CRM" }
  ]

  return (
    <section className="py-20 sm:py-28 relative bg-[#090A0B]/90 backdrop-blur-sm border-t border-[#1D2025]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <Badge variant="default" className="mb-4">
            Por Que a Vale Mind
          </Badge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F5F5F5] leading-tight">
            Quem Atendemos & Nossos Diferenciais
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
            Uma empresa técnica, transparente e focada em resolver os gargalos reais do seu negócio.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 max-w-5xl mx-auto">
          {/* Card 1: Quem Atendemos (Left column) */}
          <div className="lg:col-span-6 p-7 sm:p-9 rounded-2xl bg-[#111316] border border-[#1D2025] flex flex-col justify-between hover:border-[#2D3139] transition-colors">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA] mb-4">
                <Building2 className="w-4 h-4 text-[#2563EB]" />
                <span>Perfil de Empresas Atendidas</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F5]">
                Construído para operações com desafios reais
              </h3>

              <p className="text-xs sm:text-sm text-[#A1A1AA] mt-2.5 leading-relaxed">
                Atendemos empresas que buscam eficiência e que já perceberam que ferramentas prontas não resolvem suas particularidades operacionais.
              </p>

              <div className="mt-6 space-y-2.5">
                {problems.map((prob, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#F5F5F5]">
                    <CheckCircle2 className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>{prob}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-5 border-t border-[#1D2025] text-xs font-mono text-[#6B6F76]">
              * Varejo, Serviços, Indústria, Saúde e Tecnologia.
            </div>
          </div>

          {/* Right Column (2 Stacked Cards) */}
          <div className="lg:col-span-6 space-y-5 flex flex-col">
            {/* Card 2: 5 Diferenciais */}
            <div className="p-7 rounded-2xl bg-[#111316] border border-[#1D2025] hover:border-[#2D3139] transition-colors flex-1">
              <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA] mb-3">
                <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
                <span>Diferenciais Vale Mind</span>
              </div>

              <h4 className="text-lg font-bold text-[#F5F5F5] mb-3.5">
                Nossos 5 Pilares de Engenharia
              </h4>

              <div className="space-y-2.5">
                {differentials.map((d, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] mt-1.5 shrink-0" />
                    <div>
                      <strong className="text-[#F5F5F5] font-semibold">{d.title}:</strong>{" "}
                      <span className="text-[#A1A1AA]">{d.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 3: Ecossistema de Produtos Próprios */}
            <div className="p-6 rounded-2xl bg-[#111316] border border-[#1D2025] hover:border-[#2D3139] transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
                  <Layers className="w-4 h-4 text-[#2563EB]" />
                  <span>Ecossistema Próprio</span>
                </div>
                <span className="text-[10px] font-mono text-[#6B6F76]">
                  Tecnologia Própria
                </span>
              </div>

              <h4 className="text-base font-bold text-[#F5F5F5]">
                Transformamos as melhores soluções em produtos
              </h4>

              <p className="text-xs text-[#A1A1AA] mt-1 leading-relaxed">
                Problemas recorrentes identificados em projetos sob medida evoluem para plataformas da Vale Mind.
              </p>

              <div className="mt-3.5 flex flex-wrap gap-2">
                {products.map((p, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-md bg-[#090A0B] border border-[#1D2025] text-[11px] font-mono text-[#A1A1AA]"
                  >
                    <strong className="text-[#F5F5F5]">{p.name}</strong> • {p.tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
