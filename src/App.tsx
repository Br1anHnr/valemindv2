import React, { useState } from "react"
import { Navbar } from "@/components/navbar"
import { HeroScrollReveal } from "@/components/hero-scroll-reveal"
import { SplineSceneBasic } from "@/components/ui/demo"
import { HubSolutionsSection } from "@/components/hub-solutions"
import { EngineeringPracticesSection } from "@/components/engineering-practices"
import { BentoEcosystemSection } from "@/components/bento-ecosystem"
import { CtaFinalSection } from "@/components/cta-final"
import { Footer } from "@/components/footer"
import { ContactModal } from "@/components/contact-modal"
import { ASMRStaticBackground } from "@/components/ui/asmr-background"

export function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [activeSolutionTab, setActiveSolutionTab] = useState(0)

  const handleOpenContact = () => {
    setContactModalOpen(true)
  }

  const handleCloseContact = () => {
    setContactModalOpen(false)
  }

  const handleSelectSolutionFromNav = (tabIndex: number) => {
    setActiveSolutionTab(tabIndex)
  }

  return (
    <div className="relative min-h-screen bg-[#090A0B] text-[#F5F5F5] flex flex-col selection:bg-neutral-800 selection:text-white">
      {/* Interactive ASMR Static Particle Background with Magnetic Vortex */}
      <ASMRStaticBackground particleCount={700} />

      {/* 0. Top Header with Motion Navigation & Reactive Tab Switching */}
      <Navbar
        onOpenBooking={handleOpenContact}
        onSelectSolution={handleSelectSolutionFromNav}
      />

      {/* 5 Master Blocks */}
      <main className="flex-grow relative z-10">
        {/* BLOCO 1: Hero Cinematográfica Ágil */}
        <HeroScrollReveal onOpenBooking={handleOpenContact} />

        {/* 3D Interactive Card do Prompt */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 relative z-20">
          <SplineSceneBasic />
        </div>

        {/* BLOCO 2: Hub Interativo de Soluções & Posicionamento */}
        <HubSolutionsSection
          onOpenBooking={handleOpenContact}
          activeTabIndex={activeSolutionTab}
          onTabChange={setActiveSolutionTab}
        />

        {/* BLOCO 3: Engenharia na Prática (Metodologia em 6 etapas + Mockups de Sistemas Reais) */}
        <EngineeringPracticesSection />

        {/* BLOCO 4: Bento Grid — Quem Atendemos, Diferenciais & Ecossistema de Produtos */}
        <div id="diferenciais">
          <BentoEcosystemSection />
        </div>

        {/* BLOCO 5: CTA Final Provocativo & Direto */}
        <CtaFinalSection onOpenBooking={handleOpenContact} />
      </main>

      {/* Rodapé Institucional */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Modal de Diagnóstico & Contato */}
      <ContactModal isOpen={contactModalOpen} onClose={handleCloseContact} />
    </div>
  )
}

export default App
