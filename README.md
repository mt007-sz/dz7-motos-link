# DZ7 Motos: página de link para o WhatsApp

Página para o link da bio do Instagram. Feita com **React (Vite)** no visual e **Node + Express** no servidor.

Cada botão aponta para `<assunto>`. O Node registra o clique em `data/cliques.log` e redireciona para o WhatsApp com uma mensagem pronta. O número da loja fica só no servidor (`.env`).

## Como rodar

Requisitos: Node 18 ou mais novo.

```bash
npm install
cp .env.example .env     # depois edite o .env e coloque o número do WhatsApp
npm run dev              # abre em http://localhost:5173
```

## Colocar no ar

```bash
npm run build            # gera a pasta dist/
npm start                # servidor em http://localhost:3000
```

Hospedagens que rodam Node (Render, Railway, Fly.io ou uma VPS) funcionam bem. Lá, defina a variável `WHATSAPP_NUMBER` e use `npm run build` como build e `npm start` como comando de início.

## O que editar

| O quê | Onde |
| --- | --- |
| Número do WhatsApp | `.env` (`WHATSAPP_NUMBER`) |
| Endereço, horário e frase de apresentação | `src/App.jsx` (objeto `STORE`) |
| Botões e mensagens do WhatsApp | `shared/topics.js` |
| Cores e fontes | `src/styles.css` (variáveis no topo) |
| Logo | `public/logo.png` |

## Ver os cliques

```bash
cat data/cliques.log
```

Cada linha é um clique, com data, botão e origem.
