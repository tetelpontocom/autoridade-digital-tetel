Write-Host "========================================"
Write-Host " DEPLOY SEGURO — TETELPONTOCOM "
Write-Host " Next.js + Vercel + GitHub "
Write-Host "========================================"

# 1) Sanear ambiente local
Write-Host ">> Limpando build e dependências locais"
Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue

# 2) Reinstalar dependências
Write-Host ">> Instalando dependências"
npm install
if ($LASTEXITCODE -ne 0) {
  Write-Host "❌ Falha ao instalar dependências."
  exit 1
}

# 3) Atualizar núcleo (seguro)
Write-Host ">> Atualizando Next / React (núcleo)"
npm install next@latest react@latest react-dom@latest
if ($LASTEXITCODE -ne 0) {
  Write-Host "❌ Falha ao atualizar núcleo."
  exit 1
}

# 4) Auditoria de segurança
Write-Host ">> Auditando segurança (high/critical)"
npm audit --audit-level=high
if ($LASTEXITCODE -ne 0) {
  Write-Host "❌ Vulnerabilidades críticas encontradas. Deploy abortado."
  exit 1
}

# 5) Build local
Write-Host ">> Executando build local"
npm run build
if ($LASTEXITCODE -ne 0) {
  Write-Host "❌ Build falhou. Corrija antes de subir."
  exit 1
}

Write-Host "✅ Projeto OK para commit e deploy no Vercel"
