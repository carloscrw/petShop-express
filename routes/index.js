var express = require('express');
var router = express.Router();
let pestsController = require("../controller/petsController");
const sevicosController = require('../controller/servicosController');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/pets', pestsController.listaPets)
router.get('/servicos', sevicosController.listaServicos)

module.exports = router;