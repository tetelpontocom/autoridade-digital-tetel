"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowRight,
  MessageCircle,
  Star,
  CheckCircle,
  Users,
  TrendingUp,
  Target,
  Award,
  Zap,
  Shield,
  Eye,
  Building,
  Briefcase,
  X,
  Mail,
} from "lucide-react"

export default function TetelLanding() {
  const [selectedPlan, setSelectedPlan] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    segment: "",
    position: "",
    challenge: "",
    plan: "",
  })
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [whatsappExpanded, setWhatsappExpanded] = useState(true)
  const [viewersCount, setViewersCount] = useState(12)
  const [showThankYou, setShowThankYou] = useState(false)

  useEffect(() => {
    const viewersInterval = setInterval(() => {
      setViewersCount((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1
        const newCount = prev + change
        return Math.max(8, Math.min(25, newCount))
      })
    }, 15000)

    return () => clearInterval(viewersInterval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const whatsappMessage = `🎯 *NOVO LEAD - AUTORIDADE DIGITAL*

👤 *Nome:* ${formData.name}
📧 *Email:* ${formData.email}
📱 *Telefone:* ${formData.phone}
🏢 *Segmento:* ${formData.segment}
💼 *Posição:* ${formData.position}
🎯 *Plano Interesse:* ${formData.plan}
💭 *Principal Desafio:* ${formData.challenge}

---
⏰ *Data/Hora:* ${new Date().toLocaleString("pt-BR")}
🌐 *Origem:* Landing Page Autoridade Digital`

    // Mostrar modal de agradecimento
    setShowThankYou(true)

    // Limpar formulário
    setFormData({
      name: "",
      email: "",
      phone: "",
      segment: "",
      position: "",
      challenge: "",
      plan: "",
    })

    // Detectar se é mobile e abrir WhatsApp imediatamente
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (isMobile) {
      // No mobile, abrir WhatsApp imediatamente
      setTimeout(() => {
        const whatsappUrl = `https://wa.me/5582999176900?text=${encodeURIComponent(whatsappMessage)}`
        window.open(whatsappUrl, "_blank")
      }, 1000) // Reduzir delay para 1 segundo no mobile
    } else {
      // No desktop, manter delay de 3 segundos
      setTimeout(() => {
        window.open(`https://wa.me/5582999176900?text=${encodeURIComponent(whatsappMessage)}`, "_blank")
      }, 3000)
    }
  }

  const handleWhatsAppClick = (source: string) => {
    const message = `Olá Tetel! 👋

Vi sua landing page de *Autoridade Digital* e gostaria de mais informações sobre como construir minha autoridade digital.

Quando podemos conversar? 📞`

    window.open(`https://wa.me/5582999176900?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <Image src="/tetel-logo.jpg" alt="Tetel" width={120} height={40} className="h-10 w-auto" />
                <div className="text-gray-300">|</div>
                <Image
                  src="/tetel-digital-logo.jpg"
                  alt="Tetel Digital"
                  width={100}
                  height={32}
                  className="h-8 w-auto opacity-90"
                />
              </div>
              <Badge variant="outline" className="text-xs border-blue-200 text-blue-700">
                <Eye className="w-3 h-3 mr-1" />
                {viewersCount} visualizações
              </Badge>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#sobre" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Sobre
              </a>
              <a href="#metodologia" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Metodologia
              </a>
              <a href="#precos" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Investimento
              </a>
              <Button
                onClick={() => handleWhatsAppClick("Header WhatsApp")}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Contato
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section - Redesenhado */}
      <section className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start lg:items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-blue-100 text-blue-800 font-medium px-4 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  30+ Anos de Experiência
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Construa Sua{" "}
                  <span className="text-blue-600 relative">
                    Autoridade Digital
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-blue-600 rounded opacity-20"></div>
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                  <strong>Metodologia comprovada para líderes políticos e empresariais</strong> que querem se posicionar
                  como referência em seus segmentos, transformando expertise em reconhecimento digital sem precisar
                  dominar ferramentas técnicas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                  onClick={() => document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Quero Construir Minha Autoridade
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg bg-transparent"
                  onClick={() => handleWhatsAppClick("Hero WhatsApp")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Conversar Agora
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-100">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">3.000+</div>
                  <div className="text-sm text-gray-600">Clientes Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">30+</div>
                  <div className="text-sm text-gray-600">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <div className="text-sm text-gray-600">Foco em Resultados</div>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <Card className="p-6 lg:p-8 shadow-xl border border-gray-100 bg-white">
                <div className="text-center space-y-6">
                  <div className="relative">
                    <Image
                      src="/tetel-photo.jpg"
                      alt="Tetel - Autoridade Digital"
                      width={200}
                      height={200}
                      className="rounded-full mx-auto border-4 border-blue-100 shadow-lg"
                    />
                    <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      ONLINE
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Tetel</h3>
                    <p className="text-gray-600">Especialista em Autoridade Digital</p>
                  </div>
                  <div className="flex justify-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-blue-500 text-blue-500" />
                    ))}
                  </div>
                  <Badge variant="outline" className="border-green-200 text-green-700">
                    ⚡ Resposta em até 2 horas
                  </Badge>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre o Tetel */}
      <section id="sobre" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-blue-200 text-blue-700 px-4 py-2 mb-4">
              EXPERTISE COMPROVADA
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Conheça <span className="text-blue-600">Tetel</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mais de três décadas transformando líderes em autoridades digitais reconhecidas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <Card className="text-center p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Pioneiro</h3>
                  <p className="text-gray-600 text-sm">Primeiro provedor de internet banda larga da região</p>
                </Card>
                <Card className="text-center p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">3.000+ Clientes</h3>
                  <p className="text-gray-600 text-sm">Atendidos ao longo da carreira</p>
                </Card>
                <Card className="text-center p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Político</h3>
                  <p className="text-gray-600 text-sm">Ex-candidato a deputado estadual de Alagoas</p>
                </Card>
                <Card className="text-center p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                  <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-bold text-lg mb-2">Inovador Social</h3>
                  <p className="text-gray-600 text-sm">Criou projeto de internet gratuita em praças</p>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Trajetória Profissional</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Tribunal de Justiça de Alagoas</h4>
                    <p className="text-gray-600">HelpDesk Pleno - Suporte técnico e processos institucionais</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-200">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">ALMAGIS</h4>
                    <p className="text-gray-600">
                      Gestor de TI - Desenvolvimento de soluções tecnológicas corporativas
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <CheckCircle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Autoridade Digital</h4>
                    <p className="text-gray-600">
                      Especialista em posicionamento digital para líderes políticos e empresariais
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Público-Alvo Específico - Redesenhado */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-blue-200 text-blue-700 px-4 py-2 mb-4">
              SEGMENTOS ATENDIDOS
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Autoridade Digital <span className="text-blue-600">Personalizada</span> Para Seu Perfil
            </h2>
            <p className="text-xl text-gray-600">Metodologia adaptada para cada tipo de liderança</p>
          </div>

          {/* Políticos */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full mb-4">
                <Building className="w-6 h-6 text-blue-600" />
                <span className="text-lg font-bold text-blue-800">LÍDERES POLÍTICOS</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Construa Seu <span className="text-blue-600">Capital Político Digital</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Seja reconhecido como referência política, gere engajamento genuíno e construa uma base sólida de
                apoiadores digitais
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Prefeitos & Ex-Prefeitos</h4>
                  <ul className="text-gray-600 space-y-2 text-sm text-left">
                    <li>• Posicionamento como estadista</li>
                    <li>• Prestação de contas transparente</li>
                    <li>• Legado político duradouro</li>
                    <li>• Influência regional ampliada</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Vereadores & Ex-Vereadores</h4>
                  <ul className="text-gray-600 space-y-2 text-sm text-left">
                    <li>• Proximidade com o eleitorado</li>
                    <li>• Defesa de causas específicas</li>
                    <li>• Fiscalização transparente</li>
                    <li>• Base eleitoral engajada</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
                    <Target className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Candidatos & Não Eleitos</h4>
                  <ul className="text-gray-600 space-y-2 text-sm text-left">
                    <li>• Manter relevância política</li>
                    <li>• Preparação para próximas eleições</li>
                    <li>• Construção de narrativa forte</li>
                    <li>• Engajamento contínuo</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Oposição & Secretários</h4>
                  <ul className="text-gray-600 space-y-2 text-sm text-left">
                    <li>• Fiscalização responsável</li>
                    <li>• Propostas alternativas</li>
                    <li>• Credibilidade técnica</li>
                    <li>• Liderança de opinião</li>
                  </ul>
                </div>
              </Card>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                onClick={() => {
                  setSelectedPlan("politico")
                  setFormData({ ...formData, plan: "Autoridade Digital Para Políticos", segment: "politico" })
                  document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <Building className="w-5 h-5 mr-2" />
                Quero Autoridade Política Digital
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Empresários */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-green-50 px-6 py-3 rounded-full mb-4">
                <Briefcase className="w-6 h-6 text-green-600" />
                <span className="text-lg font-bold text-green-800">LÍDERES EMPRESARIAIS</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Torne-se a <span className="text-green-600">Referência do Seu Setor</span>
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Posicione-se como líder empresarial, atraia novos negócios e construa uma rede de relacionamentos
                estratégicos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                    <TrendingUp className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Pequenos Empresários</h4>
                  <ul className="text-gray-600 space-y-2 text-sm text-left">
                    <li>• Destaque na concorrência local</li>
                    <li>• Atração de clientes qualificados</li>
                    <li>• Credibilidade no mercado</li>
                    <li>• Networking estratégico</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                    <Award className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Médios & Grandes Empresários</h4>
                  <ul className="text-gray-600 space-y-2 text-sm text-left">
                    <li>• Liderança setorial reconhecida</li>
                    <li>• Atração de investidores</li>
                    <li>• Parcerias estratégicas</li>
                    <li>• Influência regional/nacional</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                    <Zap className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Autônomos & Freelancers</h4>
                  <ul className="text-gray-600 space-y-2 text-sm text-left">
                    <li>• Posicionamento como especialista</li>
                    <li>• Atração de clientes premium</li>
                    <li>• Precificação estratégica</li>
                    <li>• Agenda sempre cheia</li>
                  </ul>
                </div>
              </Card>

              <Card className="p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">Gestores & Executivos</h4>
                  <ul className="text-gray-600 space-y-2 text-sm text-left">
                    <li>• Marca pessoal executiva</li>
                    <li>• Oportunidades de carreira</li>
                    <li>• Reconhecimento profissional</li>
                    <li>• Network de alto nível</li>
                  </ul>
                </div>
              </Card>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
                onClick={() => {
                  setSelectedPlan("empresario")
                  setFormData({ ...formData, plan: "Autoridade Digital Para Empresários", segment: "empresario" })
                  document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                <Briefcase className="w-5 h-5 mr-2" />
                Quero Autoridade Empresarial Digital
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Para quem NÃO é */}
      <section className="py-20 bg-gradient-to-b from-red-50 via-red-25 to-white border-t-4 border-red-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-red-100 text-red-800 px-4 py-2 mb-4">🚫 FILTRO DE QUALIFICAÇÃO</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Esta Transformação <span className="text-red-600">NÃO é Para Você</span> Se:
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seja honesto consigo mesmo. Se você se identifica com algum item abaixo,
              <strong> recomendamos que procure outras soluções no mercado.</strong>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="p-6 border-red-200 bg-white hover:shadow-lg transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <X className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-red-700">Quer Resultados em 30 Dias</h3>
                <p className="text-gray-600 text-sm">
                  Se você acredita em "fórmulas mágicas" ou espera virar influencer overnight, nossa metodologia não é
                  para você. <strong>Autoridade real leva tempo.</strong>
                </p>
              </div>
            </Card>

            <Card className="p-6 border-red-200 bg-white hover:shadow-lg transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <X className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-red-700">Não Quer Se Comprometer</h3>
                <p className="text-gray-600 text-sm">
                  Nossa metodologia exige dedicação e implementação ativa. Se você quer "deixar tudo por nossa conta",{" "}
                  <strong>não conseguirá os resultados.</strong>
                </p>
              </div>
            </Card>

            <Card className="p-6 border-red-200 bg-white hover:shadow-lg transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <X className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-red-700">Busca Apenas Números</h3>
                <p className="text-gray-600 text-sm">
                  Se seu objetivo é apenas "likes" e "seguidores" sem propósito estratégico, você está no lugar errado.{" "}
                  <strong>Focamos em autoridade real.</strong>
                </p>
              </div>
            </Card>

            <Card className="p-6 border-red-200 bg-white hover:shadow-lg transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <X className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-red-700">Não Tem Experiência Relevante</h3>
                <p className="text-gray-600 text-sm">
                  Nossa metodologia amplifica expertise existente. Se você não tem conhecimento ou experiência
                  relevante, <strong>não criamos autoridade do zero.</strong>
                </p>
              </div>
            </Card>

            <Card className="p-6 border-red-200 bg-white hover:shadow-lg transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <X className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-red-700">Procura o Mais Barato</h3>
                <p className="text-gray-600 text-sm">
                  Se você está procurando a opção mais barata do mercado, não somos para você.{" "}
                  <strong>Investimos tempo e expertise real.</strong>
                </p>
              </div>
            </Card>

            <Card className="p-6 border-red-200 bg-white hover:shadow-lg transition-all duration-300">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <X className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-red-700">Prefere Fazer Sozinho</h3>
                <p className="text-gray-600 text-sm">
                  Se você prefere tutoriais gratuitos no YouTube e não valoriza mentoria personalizada,{" "}
                  <strong>nossa abordagem não fará sentido.</strong>
                </p>
              </div>
            </Card>
          </div>

          {/* Call to Action Reverso */}
          <div className="text-center">
            <div className="bg-white p-8 rounded-2xl shadow-xl border-2 border-red-200 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Se Você Se Identificou com Algum Item Acima...</h3>
              <p className="text-lg text-gray-600 mb-6">
                <strong>Recomendamos que procure outras soluções no mercado.</strong> Nossa metodologia é específica
                para líderes sérios que querem construir autoridade digital real e duradoura.
              </p>

              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 mb-6">
                <h4 className="text-xl font-bold text-green-800 mb-3">✅ Mas se você É UM LÍDER SÉRIO que:</h4>
                <div className="grid md:grid-cols-2 gap-4 text-left">
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" /> Tem experiência comprovada na sua área
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" /> Quer construir autoridade real e duradoura
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" /> Está disposto a se comprometer com o processo
                    </li>
                  </ul>
                  <ul className="space-y-2 text-green-700">
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" /> Valoriza mentoria personalizada e expertise
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" /> Entende que qualidade tem seu preço
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2" /> Quer resultados consistentes e estratégicos
                    </li>
                  </ul>
                </div>
              </div>

              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg shadow-xl transform hover:scale-105 transition-all duration-200"
                onClick={() => document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })}
              >
                <Award className="w-5 h-5 mr-2" />
                SIM, SOU UM LÍDER SÉRIO - QUERO COMEÇAR
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados Comprovados */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-blue-200 text-blue-700 px-4 py-2 mb-4">
              RESULTADOS COMPROVADOS
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Transformações <span className="text-blue-600">Reais</span>
            </h2>
            <p className="text-xl text-gray-600">Números que comprovam a eficácia da nossa metodologia</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <Card className="p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-blue-600 mb-2">300%</div>
              <div className="text-gray-700 font-medium">Aumento médio de engajamento</div>
            </Card>
            <Card className="p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-green-600 mb-2">250%</div>
              <div className="text-gray-700 font-medium">Crescimento de oportunidades</div>
            </Card>
            <Card className="p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-purple-600 mb-2">30+</div>
              <div className="text-gray-700 font-medium">Anos de experiência</div>
            </Card>
            <Card className="p-6 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-700 font-medium">Foco em resultados reais</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section id="metodologia" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-blue-200 text-blue-700 px-4 py-2 mb-4">
              METODOLOGIA EXCLUSIVA
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Metodologia <span className="text-blue-600">Tetel</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              3 pilares fundamentais para construir sua autoridade digital de forma estratégica e autêntica
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-10 h-10 text-blue-600" />
              </div>
              <div className="mb-4">
                <Badge variant="outline" className="border-blue-200 text-blue-700 mb-2">
                  PASSO 1
                </Badge>
                <h3 className="text-2xl font-bold mb-4">Presença Digital Estratégica</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Construção de uma presença digital coesa e profissional que reflete sua expertise e valores,
                posicionando você como referência no seu segmento.
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2" /> Otimização de perfis profissionais
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2" /> Estratégia de conteúdo personalizada
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2" /> Presença multiplataforma
                </li>
              </ul>
            </Card>

            <Card className="p-8 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-10 h-10 text-blue-600" />
              </div>
              <div className="mb-4">
                <Badge variant="outline" className="border-blue-200 text-blue-700 mb-2">
                  PASSO 2
                </Badge>
                <h3 className="text-2xl font-bold mb-4">Narrativa Autêntica</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Desenvolvimento de uma narrativa única e autêntica que conecta sua história pessoal com sua expertise
                profissional, criando conexão emocional.
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2" /> Storytelling estratégico
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2" /> Posicionamento de marca pessoal
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2" /> Comunicação consistente
                </li>
              </ul>
            </Card>

            <Card className="p-8 text-center border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-10 h-10 text-blue-600" />
              </div>
              <div className="mb-4">
                <Badge variant="outline" className="border-blue-200 text-blue-700 mb-2">
                  PASSO 3
                </Badge>
                <h3 className="text-2xl font-bold mb-4">Engajamento Estratégico</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Criação de relacionamentos genuínos e estratégicos que geram oportunidades reais de negócios e ampliam
                sua rede de influência.
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Networking digital qualificado</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Estratégias de relacionamento</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                  <span>Geração de oportunidades</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Preços */}
      <section id="precos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-blue-200 text-blue-700 px-4 py-2 mb-4">
              INVESTIMENTO
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Planos de <span className="text-blue-600">Autoridade Digital</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Escolha o plano ideal para construir sua autoridade digital estratégica
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Diagnóstico Digital */}
            <Card className="p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-center space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Diagnóstico Digital</h3>
                  <p className="text-gray-600">Análise completa da sua presença atual</p>
                </div>

                <div className="space-y-2">
                  <div className="text-4xl font-bold text-blue-600">R$ 497</div>
                  <p className="text-gray-500">Pagamento único</p>
                </div>

                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Auditoria completa da presença digital</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Relatório detalhado com oportunidades</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Plano estratégico personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span>1 sessão de consultoria (60min)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Entrega em 7 dias úteis</span>
                  </li>
                </ul>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  onClick={() => {
                    setSelectedPlan("diagnostico")
                    setFormData({ ...formData, plan: "Diagnóstico Digital - R$ 497" })
                    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <Target className="w-5 h-5 mr-2" />
                  Começar com Diagnóstico
                </Button>
              </div>
            </Card>

            {/* Autoridade Completa - DESTAQUE */}
            <Card className="p-8 border-2 border-blue-500 hover:shadow-xl transition-all duration-300 relative bg-blue-50">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-600 text-white px-6 py-2 font-bold text-lg">🏆 RECOMENDADO</Badge>
              </div>

              <div className="text-center space-y-6 mt-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Autoridade Completa</h3>
                  <p className="text-gray-600">Implementação total em 90 dias</p>
                </div>

                <div className="space-y-2">
                  <div className="text-2xl text-gray-500 line-through">R$ 4.997</div>
                  <div className="text-5xl font-bold text-blue-600">R$ 2.997</div>
                  <p className="text-gray-500">ou 12x de R$ 299</p>
                  <Badge className="bg-blue-100 text-blue-800">40% OFF - Oferta Limitada</Badge>
                </div>

                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span className="font-semibold">Tudo do Diagnóstico +</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Implementação completa da estratégia</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Supervisão contínua</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Relatórios mensais de progresso</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Acesso a recursos exclusivos</span>
                  </li>
                </ul>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  onClick={() => {
                    setSelectedPlan("completa")
                    setFormData({ ...formData, plan: "Autoridade Completa - R$ 2.997" })
                    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <Target className="w-5 h-5 mr-2" />
                  Quero Autoridade Completa
                </Button>
              </div>
            </Card>

            {/* Plano Básico */}
            <Card className="p-8 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <div className="text-center space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Plano Básico</h3>
                  <p className="text-gray-600">Implementação parcial em 60 dias</p>
                </div>

                <div className="space-y-2">
                  <div className="text-4xl font-bold text-blue-600">R$ 1.997</div>
                  <p className="text-gray-500">ou 12x de R$ 199</p>
                </div>

                <ul className="space-y-3 text-left">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Diagnóstico inicial</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Plano estratégico básico</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span>2 sessões de consultoria (30min cada)</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3" />
                    <span>Entrega em 30 dias úteis</span>
                  </li>
                </ul>

                <Button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  onClick={() => {
                    setSelectedPlan("basico")
                    setFormData({ ...formData, plan: "Plano Básico - R$ 1.997" })
                    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  <Target className="w-5 h-5 mr-2" />
                  Quero Plano Básico
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Mensagem Final do Tetel */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/10 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="relative">
              <Image
                src="/tetel-photo.jpg"
                alt="Tetel"
                width={120}
                height={120}
                className="rounded-full mx-auto border-4 border-white/20 shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                ONLINE AGORA
              </div>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Uma Mensagem Pessoal Para Você</h2>

              <div className="text-xl lg:text-2xl text-blue-100 leading-relaxed space-y-4">
                <p>
                  <strong className="text-white">Olá, sou o Tetel.</strong> Depois de 30+ anos no mundo da tecnologia,
                  aprendi uma verdade fundamental:{" "}
                  <span className="text-yellow-300">
                    não é sobre ter as melhores ferramentas, é sobre ter a estratégia certa.
                  </span>
                </p>

                <p>
                  Vi muitos líderes brilhantes - políticos com ideias transformadoras, empresários visionários - ficarem
                  invisíveis no digital simplesmente porque{" "}
                  <strong className="text-white">
                    ninguém os ensinou a construir autoridade de forma estratégica.
                  </strong>
                </p>

                <p>
                  Se você chegou até aqui, é porque reconhece que sua expertise merece ser vista e respeitada.
                  <span className="text-yellow-300">
                    Você não precisa virar "influencer" - você precisa virar uma AUTORIDADE.
                  </span>
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-4 text-yellow-300">Meu Compromisso Com Você:</h3>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Estratégia personalizada para seu perfil</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Acompanhamento próximo e dedicado</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Resultados mensuráveis e consistentes</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Transparência total no processo</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Suporte direto via WhatsApp</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span>Garantia de satisfação total</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-blue-100">
                  <strong className="text-white">
                    A pergunta não é "se" você vai construir sua autoridade digital.
                  </strong>
                  <br />A pergunta é: <span className="text-yellow-300">"Quando você vai começar?"</span>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-4 text-lg shadow-xl transform hover:scale-105 transition-all duration-200"
                    onClick={() => document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Quero Começar Agora, Tetel!
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg bg-transparent shadow-xl"
                    onClick={() => handleWhatsAppClick("Mensagem Final WhatsApp")}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Conversar Primeiro
                  </Button>
                </div>

                <div className="text-center">
                  <p className="text-blue-200 text-sm">
                    💬 <strong>Resposta garantida em até 2 horas</strong> • 🔒 Seus dados estão seguros
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-8">
              <p className="text-blue-200 italic text-lg">
                "Sua expertise já existe. Agora vamos fazer o mundo reconhecê-la."
              </p>
              <p className="text-white font-semibold mt-2">— Tetel</p>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário */}
      <section id="formulario" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-blue-200 text-blue-700 px-4 py-2 mb-4">
              FALE CONOSCO
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Entre em <span className="text-blue-600">Contato</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Preencha o formulário abaixo para mais informações sobre nossos planos e como construir sua autoridade
              digital.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Label htmlFor="name">Nome Completo</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-4">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Label htmlFor="phone">Telefone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-4">
                <Label htmlFor="segment">Segmento</Label>
                <Input
                  id="segment"
                  value={formData.segment}
                  onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-4">
              <Label htmlFor="position">Posição</Label>
              <Input
                id="position"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                required
              />
            </div>

            <div className="space-y-4">
              <Label htmlFor="challenge">Principal Desafio</Label>
              <Textarea
                id="challenge"
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                required
              />
            </div>

            <div className="space-y-4">
              <Label htmlFor="plan">Plano de Interesse</Label>
              <Select value={formData.plan} onValueChange={(value) => setFormData({ ...formData, plan: value })}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selecione um plano" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Diagnóstico Digital - R$ 497">Diagnóstico Digital - R$ 497</SelectItem>
                  <SelectItem value="Autoridade Completa - R$ 2.997">Autoridade Completa - R$ 2.997</SelectItem>
                  <SelectItem value="Plano Básico - R$ 1.997">Plano Básico - R$ 1.997</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
              <ArrowRight className="w-5 h-5 mr-2" />
              Enviar
            </Button>
          </form>
        </div>
      </section>

      {/* Modal de Agradecimento */}
      {showThankYou && (
        <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-6 max-w-lg w-full relative animate-in zoom-in-95 duration-300 shadow-2xl">
            <button
              onClick={() => setShowThankYou(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center space-y-4">
              {/* Header compacto */}
              <div className="relative">
                <div className="w-16 h-16 mx-auto mb-3">
                  <Image
                    src="/tetel-photo.jpg"
                    alt="Tetel"
                    width={64}
                    height={64}
                    className="rounded-full border-2 border-green-100 shadow-lg"
                  />
                  <div className="absolute -bottom-1 -right-1 bg-green-500 text-white text-xs px-1.5 py-0.5 rounded-full font-medium">
                    ✓
                  </div>
                </div>
                <div className="text-2xl mb-1">🎉</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Dados Recebidos!</h3>
                <p className="text-sm text-gray-600">Obrigado pelo seu interesse</p>
              </div>

              {/* Próximos passos simplificado */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="text-lg font-bold text-blue-900 mb-3">📋 Próximos Passos:</h4>
                <div className="space-y-2 text-left text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      1
                    </div>
                    <span className="text-blue-900">Análise do seu perfil</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      2
                    </div>
                    <span className="text-blue-900">Contato via WhatsApp em até 2h</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      3
                    </div>
                    <span className="text-blue-900">Consultoria estratégica</span>
                  </div>
                </div>
              </div>

              {/* Tempo de resposta */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-green-800 font-semibold text-sm">⚡ Resposta em até 2 horas</p>
                </div>
              </div>

              {/* Contato */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                  <MessageCircle className="w-4 h-4 text-green-600" />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">WhatsApp</p>
                    <p className="text-gray-600">(82) 99917-6900</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-gray-50 rounded-lg">
                  <Mail className="w-4 h-4 text-blue-600" />
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">contato@tetel.online</p>
                  </div>
                </div>
              </div>

              {/* Botões de ação */}
              <div className="flex gap-2">
                <Button
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white text-sm py-2"
                  onClick={() => {
                    setShowThankYou(false)
                    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                      navigator.userAgent,
                    )
                    if (isMobile) {
                      // Tentar abrir o app nativo do WhatsApp no mobile
                      const whatsappUrl = `whatsapp://send?phone=5582999176900&text=${encodeURIComponent("Olá Tetel! Vi sua landing page e gostaria de mais informações sobre Autoridade Digital.")}`
                      window.location.href = whatsappUrl

                      // Fallback para versão web se o app não abrir
                      setTimeout(() => {
                        window.open(
                          `https://wa.me/5582999176900?text=${encodeURIComponent("Olá Tetel! Vi sua landing page e gostaria de mais informações sobre Autoridade Digital.")}`,
                          "_blank",
                        )
                      }, 1000)
                    } else {
                      handleWhatsAppClick("Modal Agradecimento")
                    }
                  }}
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  WhatsApp
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-gray-300 bg-transparent text-sm py-2"
                  onClick={() => setShowThankYou(false)}
                >
                  Fechar
                </Button>
              </div>

              {/* Assinatura compacta */}
              <div className="border-t border-gray-200 pt-3">
                <p className="text-gray-600 italic text-xs">"Sua jornada digital começa agora!" — Tetel</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
