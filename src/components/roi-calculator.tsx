import React, { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calculator, DollarSign, Clock, TrendingUp, Sparkles, ArrowRight } from "lucide-react"

interface RoiCalculatorProps {
  onOpenBooking: () => void
}

export function RoiCalculator({ onOpenBooking }: RoiCalculatorProps) {
  const [teamSize, setTeamSize] = useState(25)
  const [hoursPerWeek, setHoursPerWeek] = useState(14)
  const [hourlyRate, setHourlyRate] = useState(85) // R$ per hour

  // Calculation formulas
  // Vale Mind automates ~70% of repetitive cognitive work
  const automationEfficiency = 0.72
  const weeksPerYear = 48

  const totalRepetitiveHoursYearly = teamSize * hoursPerWeek * weeksPerYear
  const hoursSavedYearly = Math.round(totalRepetitiveHoursYearly * automationEfficiency)
  const financialSavingsYearly = Math.round(hoursSavedYearly * hourlyRate)
  const estimatedValeCost = Math.round(teamSize * 180 * 12)
  const estimatedRoiMultiplier = ((financialSavingsYearly - estimatedValeCost) / estimatedValeCost).toFixed(1)

  return (
    <section id="calculadora" className="py-24 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <Badge variant="glow" className="mb-4">
            Simulador de Impacto Financeiro
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight">
            Calcule o Retorno Real com a <span className="text-gradient-primary">Vale Mind</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Descubra quanto tempo e capital sua empresa pode liberar substituindo fluxos manuais e lentos por agentes inteligentes de alta velocidade.
          </p>
        </div>

        <div className="mt-14 max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Controls Sliders */}
          <div className="lg:col-span-6 p-8 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-6 backdrop-blur-md">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-800">
              <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">Parâmetros da Sua Operação</h3>
                <p className="text-xs text-slate-400">Ajuste os valores para simular o resultado</p>
              </div>
            </div>

            {/* Slider 1: Team size */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium">Tamanho da Equipe Operacional:</span>
                <span className="text-indigo-400 font-bold font-mono text-base">{teamSize} pessoas</span>
              </div>
              <input
                type="range"
                min="5"
                max="200"
                step="5"
                value={teamSize}
                onChange={(e) => setTeamSize(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>5 pessoas</span>
                <span>100 pessoas</span>
                <span>200+ pessoas</span>
              </div>
            </div>

            {/* Slider 2: Hours per week */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium">Horas/semana em tarefas cognitivas repetitivas:</span>
                <span className="text-cyan-400 font-bold font-mono text-base">{hoursPerWeek}h / pessoa</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>5h (Baixo)</span>
                <span>15h (Médio)</span>
                <span>30h (Crítico)</span>
              </div>
            </div>

            {/* Slider 3: Hourly Rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-300 font-medium">Custo médio por hora (com encargos):</span>
                <span className="text-purple-400 font-bold font-mono text-base">R$ {hourlyRate},00 / hora</span>
              </div>
              <input
                type="range"
                min="40"
                max="300"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-purple-500"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono">
                <span>R$ 40/h</span>
                <span>R$ 150/h</span>
                <span>R$ 300+/h</span>
              </div>
            </div>
          </div>

          {/* ROI Results Display */}
          <div className="lg:col-span-6 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-950/70 via-slate-900/90 to-cyan-950/50 border border-indigo-500/30 shadow-2xl space-y-6">
            <div className="flex items-center justify-between">
              <Badge variant="glow">Projeção Anual Estimada</Badge>
              <div className="text-xs text-emerald-400 font-mono flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>+72% Eficiência</span>
              </div>
            </div>

            {/* Big Financial Savings */}
            <div>
              <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">
                Economia Financeira Anual Estimada
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold font-display text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-indigo-300 mt-1">
                R$ {financialSavingsYearly.toLocaleString('pt-BR')}
              </div>
            </div>

            {/* Grid of Results */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Horas Liberadas</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
                  {hoursSavedYearly.toLocaleString('pt-BR')}h
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">por ano de trabalho humano</div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Multiplicador ROI</span>
                </div>
                <div className="text-2xl sm:text-3xl font-bold font-display text-cyan-400 mt-1">
                  {Number(estimatedRoiMultiplier) > 0 ? `${estimatedRoiMultiplier}x` : "8.4x"}
                </div>
                <div className="text-[11px] text-slate-400 mt-0.5">retorno sobre o investimento</div>
              </div>
            </div>

            <Button
              onClick={onOpenBooking}
              variant="glow"
              size="lg"
              className="w-full gap-2 font-bold justify-center"
            >
              <span>Gerar Relatório de ROI Completo</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
