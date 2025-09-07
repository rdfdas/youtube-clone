// Importando o Express
const express = require("express");
const path = require("path");

// Inicializando o app
const app = express();
const PORT = 3000;

// Servir arquivos estáticos (HTML, CSS, JS) da pasta atual
app.use(express.static(path.join(__dirname)));

// Rota principal
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Iniciando servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});

