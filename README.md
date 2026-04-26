OpenCred - Backend API

## 📌 Sobre o Projeto

O OpenCred é uma plataforma de análise de crédito inteligente desenvolvida para facilitar a avaliação financeira de usuários de forma simples, rápida e acessível.

Nosso sistema permite que usuários realizem cadastro, acompanhem seu score financeiro, visualizem saldo, créditos disponíveis e histórico de transações, oferecendo uma experiência moderna e intuitiva.

Este repositório contém a API RESTful responsável pela autenticação, gerenciamento de usuários, cálculo de score e controle financeiro da plataforma.

---

# 🎯 Problema Identificado

Muitas pessoas possuem dificuldade em entender sua saúde financeira e seu potencial de crédito, principalmente pela falta de transparência dos sistemas tradicionais.

Além disso, instituições financeiras frequentemente utilizam processos complexos e pouco acessíveis para análise de crédito.

O OpenCred surge para simplficar esse processo.

---

# 👥 Público-Alvo

- Pessoas que desejam acompanhar seu score financeiro
- Usuários que buscam melhor controle de crédito pessoal
- Pequenos empreendedores
- Jovens iniciando vida financeira
- Plataformas que necessitam de análise simplificada de crédito

---

# 🚀 Solução Proposta

Criamos uma plataforma com:

- Cadastro e login seguro com JWT
- Dashboard financeiro
- Score de crédito visual
- Controle de saldo e créditos
- Histórico de transações
- Sistema preparado para expansão futura

---

# ✨ Diferenciais

- Interface simples e intuitiva
- Score visual e fácil de entender
- Estrutura escalável
- API segura com autenticação JWT
- Backend preparado para deploy em nuvem
- Integração com PostgreSQL
- Separação clara entre frontend e backend

---

# 🏗 Arquitetura

```text
Frontend (React + Vite)
        ↓
API REST (NestJS)
        ↓
Banco de Dados (PostgreSQL)
        ↓
Deploy Cloud (Railway)
⚙ Tecnologias Utilizadas
Backend
Node.js
NestJS
TypeScript
TypeORM
PostgreSQL
JWT Authentication
bcrypt
Railway (Deploy)
📁 Estrutura do Projeto
src/
├── auth/
├── users/
├── transactions/
├── score/
├── app.module.ts
├── main.ts
🔐 Funcionalidades
Autenticação
POST /auth/register

Cadastro de novo usuário

POST /auth/login

Login com geração de token JWT

Usuários
GET /users/profile

Retorna dados do usuário autenticado

Score
GET /transactions/score/:id

Retorna score financeiro do usuário

Dashboard
saldo atual
créditos disponíveis
score financeiro
movimentações
▶ Como Executar Localmente
1. Clone o projeto
git clone <repositorio>
cd opencred-backend
2. Instale as dependências
npm install
3. Configure o arquivo .env
DATABASE_URL=
JWT_SECRET=
PORT=3000
4. Execute o projeto
npm run start:dev

ou

npm run build
npm run start
☁ Deploy

Deploy realizado utilizando:

Railway (Backend + PostgreSQL)
📄 Modelo de Score

O score é calculado com base em:

saldo disponível
histórico financeiro
movimentações
créditos utilizados
consistência de operações
Exemplo simplificado:
Base inicial: 300 pontos

+ saldo positivo
+ movimentações consistentes
- uso excessivo de crédito
- saldo negativo
⚖ Decisões Técnicas
NestJS

Escolhido pela organização modular, escalabilidade e facilidade de manutenção.

PostgreSQL

Banco robusto e confiável para aplicações financeiras.

Railway

Deploy rápido e integração simples com PostgreSQL.

⚠ Limitações
Sem integração bancária real
Score ainda em modelo simplificado
Sem envio real de créditos externos
Sem sistema de notificações
🔮 Melhorias Futuras
Open Finance
integração com PIX
análise com IA
machine learning para score avançado
notificações automáticas
histórico financeiro detalhado
painel administrativo
🎥 Pitch

O projeto foi desenvolvido também com foco em apresentação prática contendo:

problema
solução
público-alvo
demonstração
diferenciais
arquitetura