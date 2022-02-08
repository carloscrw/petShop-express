const modelPets = require("../model/pets.json")

const pestsController = {
    listaPets: (req, res) => {
        res.send("modelPets")
    }
}

module.exports = pestsController