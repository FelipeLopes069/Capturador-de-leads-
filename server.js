const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

// Model de Lead
const Lead = require('./models/Lead');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// Conexão com o MongoDB local
const MONGO_URI = 'mongodb://127.0.0.1:27017/leads';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('✅ Conectado ao MongoDB local');
  })
  .catch(err => {
    console.error('❌ Erro ao conectar no MongoDB:', err);
  });

// Rota para salvar novo lead
app.post('/api/lead', async (req, res) => {
  const { nome, email, contato } = req.body;
  if (!nome || !email || !contato) {
    return res.status(400).json({ erro: 'Nome, email e contato são obrigatórios' });
  }

  try {
    const novoLead = new Lead({ nome, email, contato });
    await novoLead.save();
    res.json({ sucesso: true, mensagem: 'Lead salvo com sucesso!' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao salvar lead no banco' });
  }
});

// Rota para listar os leads
app.get('/api/leads', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ data: -1 });
    res.json(leads);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar leads no banco' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});