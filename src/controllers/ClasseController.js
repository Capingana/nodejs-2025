const ClasseModel = require('../models/Classe');
const TurmaModel = require('../models/Turma');

module.exports = {
    async getAllCurso(_request, response) {
        try {
            const classes = await ClasseModel.findAll({ include: ['turmas'] });
            response.status(200).json(classes)
        } catch (error) {
            response.status(500).json({ error: error.message })
        }
    },
    //Listagem de uma classe especifica pelo seu id
    async showClasseById(request, response) {
        try {
            const classe = await ClasseModel.findOne({
                where: {
                    id: request.params.id
                },
                include:
                {
                    model: TurmaModel, attributes: ['nome'],
                    include: ['periodo', 'anolectivo', 'curso']
                }
            });
            if (classe === null) return response.status(404).json({ error: 'Classe não encontrada.' })
            response.status(200).json(classe)
        } catch (error) {
            response.status(500).json({ error: error.message })
        }
    }
}