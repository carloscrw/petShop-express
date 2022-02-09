var express = require('express');
var router = express.Router();
let pestsController = require("../controller/petsController");
let sevicosController = require('../controller/servicosController');
let usuarioController = require('../controller/usuarioController')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/cadastro', usuarioController.cadastro);

router.get('/pets', pestsController.listaPets);
router.get('/servicos', sevicosController.listaServicos);

module.exports = router;