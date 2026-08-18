import React, { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ValeMindSymbol } from "@/components/valemind-symbol"
import { ArrowRight, ChevronDown, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Spotlight } from "@/components/ui/spotlight"
import { SplineScene } from "@/components/ui/splite"

gsap.registerPlugin(ScrollTrigger)

interface HeroScrollRevealProps {
  onOpenBooking: () => void
  /** "symbol-above" = small VM above headline; "watermark" = giant VM behind headline */
  heroVariant?: "symbol-above" | "watermark"
}

// Cole aqui o link da cena 3D do seu robô no Spline (Export -> Public URL / Viewer)
export const SPLINE_ROBOT_SCENE = "https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"

export function HeroScrollReveal({ onOpenBooking, heroVariant = "symbol-above" }: HeroScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const pinRef = useRef<HTMLDivElement>(null)
  const [activeStep, setActiveStep] = useState(1)

  // Moment refs
  const moment1Ref = useRef<HTMLDivElement>(null)
  const moment2Ref = useRef<HTMLDivElement>(null)
  const moment3Ref = useRef<HTMLDivElement>(null)
  const moment4Ref = useRef<HTMLDivElement>(null)
  const moment5Ref = useRef<HTMLDivElement>(null)
  const backgroundBrainRef = useRef<HTMLDivElement>(null)
  const symbolRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const pin = pinRef.current
      if (!pin) return

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          pin: pinRef.current,
          scrub: 0.6,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress
            if (p < 0.2) setActiveStep(1)
            else if (p < 0.45) setActiveStep(2)
            else if (p < 0.7) setActiveStep(3)
            else if (p < 0.88) setActiveStep(4)
            else setActiveStep(5)
          }
        },
      })

      // Initial states
      gsap.set(moment1Ref.current, { opacity: 1, y: 0 })
      gsap.set(moment2Ref.current, { opacity: 0, y: 40 })
      gsap.set(moment3Ref.current, { opacity: 0, y: 40 })
      gsap.set(moment4Ref.current, { opacity: 0, y: 40 })
      gsap.set(moment5Ref.current, { opacity: 0, y: 40 })
      gsap.set(backgroundBrainRef.current, { opacity: 0.12, scale: 1 })
      if (symbolRef.current) {
        gsap.set(symbolRef.current, { opacity: 1, y: 0, scale: 1 })
      }

      // Clean, sophisticated transitions
      tl
        // Moment 1 -> Moment 2 (Problem)
        // VM symbol parallax: rises faster, shrinks and fades before text
        .to(symbolRef.current, { opacity: 0, y: -120, scale: 0.6, duration: 0.6, ease: "power2.in" }, 0)
        .to(moment1Ref.current, { opacity: 0, y: -30, duration: 0.8, ease: "power2.inOut" }, 0.15)
        .to(backgroundBrainRef.current, { opacity: 0.25, scale: 1.08, duration: 0.8 }, "<")
        .to(moment2Ref.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
        .to({}, { duration: 0.2 })

        // Moment 2 -> Moment 3 (Philosophy)
        .to(moment2Ref.current, { opacity: 0, y: -30, duration: 0.8, ease: "power2.inOut" })
        .to(backgroundBrainRef.current, { opacity: 0.15, scale: 1.03, duration: 0.8 }, "<")
        .to(moment3Ref.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
        .to({}, { duration: 0.2 })

        // Moment 3 -> Moment 4 (What We Build)
        .to(moment3Ref.current, { opacity: 0, y: -30, duration: 0.8, ease: "power2.inOut" })
        .to(backgroundBrainRef.current, { opacity: 0.3, scale: 1.15, duration: 0.8 }, "<")
        .to(moment4Ref.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
        .fromTo(
          ".neural-node-item",
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: "power2.out" },
          "<0.1"
        )
        .to({}, { duration: 0.2 })

        // Moment 4 -> Moment 5 (Result)
        .to(moment4Ref.current, { opacity: 0, y: -30, duration: 0.8, ease: "power2.inOut" })
        .to(backgroundBrainRef.current, { opacity: 0.18, scale: 1.05, duration: 0.8 }, "<")
        .to(moment5Ref.current, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
        .to({}, { duration: 0.2 })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const stepLabels = [
    { num: 1, label: "Identidade" },
    { num: 2, label: "O Problema" },
    { num: 3, label: "Nossa Forma" },
    { num: 4, label: "O Que Fazemos" },
    { num: 5, label: "Resultado" },
  ]

  const handleSkipToContent = () => {
    const el = document.getElementById("hub-solucoes")
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div ref={containerRef} className="relative w-full bg-transparent text-[#F5F5F5] select-none">
      {/* Pinned 100vh Viewport */}
      <div
        ref={pinRef}
        className="h-screen w-full relative flex items-center justify-center overflow-hidden"
      >
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

        {/* Interactive Cursor Spotlight */}
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          size={400}
        />

        {/* 3D Spline Robot Background Layer */}
        <div className="absolute inset-0 z-0 flex items-center justify-end overflow-hidden opacity-90 lg:opacity-100 pointer-events-auto">
          <div className="w-full h-full lg:w-[55%] lg:h-[110%] relative lg:-right-10">
            <SplineScene 
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
            {/* Gradient overlays for smooth text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#090A0B] via-[#090A0B]/50 to-transparent pointer-events-none lg:block hidden" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090A0B] via-transparent to-[#090A0B]/60 pointer-events-none lg:hidden block" />
          </div>
        </div>

        {/* Ambient Subtle Light behind Logo (Very discreet) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

        {/* Subtle VM watermark at background (only visible in watermark variant) */}
        <div
          ref={backgroundBrainRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 transition-opacity duration-300"
        >
          {heroVariant === "watermark" && (
            <ValeMindSymbol size={500} variant="watermark" className="opacity-[0.05]" />
          )}
        </div>

        {/* Discreet Quick Skip Button */}
        <div className="absolute top-20 right-6 sm:right-12 z-30">
          <button
            onClick={handleSkipToContent}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-[#111316] border border-[#1D2025] text-[11px] font-mono text-[#A1A1AA] hover:text-[#F5F5F5] hover:border-[#2D3139] transition-colors cursor-pointer"
          >
            <span>Pular introdução</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Right-Side Interactive Progress Mini-Timeline */}
        <div className="hidden lg:flex flex-col gap-2.5 absolute right-8 top-1/2 -translate-y-1/2 z-30 font-mono text-[10px]">
          {stepLabels.map((s) => {
            const isActive = activeStep === s.num
            return (
              <div
                key={s.num}
                className={`flex items-center gap-2.5 transition-colors duration-200 ${
                  isActive ? "text-[#F5F5F5] font-semibold" : "text-[#6B6F76]"
                }`}
              >
                <span className={`h-1 rounded-full transition-all duration-200 ${
                  isActive ? "w-5 bg-[#F5F5F5]" : "w-2 bg-[#1D2025]"
                }`} />
                <span className="hidden xl:inline uppercase tracking-wider">
                  0{s.num} {s.label}
                </span>
              </div>
            )
          })}
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOMENTO 1 — Identidade */}
        {/* ------------------------------------------------------------- */}
        <div
          ref={moment1Ref}
          className="absolute inset-0 flex flex-col items-center justify-between p-6 sm:p-10 z-20 text-center"
        >
          <div className="pt-20 sm:pt-24" />

          {/* VM Symbol + Headline */}
          <div className="max-w-4xl mx-auto flex flex-col items-center my-auto">
            {/* VM symbol with parallax scroll effect */}
            {heroVariant === "symbol-above" && (
              <div ref={symbolRef} className="mb-8 sm:mb-10">
                <ValeMindSymbol size={200} variant="default" />
              </div>
            )}

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F5F5] max-w-3xl leading-[1.12]">
              Tecnologia que pensa junto com sua empresa.
            </h1>

            <p className="mt-4 text-sm sm:text-base text-[#A1A1AA] font-normal max-w-lg">
              Entendemos o problema. Construímos a tecnologia. Evoluímos a sua operação.
            </p>
          </div>

          {/* Bottom Scroll Indicator */}
          <div className="pb-6 flex flex-col items-center gap-2 text-[#6B6F76]">
            <span className="text-[11px] font-mono tracking-wider uppercase text-[#6B6F76]">
              Scroll down to reveal
            </span>
            <div className="w-4 h-7 rounded-full border border-[#1D2025] flex items-start justify-center p-1">
              <div className="w-1 h-1.5 bg-[#A1A1AA] rounded-full animate-bounce" />
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOMENTO 2 — O Problema */}
        {/* ------------------------------------------------------------- */}
        <div
          ref={moment2Ref}
          className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-12 z-20 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#111316] border border-[#1D2025] text-[#A1A1AA] text-xs font-mono mb-6">
            <span>Diagnóstico Operacional</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F5F5] leading-tight">
            Toda empresa tem processos que poderiam funcionar melhor.
          </h2>

          <p className="mt-6 text-base sm:text-lg text-[#A1A1AA] max-w-2xl leading-relaxed">
            Tarefas manuais, sistemas desconectados, atendimento desorganizado e informações espalhadas criam gargalos que limitam o crescimento.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5 text-xs font-mono text-[#A1A1AA]">
            <span className="px-3 py-1.5 rounded-md bg-[#111316] border border-[#1D2025]">
              Retrabalho manual constante
            </span>
            <span className="px-3 py-1.5 rounded-md bg-[#111316] border border-[#1D2025]">
              Sistemas e planilhas desconectadas
            </span>
            <span className="px-3 py-1.5 rounded-md bg-[#111316] border border-[#1D2025]">
              Falhas e lentidão no atendimento
            </span>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOMENTO 3 — Nossa Forma de Pensar */}
        {/* ------------------------------------------------------------- */}
        <div
          ref={moment3Ref}
          className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-12 z-20 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#111316] border border-[#1D2025] text-[#A1A1AA] text-xs font-mono mb-6">
            <span>Nossa Forma de Pensar</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F5F5] leading-tight">
            Não começamos pela tecnologia.{" "}
            <span className="block mt-2 text-[#FFFFFF]">Começamos pelo problema.</span>
          </h2>

          <p className="mt-8 text-base sm:text-lg text-[#A1A1AA] max-w-2xl leading-relaxed">
            Entendemos como sua operação funciona antes de definir o que precisa ser construído.
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOMENTO 4 — O Que Fazemos */}
        {/* ------------------------------------------------------------- */}
        <div
          ref={moment4Ref}
          className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-12 z-20 text-center max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#111316] border border-[#1D2025] text-[#A1A1AA] text-xs font-mono mb-6">
            <span>O Que Fazemos</span>
          </div>

          {/* Clean Monochrome Node Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 my-4 w-full">
            {[
              { title: "Software", desc: "Sistemas & Plataformas" },
              { title: "Automação", desc: "Processos & Rotinas" },
              { title: "Integrações", desc: "APIs & Conectores" },
              { title: "Sistemas", desc: "Operação & Gestão" },
              { title: "Produtos Digitais", desc: "Tecnologia Própria" },
            ].map((node, idx) => (
              <div
                key={idx}
                className="neural-node-item p-4 rounded-xl bg-[#111316] border border-[#1D2025] text-left hover:border-[#2D3139] transition-colors"
              >
                <div className="text-sm sm:text-base font-semibold text-[#F5F5F5]">
                  {node.title}
                </div>
                <div className="text-[11px] text-[#6B6F76] font-mono mt-1">
                  {node.desc}
                </div>
              </div>
            ))}
          </div>

          <h3 className="mt-6 text-lg sm:text-2xl font-semibold text-[#F5F5F5] max-w-2xl leading-snug">
            Construímos a tecnologia necessária para fazer sua operação evoluir.
          </h3>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* MOMENTO 5 — Resultado */}
        {/* ------------------------------------------------------------- */}
        <div
          ref={moment5Ref}
          className="absolute inset-0 flex flex-col items-center justify-center p-6 sm:p-12 z-20 text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#111316] border border-[#1D2025] text-[#A1A1AA] text-xs font-mono mb-4">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#2563EB]" />
            <span>Do Problema à Solução</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F5F5F5] leading-tight max-w-3xl">
            A Vale Mind transforma desafios operacionais em tecnologia aplicada ao negócio.
          </h2>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <a href="#hub-solucoes">
              <Button
                variant="default"
                size="lg"
                className="w-full sm:w-auto gap-2 text-sm sm:text-base font-semibold px-6 py-3 bg-[#FFFFFF] text-[#090A0B] hover:bg-[#E5E5E5] rounded-lg"
              >
                <span>Conheça nossas soluções</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>

            <Button
              onClick={onOpenBooking}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto gap-2 text-sm sm:text-base border-[#1D2025] bg-[#111316] hover:bg-[#16181D] hover:border-[#2D3139] text-[#F5F5F5] px-6 py-3 rounded-lg"
            >
              <span>Fale com a Vale Mind</span>
            </Button>
          </div>

          <a href="#hub-solucoes" className="mt-8 inline-flex items-center gap-1.5 text-xs font-mono text-[#6B6F76] hover:text-[#A1A1AA] transition-colors">
            <span>Explorar o site</span>
            <ChevronDown className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  )
}
