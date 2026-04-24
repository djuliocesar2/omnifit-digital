# OmniFit Digital 🏋️‍♂️ - Sistema de Gestão Fitness

O **OmniFit Digital** é uma aplicação Full Stack projetada para modernizar a interação entre academias, personais trainers e alunos. O projeto combina uma interface de usuário de alta performance com um ecossistema digital que permite a contratação de planos e o acompanhamento dinâmico de treinos.

---

## 🎯 Objetivo do Projeto
Este software foi desenvolvido para resolver a fragmentação de informações no ambiente fitness. Ele permite que:
- **Alunos** realizem login, escolham planos e acessem fichas de treino personalizadas.
- **Academias** gerenciem a base de dados de usuários e pagamentos.
- **Ecossistema** opere com uma interface moderna baseada em Glassmorphism, focada na experiência do usuário (UX).

---

## 🛠 Tecnologias e Ferramentas

### Frontend
- **React.js**: Biblioteca principal para construção da interface SPA (Single Page Application).
- **Lucide React**: Biblioteca de ícones vetoriais para uma UI limpa.
- **States & Hooks**: Gerenciamento de sessão de usuário e navegação dinâmica.
- **CSS-in-JS**: Estilização moderna com efeitos de transparência e blur (Glassmorphism).

### Backend & Database
- **SQL (ANSI)**: Modelagem relacional completa.
- **UUID**: Identificadores únicos universais para segurança de dados.
- **PostgreSQL/MySQL**: Compatibilidade com os principais SGBDs relacionais.

---

## 🏗 Arquitetura do Sistema

A aplicação segue o modelo de camadas para garantir escalabilidade:

1.  **Interface (React)**: Responsável por capturar os dados do usuário (Login) e renderizar as visões dinâmicas (Planos e Dashboard).
2.  **Lógica de Negócio**: Processamento de e-mails para identificação automática e validação de sessão.
3.  **Persistência (SQL)**: Estrutura de dados normalizada em 3ª Forma Normal para evitar redundância.

---

## 📂 Estrutura do Repositório

```text
omnifit-digital/
├── frontend/             # Código fonte da aplicação React
│   ├── src/
│   │   ├── App.js        # Lógica central e roteamento
│   │   └── ...
│   └── package.json      # Dependências do projeto
├── database.sql          # Script de criação do Banco de Dados
└── README.md             # Documentação do projeto

🚀 Como Executar
1. Banco de Dados
Abra seu gerenciador SQL e execute o script database.sql. Ele criará as tabelas:

Usuario (Credenciais e Perfis)

Aluno (Vínculo com Planos)

Plano (Especificações e Valores)

Exercicio e Treino (Conteúdo técnico)

2. Frontend
Navegue até a pasta do frontend e inicie o servidor de desenvolvimento:

cd frontend
npm install
npm start

Acesse: http://localhost:3000

🔐 Lógica de Acesso (Destaque Técnico)
O sistema possui um fluxo de autenticação simulado que extrai o nome do usuário diretamente do input de e-mail, demonstrando o gerenciamento de estados (useState) no React para personalizar a saudação no Dashboard em tempo real.