# Integração HubSpot - Autoridade Digital Tetel

## ✅ Status da Integração
A landing page está **TOTALMENTE INTEGRADA** com o HubSpot. Aqui estão os detalhes:

## 🔧 Configurações Necessárias

### Variáveis de Ambiente (.env)
\`\`\`bash
# HubSpot Configuration
HUBSPOT_PORTAL_ID=your_portal_id_here
HUBSPOT_FORM_ID=your_form_id_here
HUBSPOT_ACCESS_TOKEN=your_access_token_here

# HubSpot Workflows
HUBSPOT_WORKFLOW_DIAGNOSTICO=workflow_id_for_diagnostico
HUBSPOT_WORKFLOW_COMPLETA=workflow_id_for_completa
HUBSPOT_WORKFLOW_VIP=workflow_id_for_vip
\`\`\`

## 📊 Funcionalidades Integradas

### 1. Captura de Leads
- ✅ Formulário principal envia dados para HubSpot
- ✅ Campos mapeados: nome, email, telefone, segmento, posição, desafio, plano
- ✅ Fallback para WhatsApp em caso de erro

### 2. Workflows Automáticos
- ✅ **Diagnóstico Digital**: Workflow específico para leads do plano básico
- ✅ **Autoridade Completa**: Workflow para o plano intermediário
- ✅ **Mentoria VIP**: Workflow para o plano premium

### 3. Tracking e Analytics
- ✅ **HubSpot Tracking Code**: Rastreamento de visitantes
- ✅ **Event Tracking**: Conversões por valor do plano
- ✅ **Google Analytics**: Integração adicional
- ✅ **Facebook Pixel**: Para remarketing

### 4. Dados Capturados
\`\`\`javascript
{
  firstname: "Nome",
  lastname: "Sobrenome", 
  email: "email@exemplo.com",
  phone: "(82) 99999-9999",
  segment: "politico|empresario|profissional-liberal|executivo",
  position: "Cargo/Posição",
  challenge: "Principal desafio digital",
  selected_plan: "Plano selecionado"
}
\`\`\`

## 🚀 Como Configurar

### Passo 1: Obter Credenciais HubSpot
1. Acesse seu HubSpot
2. Vá em Settings > Integrations > API Key
3. Copie o Portal ID e Access Token
4. Crie um formulário e copie o Form ID

### Passo 2: Configurar Workflows
1. Crie 3 workflows no HubSpot:
   - Workflow para Diagnóstico Digital
   - Workflow para Autoridade Completa  
   - Workflow para Mentoria VIP
2. Copie os IDs dos workflows

### Passo 3: Configurar Variáveis
1. Adicione as variáveis no arquivo .env
2. Deploy da aplicação
3. Teste o formulário

## 📈 Métricas Disponíveis
- **Taxa de Conversão** por plano
- **Origem do Tráfego**
- **Comportamento do Usuário**
- **ROI por Canal**
- **Lifetime Value** dos leads

## 🔄 Fluxo de Automação
1. **Lead preenche formulário** → HubSpot recebe dados
2. **Sistema identifica plano** → Aciona workflow específico
3. **Workflow envia emails** → Sequência personalizada por plano
4. **Lead é nutrido** → Até conversão em cliente

## ⚠️ Importante
- Todos os dados são enviados de forma segura via HTTPS
- Compliance com LGPD/GDPR
- Fallback para WhatsApp garante que nenhum lead seja perdido
- Tracking de eventos permite otimização contínua
