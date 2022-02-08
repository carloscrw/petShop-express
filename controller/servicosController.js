const modelServico = require('../model/servico.json')

const sevicosController = {
    listaServicos: (req, res) => res.send(modelServico)

}



module.exports = sevicosController