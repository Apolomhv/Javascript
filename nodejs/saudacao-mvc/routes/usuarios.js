var express = require("express");
var router = express.Router();
const usuariosController = require('../controllers/usuariosController');

/* GET users listing. 
router.get('/', function(req, res, next) {
  res.send('<h1>Bem-vindo(a) a rota Usuários!</h1>');
}); */

router.get('/', usuariosController.index);
router.get('/login', usuariosController.formulario);
router.post('/login', usuariosController.login);

module.exports = router;
