const express = require('express');
const router = express.Router();
const clientesController = require('../controllers/clientesController');

router.get("/", clientesController.formLogin);
router.get("/login", clientesController.listarClientes);


module.exports = router;