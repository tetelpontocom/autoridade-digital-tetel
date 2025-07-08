"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export default function TestForm() {
  const [testResults, setTestResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const runTests = async () => {
    setIsLoading(true)
    setTestResults([])

    const tests = [
      {
        name: "Teste Conectividade HubSpot",
        data: {
          name: "Teste Conectividade",
          email: "teste.conectividade@email.com",
          phone: "82999999999",
          segment: "teste",
          position: "Testador",
          challenge: "Teste de conectividade",
          plan: "Teste Conectividade",
        },
      },
      {
        name: "Teste Diagnóstico Digital",
        data: {
          name: "João Teste Diagnóstico",
          email: "joao.diagnostico@email.com",
          phone: "82888888888",
          segment: "politico",
          position: "Prefeito",
          challenge: "Teste workflow diagnóstico",
          plan: "Diagnóstico Digital - R$ 497",
        },
      },
    ]

    for (const test of tests) {
      try {
        const response = await fetch("/api/hubspot-form", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(test.data),
        })

        const result = await response.json()

        setTestResults((prev) => [
          ...prev,
          {
            name: test.name,
            status: response.ok ? "success" : "error",
            response: result,
            statusCode: response.status,
          },
        ])
      } catch (error) {
        setTestResults((prev) => [
          ...prev,
          {
            name: test.name,
            status: "error",
            response: { error: error.message },
            statusCode: 0,
          },
        ])
      }

      await new Promise((resolve) => setTimeout(resolve, 1000))
    }

    setIsLoading(false)
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">🧪 Painel de Testes HubSpot</h2>
        <p className="text-gray-600 mb-6">
          Use este painel para testar a integração HubSpot antes do lançamento oficial.
        </p>

        <div className="flex gap-4 mb-6">
          <Button onClick={runTests} disabled={isLoading}>
            {isLoading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
            Executar Testes
          </Button>
        </div>

        {testResults.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Resultados dos Testes:</h3>

            {testResults.map((result, index) => (
              <Card key={index} className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">{result.name}</h4>
                  <div className="flex items-center gap-2">
                    {result.status === "success" ? (
                      <Badge className="bg-green-100 text-green-800">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        Sucesso
                      </Badge>
                    ) : (
                      <Badge className="bg-red-100 text-red-800">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        Erro
                      </Badge>
                    )}
                    <Badge variant="outline">Status: {result.statusCode}</Badge>
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded text-sm">
                  <pre>{JSON.stringify(result.response, null, 2)}</pre>
                </div>
              </Card>
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}
