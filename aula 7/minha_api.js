// importa o Express
const express = require('express');

// Cria uma instancia do Express
const app = express();

// define a porta onde a API ira rodar
const port = 3000;

// criação da rota GET na raiz ('/') que responde com uma mensagem simples
app.get('/', (req, res) => {
    res.send('Bem-vindo à minha API!');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

