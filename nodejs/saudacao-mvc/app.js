const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware para arquivos estáticos
app.use(express.static('public'));

// Middleware para ler dados de formulários
app.use(express.urlencoded({ extended: true }));

// Rotas
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

//Usuários
const usuariosRouts = require('./routes/usuarios');
app.use('/usuarios', usuariosRouts);

//Produtos
const produtosRouts = require('./routes/produtos');
app.use('/produtos', produtosRouts);

//Criar uma nova rota
//Clientes
const clientesRouts = require('./routes/clientes');
app.use('/clientes', clientesRouts);

// Servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
