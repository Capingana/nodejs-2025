const AnoLectivoModel = require('../models/AnoLectivoModel')
module.exports = {
    //Listagem dos anos lectivos
    async index(_request, response) {
        try {
            const anolectivos = await AnoLectivoModel.findAll();
            response.status(200).json(anolectivos)
        } catch (error) {
            response.status(500).json({ error: error.message })
        }
    }
}