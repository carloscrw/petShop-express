var express = require('express');
const { route } = require('express/lib/application');
var router = express.Router();
const indexController = require('../controller/indexController')
const pestsController = require("../controller/petsController");
const sevicosController = require('../controller/servicosController');
const usuarioController = require('../controller/usuarioController')


/* GET home page. */
router.get('/', indexController.telaPrincipal)
router.get('/cadastro', usuarioController.cadastro);
router.get('/login', usuarioController.login);
router.get('/contato', usuarioController.contato);
router.get('/sobre', usuarioController.sobre)
router.get('/pets', pestsController.listaPets);
router.get('/servicos', sevicosController.listaServicos);

module.exports = router;