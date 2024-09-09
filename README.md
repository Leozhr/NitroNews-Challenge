# 🧪 Teste de Proficiência Técnica Front-End - Nitronews

<br />

## 🎯 Objetivo

Desenvolver duas mini-aplicações idênticas que interajam com um backend rodando em Docker, através de requisições HTTP, implementadas da seguinte maneira:
- **Aplicação 1:** Utilizando React.
- **Aplicação 2:** Utilizando Javascript ES6 (ou TypeScript) com Vite como bundler.

<br />

## ⚙️ Como rodar o backend

Para rodar o backend em Docker, execute os seguintes comandos dentro da pasta `backend`:

```bash
docker build --tag 'backend_teste_tecnico' .
docker run -p 8080:8080 backend_teste_tecnico
```

O servidor estará disponível no endereço: http://localhost:8080.

<br />

## 🚀 Aplicações Desenvolvidas

### 🖥️ Aplicação 1 - React

Esta aplicação foi desenvolvida utilizando React para facilitar a criação de interfaces dinâmicas. O layout foi feito de forma responsiva e com foco na usabilidade.

### Bibliotecas utilizadas:
- **React:** Criação da interface e controle dos estados.
- **Axios:** Para realizar as requisições HTTP ao backend.
- **React Hook Form:** Para manipulação e validação dos dados do formulário.
- **Toastify:** Para exibir notificações amigáveis ao usuário.
- **Zod:** Para validação de dados do formulário.
- **TypeScript:** Para adicionar tipagem estática ao projeto.
- **Classnames:** Para manipulação condicional de classes CSS.
- **Lucide-react:** Ícones usados na interface da aplicação.

### 📂 Branch: `react-app`

<br />

### 🖥️ Aplicação 2 - Vite com TypeScript

Nesta versão, utilizei Vite para criar um ambiente leve e rápido, aliado ao TypeScript e Babel, proporcionando tipagem estática, compatibilidade com versões mais antigas de JavaScript e segurança no desenvolvimento.

### Ferramentas e bibliotecas utilizadas:
- **Vite:** Ferramenta de build rápida e moderna.
- **TypeScript:** Para uma codificação mais segura e tipada.
- **Axios:** Para realizar as requisições HTTP ao backend.
- **Babel:** Para garantir compatibilidade com diferentes navegadores.

### 📂 Branch: `vite-vanilla-ts`

<br />

## 📝 Requisitos da Aplicação

A aplicação consiste em um formulário de cadastro com os seguintes campos:

- **Nome** (Obrigatório)
- **Email** (Obrigatório, email válido)
- **Senha** (Obrigatório, com pelo menos 8 caracteres, incluindo maiúsculas, minúsculas e números)
- **Confirmação de senha** (Obrigatório, deve ser idêntico ao campo "Senha")

A validação é feita no front-end e há notificações para os seguintes casos:

- Campos obrigatórios não preenchidos.
- Emails indisponíveis para cadastro: `teste@exemplo.com`, `joao@exemplo.com`, `maria@acme.net`.

<br />

## 🎯 Como executar

> **Observação:** Antes de testar as aplicações frontend, certifique-se de que o Docker está em execução com o backend.

<br />

**1. Clone o repositório:**

```bash
git clone https://github.com/Leozhr/NitroNews-Challenge.git
```

<br />

**2. Instale as dependências e execute as aplicações nas branches apropriadas:**

- Para a aplicação React (Branch: `react-app`):

```bash
cd NitroNews-Challenge
git checkout react-app
cd frontend
npm install
npm run dev
```

- Para a aplicação Vanilla (Branch: `vite-vanilla-ts`):

```bash
cd NitroNews-Challenge
git checkout vite-vanilla-ts
cd frontend
npm install
npm run dev
```

<br />

## 📧 Contato

- **Email:** leonardo.leal202@gmail.com
- **LinkedIn:** [leohdev](https://www.linkedin.com/in/leohdev/)