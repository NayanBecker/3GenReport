# BGReport - Editor de Documentos LaTeX

## 1. Introdução

BGReport é uma plataforma web para a criação de documentos científicos e relatórios utilizando uma abordagem moderna de editor em blocos. Permite que o usuário construa seu documento arrastando e soltando blocos de conteúdo, que são convertidos em tempo real para código LaTeX, combinando a facilidade de uso de editores modernos com o poder e a qualidade tipográfica do LaTeX.

Este repositório contém o código para o backend (API de gerenciamento e compilação) e o frontend (editor visual).

## 2. Tecnologias Utilizadas

**Backend:**
- **Runtime:** Node.js
- **Framework:** Fastify
- **Linguagem:** TypeScript
- **Banco de Dados:** SQLite
- **ORM:** Prisma
- **Autenticação:** JWT (JSON Web Tokens)
- **Containerização:** Docker & Docker Compose
- **Compilador:** pdflatex (via TeX Live no container)

**Frontend:**
- **Framework:** React
- **Builder:** Vite
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Editor de Texto:** Slate.js
- **Drag-and-Drop:** dnd-kit

## 3. Sobre o Projeto

O projeto é dividido em duas pastas: `backend` e `frontend`. Cada uma precisa ser iniciada separadamente.

### Backend

O backend **requer o Docker** instalado para funcionar, pois o ambiente de compilação LaTeX está encapsulado em um container.

1.  **Navegue até a pasta do backend:**
    ```bash
    cd Backend_BGReport
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```

3.  **Crie e configure o banco de dados:**
    ```bash
    npx prisma migrate dev --name init
    ```

4.  **Inicie o servidor com Docker Compose:**
    Este comando irá construir e iniciar o container em segundo plano.
    ```bash
    docker-compose up --build -d
    ```

5.  O backend agora está rodando na porta `3000`.

### Frontend

O frontend é uma aplicação React padrão.

1.  **Navegue até a pasta do frontend:**
    ```bash
    cd Frontend_BGReport
    ```

2.  **Instale as dependências:**
    ```bash
    npm install
    ```
3.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

4.  **Pronto!** A aplicação frontend estará disponível no seu navegador, geralmente em `http://localhost:5173`. Ela fará as chamadas de API para o backend que está rodando em `http://localhost:3000`.

