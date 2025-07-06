# 🧪 Guia Completo de Testes - Integração HubSpot

## 🔧 Configuração de Ambiente de Teste

### 1. Criar Conta de Teste HubSpot
\`\`\`bash
# Opções para teste:
1. HubSpot Free Account (recomendado)
2. HubSpot Sandbox (se tiver conta paga)
3. Conta de desenvolvedor HubSpot
\`\`\`

### 2. Variáveis de Ambiente de Teste
\`\`\`bash
# .env.local (para desenvolvimento)
HUBSPOT_PORTAL_ID=test_portal_id
HUBSPOT_FORM_ID=test_form_id  
HUBSPOT_ACCESS_TOKEN=test_access_token

# Workflows de teste
HUBSPOT_WORKFLOW_DIAGNOSTICO=test_workflow_1
HUBSPOT_WORKFLOW_COMPLETA=test_workflow_2
HUBSPOT_WORKFLOW_VIP=test_workflow_3

# Analytics de teste
NEXT_PUBLIC_GA_MEASUREMENT_ID=test_ga_id
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=test_pixel_id
\`\`\`

## 🚀 Métodos de Teste

### Método 1: Ambiente Local
\`\`\`bash
# 1. Clone o projeto
git clone [seu-repositorio]

# 2. Instale dependências
npm install

# 3. Configure .env.local com dados de teste
cp .env.example .env.local

# 4. Execute localmente
npm run dev

# 5. Acesse http://localhost:3000
\`\`\`

### Método 2: Deploy de Teste (Vercel)
\`\`\`bash
# 1. Deploy em branch separada
git checkout -b test-hubspot
git push origin test-hubspot

# 2. Configure variáveis no Vercel
# Dashboard > Settings > Environment Variables

# 3. Deploy automático em URL de preview
# Ex: test-hubspot-git-test-hubspot-username.vercel.app
\`\`\`

### Método 3: Subdomain de Teste
\`\`\`bash
# Configure um subdomínio para testes
# Ex: test.autoridadedigital.tetel.online
\`\`\`

## 📋 Checklist de Testes

### ✅ Teste 1: Conectividade HubSpot
\`\`\`javascript
// Teste manual no console do navegador
fetch('/api/hubspot-form', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Teste Usuario',
    email: 'teste@email.com',
    phone: '82999999999',
    segment: 'teste',
    position: 'Testador',
    challenge: 'Teste de integração',
    plan: 'Teste'
  })
})
.then(res => res.json())
.then(data => console.log('Resultado:', data))
\`\`\`

### ✅ Teste 2: Formulário Completo
- [ ] Preencher todos os campos obrigatórios
- [ ] Testar validação de email
- [ ] Testar validação de telefone
- [ ] Verificar seleção de planos
- [ ] Confirmar envio bem-sucedido

### ✅ Teste 3: Workflows
- [ ] Lead para Diagnóstico → Workflow correto
- [ ] Lead para Completa → Workflow correto  
- [ ] Lead para VIP → Workflow correto
- [ ] Verificar emails automáticos

### ✅ Teste 4: Fallback WhatsApp
- [ ] Simular erro HubSpot
- [ ] Verificar redirecionamento WhatsApp
- [ ] Testar mensagem personalizada

### ✅ Teste 5: Analytics
- [ ] Verificar tracking HubSpot
- [ ] Confirmar eventos Google Analytics
- [ ] Testar Facebook Pixel
- [ ] Validar conversões por plano

## 🛠️ Ferramentas de Teste

### 1. HubSpot API Testing
\`\`\`bash
# Teste direto da API HubSpot
curl -X POST \
  "https://api.hsforms.com/submissions/v3/integration/submit/PORTAL_ID/FORM_ID" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ACCESS_TOKEN" \
  -d '{
    "fields": [
      {"name": "firstname", "value": "Teste"},
      {"name": "lastname", "value": "Usuario"},
      {"name": "email", "value": "teste@email.com"}
    ]
  }'
\`\`\`

### 2. Logs de Debug
\`\`\`javascript
// Adicionar logs temporários no código
console.log('Form data:', formData)
console.log('HubSpot response:', response)
console.log('Workflow triggered:', workflowId)
\`\`\`

### 3. Network Tab (DevTools)
- Abrir F12 → Network
- Filtrar por "hubspot-form"
- Verificar status codes
- Analisar payloads

## 📊 Cenários de Teste

### Cenário 1: Usuário Completo
\`\`\`json
{
  "name": "João Silva Teste",
  "email": "joao.teste@email.com", 
  "phone": "(82) 99999-9999",
  "segment": "politico",
  "position": "Prefeito",
  "challenge": "Aumentar engajamento digital",
  "plan": "Autoridade Digital Completa - R$ 2.997"
}
\`\`\`

### Cenário 2: Dados Mínimos
\`\`\`json
{
  "name": "Maria Teste",
  "email": "maria.teste@email.com",
  "phone": "(82) 88888-8888", 
  "segment": "empresario",
  "position": "",
  "challenge": "",
  "plan": "Diagnóstico Digital - R$ 497"
}
\`\`\`

### Cenário 3: Caracteres Especiais
\`\`\`json
{
  "name": "José da Silva & Cia",
  "email": "jose+teste@email.com.br",
  "phone": "(82) 9.9999-9999",
  "segment": "profissional-liberal", 
  "position": "CEO & Founder",
  "challenge": "Desafio com 'aspas' e símbolos @#$",
  "plan": "Mentoria VIP - R$ 7.997"
}
\`\`\`

## 🔍 Verificações no HubSpot

### 1. Contacts Dashboard
- Verificar se contatos foram criados
- Conferir dados mapeados corretamente
- Validar segmentação automática

### 2. Workflows Dashboard  
- Confirmar enrollment automático
- Verificar execução das ações
- Testar emails automáticos

### 3. Forms Analytics
- Taxa de conversão do formulário
- Campos com mais erros
- Tempo de preenchimento

## 🚨 Troubleshooting

### Erro: "HubSpot configuration missing"
\`\`\`bash
# Verificar variáveis de ambiente
echo $HUBSPOT_PORTAL_ID
echo $HUBSPOT_FORM_ID  
echo $HUBSPOT_ACCESS_TOKEN
\`\`\`

### Erro: "Form submission failed"
\`\`\`javascript
// Verificar logs do servidor
console.error('HubSpot Error:', error)
// Verificar status code da resposta
console.log('Status:', response.status)
\`\`\`

### Erro: "Workflow not triggered"
\`\`\`javascript
// Verificar mapeamento de planos
function getWorkflowId(plan) {
  console.log('Plan received:', plan)
  // Adicionar logs para debug
}
\`\`\`

## 📱 Teste Mobile

### Dispositivos para Testar
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad (Safari)
- [ ] Tablet Android (Chrome)

### Pontos de Atenção Mobile
- [ ] Formulário responsivo
- [ ] Botão WhatsApp funcional
- [ ] Campos de fácil preenchimento
- [ ] Validação em tempo real

## ✅ Aprovação Final

### Antes do Go-Live
- [ ] Todos os testes passaram
- [ ] Workflows funcionando
- [ ] Analytics configurado
- [ ] Fallbacks testados
- [ ] Performance validada
- [ ] Mobile otimizado

### Configuração Produção
\`\`\`bash
# Trocar para variáveis de produção
HUBSPOT_PORTAL_ID=production_portal_id
HUBSPOT_FORM_ID=production_form_id
HUBSPOT_ACCESS_TOKEN=production_access_token
\`\`\`

## 📈 Monitoramento Pós-Launch

### Métricas para Acompanhar
- Taxa de conversão do formulário
- Tempo de resposta da API
- Erros de integração
- Qualidade dos leads
- ROI por canal

### Alertas Recomendados
- Erro na API HubSpot > 5%
- Queda na conversão > 20%
- Tempo de resposta > 3s
- Leads sem workflow > 0
