const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Servir arquivos estáticos da raiz do projeto
app.use(express.static(path.join(__dirname)));

// Rota principal que serve o Index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Index.html'));
});

// Fallback para qualquer outra rota
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'Index.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📱 Windows 11 Hyper-Droid disponível em http://localhost:${PORT}`);
});
