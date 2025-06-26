# To-Do List Backend

## Descrição

API RESTful desenvolvida em **Node.js** com **Express** e **TypeScript**.  
Gerencia as tarefas da aplicação To-Do List, permitindo operações CRUD via endpoints HTTP.

---

## Tecnologias e Ferramentas Utilizadas

- Node.js v16.15.0
- Express.js
- TypeScript
- ESLint e Prettier
- Jest para testes unitários

---

## Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO_BACKEND>

Instale as dependências:

npm install
Execute o servidor em modo desenvolvimento:

- npm run dev

Ou em modo produção:

- npm start

A API estará disponível em:
http://localhost:4000

--- 

Estrutura do Projeto

- src/
- ├── controllers/        # Lógica das rotas e manipulação dos dados
- ├── routes/             # Definição dos endpoints da API
- ├── services/           # Regras de negócio e armazenamento em memória
- ├── tests/              # Testes unitários com Jest
- └── server.ts           # Arquivo principal para iniciar o servidor

---

### Funcionalidades

- Listar todas as tarefas (GET /tasks)
- Criar uma nova tarefa (POST /tasks)
- Atualizar uma tarefa por ID (PUT /tasks/:id)
- Deletar uma tarefa por ID (DELETE /tasks/:id)
- Suporte para marcação de tarefas favoritas
- Definição de cores personalizadas para tarefas
- Validações básicas nos dados recebidos
- Armazenamento simples em memória (sem banco de dados)

--- 

### Testes

Execute os testes unitários com:

- npm test

---

### Configurações importantes
** A API roda na porta 4000 **

- Código organizado para facilitar manutenção e escalabilidade
- Configuração de ESLint e Prettier para garantir qualidade e padronização do código

