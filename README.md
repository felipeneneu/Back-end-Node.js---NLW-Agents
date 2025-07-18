# NLW Agents

Backend API para o projeto NLW Agents, desenvolvido com Fastify e PostgreSQL.

## 🛠️ Tecnologias

- **Runtime**: Node.js com TypeScript
- **Framework**: Fastify
- **Database**: PostgreSQL com pgvector
- **ORM**: Drizzle ORM
- **Validação**: Zod
- **Linter**: Biome
- **Containerização**: Docker

## 📁 Estrutura do Projeto

```
src/
├── db/
│   ├── connection.ts
│   ├── migrations/
│   ├── schema/
│   └── seed.ts
├── http/
│   └── routes/
├── env.ts
└── server.ts
```

## 🚀 Setup

### Pré-requisitos

- Node.js 18+
- Docker e Docker Compose

### Instalação

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
# Crie um arquivo .env na raiz do projeto
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
```

4. Inicie o banco de dados:
```bash
docker-compose up -d
```

5. Execute as migrações:
```bash
npm run db:migrate
```

6. (Opcional) Execute o seed:
```bash
npm run db:seed
```

7. Inicie o servidor:
```bash
npm run dev
```

## 📋 Scripts Disponíveis

- `npm run dev` - Inicia o servidor em modo desenvolvimento
- `npm run start` - Inicia o servidor em produção
- `npm run db:generate` - Gera novas migrações
- `npm run db:migrate` - Executa migrações pendentes
- `npm run db:seed` - Popula o banco com dados iniciais

## 🔧 Padrões do Projeto

- **Arquitetura**: API REST com Fastify
- **Validação**: Schema validation com Zod
- **Database**: Migrations com Drizzle Kit
- **CORS**: Configurado para localhost:5173
- **TypeScript**: Configurado com strict mode

## 🌐 Endpoints

- `GET /health` - Health check
- `GET /rooms` - Lista salas
- `POST /rooms` - Cria nova sala
- `GET /rooms/:id/questions` - Lista questões de uma sala
- `POST /questions` - Cria nova questão

## 📊 Banco de Dados

- PostgreSQL com extensão pgvector para embeddings
- Migrations automáticas com Drizzle Kit
- Schema em TypeScript com tipagem forte 