/**
 * SCRIPT DE VERIFICAÇÃO DE SEGURANÇA — TETELPONTOCOM
 * CVE-2025-55182 / CVE-2025-66478 (React Server Components)
 *
 * COMO USAR:
 * 1) Crie a pasta "scripts" na raiz do projeto
 * 2) Salve este arquivo como: scripts/check-tetel-rsc-security.js
 * 3) Rode no terminal:
 *        node scripts/check-tetel-rsc-security.js
 *
 * O script detecta:
 * - Versões vulneráveis de React 19
 * - Versões vulneráveis de Next.js 15/16
 * - Versões vulneráveis de react-server-dom-*
 *
 * Ele imprime:
 * - ALERTAS
 * - Diagnóstico completo
 * - COMANDOS DE CORREÇÃO (duas opções: mínima segura + mais recente segura)
 */

const path = require("path");

function loadPackage(pkg) {
  try {
    return require(require.resolve(`${pkg}/package.json`, { paths: [process.cwd()] }));
  } catch {
    return null;
  }
}

console.log("\n=== 🔒 VERIFICAÇÃO DE SEGURANÇA — TETELPONTOCOM ===\n");

//
// 1. DEFINIÇÃO DAS VERSÕES
//

// React vulnerável — conforme CVE-2025-55182
const vulnerableReact = ["19.0.0", "19.1.0", "19.1.1", "19.2.0"];

// React seguro:
const minimalSafeReact = "19.0.1";
const latestSafeReact = "19.2.1";

// Next.js vulnerável — conforme advisories oficiais
const vulnerableNext = [
  "15.0.0","15.0.1","15.0.2","15.0.3","15.0.4",
  "15.1.0","15.1.1","15.1.2","15.1.3","15.1.4","15.1.5","15.1.6","15.1.7","15.1.8",
  "15.2.0","15.2.1","15.2.2","15.2.3","15.2.4","15.2.5",
  "15.3.0","15.3.1","15.3.2","15.3.3","15.3.4","15.3.5",
  "15.4.0","15.4.1","15.4.2","15.4.3","15.4.4","15.4.5","15.4.6","15.4.7",
  "15.5.0","15.5.1","15.5.2","15.5.3","15.5.4","15.5.5","15.5.6",
  "16.0.0","16.0.1","16.0.2","16.0.3","16.0.4","16.0.5","16.0.6"
];

// Versões seguras recomendadas:
const minimalSafeNext = "15.0.5";
const latestSafeNext = "16.0.7";

//
// 2. CARREGAR DEPENDÊNCIAS DO PROJETO
//

const react = loadPackage("react");
const reactDom = loadPackage("react-dom");
const next = loadPackage("next");

const rscWebpack = loadPackage("react-server-dom-webpack");
const rscParcel = loadPackage("react-server-dom-parcel");
const rscTurbo = loadPackage("react-server-dom-turbopack");

console.log("🧩 Dependências detectadas:\n");
console.log("React:", react ? react.version : "não encontrado");
console.log("React-DOM:", reactDom ? reactDom.version : "não encontrado");
console.log("Next.js:", next ? next.version : "não encontrado");

if (rscWebpack) console.log("RSC Webpack:", rscWebpack.version);
if (rscParcel) console.log("RSC Parcel:", rscParcel.version);
if (rscTurbo) console.log("RSC Turbopack:", rscTurbo.version);

console.log("\n");

//
// 3. ANÁLISE DE VULNERABILIDADE
//

let vulnerable = false;

// React
if (react && vulnerableReact.includes(react.version)) {
  vulnerable = true;
  console.log("⚠️  ALTA SEVERIDADE: Sua versão do React é vulnerável ao CVE-2025-55182.");
}

// Next
if (next && vulnerableNext.includes(next.version)) {
  vulnerable = true;
  console.log("⚠️  ALTA SEVERIDADE: Sua versão do Next.js está vulnerável.");
}

// RSC
const rscPkgs = [rscWebpack, rscParcel, rscTurbo].filter(Boolean);
const rscVulnerable = rscPkgs.some(pkg => vulnerableReact.includes(pkg.version));

if (rscVulnerable) {
  vulnerable = true;
  console.log("⚠️  ALTA SEVERIDADE: Pacotes React Server Components vulneráveis detectados.");
}

//
// 4. RESULTADO FINAL
//

if (!vulnerable) {
  console.log("✅ Nenhuma vulnerabilidade crítica encontrada!");
  console.log("Seu projeto está usando versões seguras ou não está usando RSC.\n");
  process.exit(0);
}

//
// 5. INSTRUÇÕES DE CORREÇÃO — OPÇÕES A E B
//

console.log("\n=== 🚨 INSTRUÇÕES DE CORREÇÃO ===\n");

console.log("➡️ Opção A — Atualização mínima segura (mais estável):");
console.log(`npm install react@${minimalSafeReact} react-dom@${minimalSafeReact}`);
console.log(`npm install next@${minimalSafeNext}`);
console.log("");

console.log("➡️ Opção B — Atualização mais recente e mais segura:");
console.log(`npm install react@${latestSafeReact} react-dom@${latestSafeReact}`);
console.log(`npm install next@${latestSafeNext}`);
console.log("");

console.log("Depois de atualizar:");
console.log("1) Rode: npm install");
console.log("2) Rode: npm run build");
console.log("3) Se o build passar, faça deploy (vercel deploy)\n");

console.log("=== 🔒 Fim da verificação ===\n");
