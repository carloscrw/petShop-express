const servicos = require("../model/servico.json")


const indexController = {
    telaPrincipal: (req, res) => {

        res.render('index', { listaServicos: servicos })
    }
}

module.exports = indexController