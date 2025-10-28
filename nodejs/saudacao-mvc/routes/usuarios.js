const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.get("/login", usuariosController.formLogin); 
router.post("/login", usuariosController.login);    

module.exports = router;