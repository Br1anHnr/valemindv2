import React from "react"
import { ValeMindLogo } from "@/components/valemind-logo"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#090A0B] border-t border-[#1D2025] pt-14 pb-10 text-[#A1A1AA] text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-[#1D2025]">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-3">
            <ValeMindLogo size="md" showText={true} />

            <p className="text-xs text-[#A1A1AA] max-w-sm leading-relaxed mt-3">
              Desenvolvimento de software, automação de processos, integrações, sistemas empresariais e produtos digitais sob medida.
            </p>

            <div className="text-xs text-[#6B6F76] font-mono">
              Entender o problema. Construir a tecnologia. Evoluir a operação.
            </div>
          </div>

          {/* Column 2: Soluções */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F5] font-semibold">
              Soluções
            </h4>
            <ul className="space-y-1.5 text-xs text-[#A1A1AA]">
              <li><a href="#hub-solucoes" className="hover:text-white transition-colors">Software & Sistemas</a></li>
              <li><a href="#hub-solucoes" className="hover:text-white transition-colors">Automação de Processos</a></li>
              <li><a href="#hub-solucoes" className="hover:text-white transition-colors">Atendimento Digital</a></li>
              <li><a href="#hub-solucoes" className="hover:text-white transition-colors">CRM e Gestão Comercial</a></li>
              <li><a href="#hub-solucoes" className="hover:text-white transition-colors">E-commerce & Vendas</a></li>
              <li><a href="#hub-solucoes" className="hover:text-white transition-colors">Integrações de Sistemas</a></li>
            </ul>
          </div>

          {/* Column 3: Metodologia */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F5] font-semibold">
              Como Trabalhamos
            </h4>
            <ul className="space-y-1.5 text-xs text-[#A1A1AA]">
              <li><a href="#metodologia" className="hover:text-white transition-colors">1. Entender o Problema</a></li>
              <li><a href="#metodologia" className="hover:text-white transition-colors">2. Projetar a Arquitetura</a></li>
              <li><a href="#metodologia" className="hover:text-white transition-colors">3. Desenvolver o Código</a></li>
              <li><a href="#metodologia" className="hover:text-white transition-colors">4. Integrar com Sistemas</a></li>
              <li><a href="#metodologia" className="hover:text-white transition-colors">5. Operar no Dia a Dia</a></li>
              <li><a href="#metodologia" className="hover:text-white transition-colors">6. Evoluir Continuamente</a></li>
            </ul>
          </div>

          {/* Column 4: Institucional */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#F5F5F5] font-semibold">
              Empresa
            </h4>
            <ul className="space-y-1.5 text-xs text-[#A1A1AA]">
              <li><a href="#diferenciais" className="hover:text-white transition-colors">Por Que a Vale Mind</a></li>
              <li><a href="#metodologia" className="hover:text-white transition-colors">Projetos & Aplicações</a></li>
              <li><a href="#diferenciais" className="hover:text-white transition-colors">Nossos Diferenciais</a></li>
              <li><a href="#diferenciais" className="hover:text-white transition-colors">Ecossistema de Produtos</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B6F76]">
          <div>
            © {currentYear} Vale Mind Tecnologia Ltda. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-5">
            <span>Privacidade de Dados</span>
            <span>Segurança Corporativa</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
