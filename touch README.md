# 📩 Capturador de Leads

Sistema simples e funcional para capturar leads com nome, email e contato (WhatsApp ou telefone), armazenando diretamente no MongoDB local.

## 🚀 Tecnologias

- Node.js + Express
- MongoDB (local)
- HTML + CSS puro (tema preto e verde)

## 📂 Estrutura

- `/public/index.html` → Formulário de captura
- `/public/painel.html` → Painel para visualizar leads
- `/models/Lead.js` → Model do Mongo
- `/server.js` → Backend Express

## 💻 Como rodar localmente

```bash
git clone https://github.com/FelipeLopes069/Capturador-de-leads-.git
cd Capturador-de-leads-
npm install
mongod
node server.js