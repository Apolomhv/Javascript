const usuariosModel = require ('../models/usuariosModel');

module.exports = {
    index: (req, res) => {
        res.sendFile('usuarios.html', { root: './views' });
    },

    formulario: (req, res) => {
        res.sendFile('formLogin.html', { root: './views' });
    },

    login: (req, res) => {
        const { login, senha } = req.body;
        const mensagemAcesso = usuariosModel.verficairLogin(login, senha);
        res.send(`<h1>${mensagemAcesso}</h1>`);
    }
};