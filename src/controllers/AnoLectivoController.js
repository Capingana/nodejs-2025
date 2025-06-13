const AnoLectivoModel = require('../models/AnoLectivo');
const CursoModel = require('../models/Curso');
const TurmaModel = require('../models/Turma');
module.exports = {
    //Listagem dos anos lectivos
    async index(_request, response) {
        try {
            const anolectivos = await AnoLectivoModel.findAll({
                include: {
                    model: TurmaModel, attributes: ['nome'],
                    include: {
                        model: CursoModel, attributes: ['nome', 'isActive']
                    }
                }
            });
            response.status(200).json(anolectivos)
        } catch (error) {
            response.status(500).json({ error: error.message })
        }
    }
}