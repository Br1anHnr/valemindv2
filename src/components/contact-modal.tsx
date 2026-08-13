import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, CheckCircle2, ArrowRight, Building, Mail, User, Phone, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ValeMindLogo } from "@/components/valemind-logo"

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    area: "Desenvolvimento de Software / Sistema Empresarial",
    bottleneck: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 15 }}
          className="relative w-full max-w-xl rounded-2xl bg-[#111316] border border-[#1D2025] shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-md text-[#A1A1AA] hover:text-white hover:bg-[#16181D] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ValeMindLogo size="sm" showText={false} />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F5]">
                    Vamos conversar sobre sua operação
                  </h3>
                  <p className="text-xs text-[#A1A1AA]">
                    Conte o problema para a Vale Mind. Nós pensamos na tecnologia para resolvê-lo.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                      Seu Nome *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 w-3.5 h-3.5 text-[#6B6F76]" />
                      <input
                        type="text"
                        required
                        placeholder="Ex: Carlos Andrade"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#090A0B] border border-[#1D2025] text-xs sm:text-sm text-[#F5F5F5] placeholder-[#6B6F76] focus:outline-none focus:border-[#2563EB]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                      E-mail Corporativo *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 w-3.5 h-3.5 text-[#6B6F76]" />
                      <input
                        type="email"
                        required
                        placeholder="carlos@empresa.com.br"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#090A0B] border border-[#1D2025] text-xs sm:text-sm text-[#F5F5F5] placeholder-[#6B6F76] focus:outline-none focus:border-[#2563EB]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                      Nome da Empresa *
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-3 w-3.5 h-3.5 text-[#6B6F76]" />
                      <input
                        type="text"
                        required
                        placeholder="Ex: Minha Empresa Ltda"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#090A0B] border border-[#1D2025] text-xs sm:text-sm text-[#F5F5F5] placeholder-[#6B6F76] focus:outline-none focus:border-[#2563EB]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                      WhatsApp / Telefone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 w-3.5 h-3.5 text-[#6B6F76]" />
                      <input
                        type="tel"
                        required
                        placeholder="(11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#090A0B] border border-[#1D2025] text-xs sm:text-sm text-[#F5F5F5] placeholder-[#6B6F76] focus:outline-none focus:border-[#2563EB]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                    Tipo de Solução Desejada
                  </label>
                  <select
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#090A0B] border border-[#1D2025] text-xs sm:text-sm text-[#F5F5F5] focus:outline-none focus:border-[#2563EB]"
                  >
                    <option value="Desenvolvimento de Software / Sistema Empresarial">Desenvolvimento de Software / Sistema Empresarial</option>
                    <option value="Automação de Processos & Rotinas">Automação de Processos & Rotinas</option>
                    <option value="Estrutura de Atendimento Digital & WhatsApp">Estrutura de Atendimento Digital & WhatsApp</option>
                    <option value="CRM e Gestão Comercial">CRM e Gestão Comercial</option>
                    <option value="E-commerce e Plataformas de Venda">E-commerce e Plataformas de Venda</option>
                    <option value="Integrações de Sistemas & APIs">Integrações de Sistemas & APIs</option>
                    <option value="Outro desafio operacional">Outro desafio operacional</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#A1A1AA] mb-1">
                    Qual processo gera gargalo ou retrabalho hoje?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Descreva brevemente a rotina atual e o que precisa ser melhorado..."
                    value={formData.bottleneck}
                    onChange={(e) => setFormData({ ...formData, bottleneck: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#090A0B] border border-[#1D2025] text-xs sm:text-sm text-[#F5F5F5] placeholder-[#6B6F76] focus:outline-none focus:border-[#2563EB] resize-none"
                  />
                </div>

                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="default"
                    size="lg"
                    className="w-full gap-2 font-semibold justify-center py-2.5 rounded-lg bg-[#FFFFFF] text-[#090A0B] hover:bg-[#E5E5E5]"
                  >
                    <span>Enviar para a equipe técnica da Vale Mind</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#6B6F76] font-mono pt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Seus dados e informações são tratados sob sigilo.</span>
                </div>
              </form>
            </div>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#16181D] border border-[#1D2025] text-[#2563EB] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold text-[#F5F5F5]">
                Mensagem enviada com sucesso!
              </h3>

              <p className="text-xs sm:text-sm text-[#A1A1AA] max-w-sm mx-auto leading-relaxed">
                Obrigado, <strong className="text-white">{formData.name}</strong> da <strong className="text-white">{formData.company}</strong>. Analisaremos o desafio informado e entraremos em contato.
              </p>

              <div className="pt-3">
                <Button onClick={handleReset} variant="outline" size="sm" className="rounded-lg">
                  Fechar
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
