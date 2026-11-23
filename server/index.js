import 'dotenv/config';
import express from 'express';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { topics, MAIN_MESSAGE } from '../shared/topics.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const dist = path.join(root, 'dist');
const dataDir = path.join(root, 'data');
const clicksFile = path.join(dataDir, 'cliques.log');

const PORT = process.env.PORT || 3000;
const NUMBER = (process.env.WHATSAPP_NUMBER || '').replace(/\D/g, '');

const messages = { principal: MAIN_MESSAGE };
for (const t of topics) messages[t.id] = t.message;

const app = express();
app.disable('x-powered-by');

// Registra o clique (data, botão, origem) e redireciona para o WhatsApp.
app.get('/go/:topic', (req, res) => {
  const message = messages[req.params.topic];
  if (!message) return res.status(404).send('Assunto não encontrado.');
  if (!NUMBER) {
    return res.status(500).send('Defina WHATSAPP_NUMBER no arquivo .env (ex.: 5511999999999).');
  }

  const line = JSON.stringify({
    em: new Date().toISOString(),
    botao: req.params.topic,
    origem: req.get('referer') || null,
  });
  fs.mkdir(dataDir, { recursive: true }, () => fs.appendFile(clicksFile, line + '\n', () => {}));

  const url = `https://wa.me/${NUMBER}?text=${encodeURIComponent(message)}`;
  res.redirect(302, url);
});

app.use(express.static(dist));

app.listen(PORT, () => {
  console.log(`DZ7 Motos no ar: http://localhost:${PORT}`);
  if (!NUMBER) console.warn('Atenção: WHATSAPP_NUMBER não definido no .env');
});
