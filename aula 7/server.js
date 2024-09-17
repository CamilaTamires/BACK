// importa o Express
const express = require('express');

// Cria uma instancia do Express
const app = express();

// define a porta onde a API ira rodar
const port = 3000;

// middleware para permitir que o servidor lide com requisições no formato JSON
app.use(express.json());

// criação da rota GET na raiz ('/') que responde com uma mensagem simples
app.get('/', (req, res) => {
    res.send('API Funcionou!');
});

// Inicia o servidor e define que ele deve rodar na porta especifica (3000)
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});


app.post('/data', (req, res) => {
    const { name, age } = req.body;
    res.send(`Nome: ${name}, Idade: ${age}`)
});

