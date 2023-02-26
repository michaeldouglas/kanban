### Sistema de Kanban

Sistema simples de Kanban React, Node.js e Docker.

## Subindo o ambiente com Docker

Primeiramente altere a permisão do script shell

```bash
chmod +x up.sh
```

Em seguida execute:

```bash
./up.sh
```

## Subindo o ambiente sem Docker

Para subir o ambiente sem Docker basta entrar nas pastas e executar os comandos:

Ambiente Back:

```bash
cd back
npm i
npm run dev
```

Ambiente Cliente:

```bash
cd client
npm i
npm start
```