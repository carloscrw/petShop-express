const sevicosController = {
    listaServicos: (req, res) => {
        res.render('servicos')

    },
    sobre: (req, res) => {
        res.render('sobre')
    }

}



module.exports = sevicosController