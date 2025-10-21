const clientesModel = require('../models/clientesModel');

module.exports = {
  formLogin: (req, res) => {
    res.sendFIle('formLogin.html', {root: './viwes'})
  },

  listarClientes: (req, res) => {
    const { login, senha } = req.body;
    const mensagemAcesso = clientesModel.verficairLogin(login, senha);
    res.send(`<h1>${mensagemacesso}</h1>`)
    }
};