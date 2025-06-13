const AlunoModel = require('../models/Aluno');
const TurmaModel = require('../models/Turma');
const NotaModel = require('../models/Nota');
module.exports = {
    async getAllStudents(_request, response) {
        try {
            const estudantes = await AlunoModel.findAll({
                include: {
                    model: TurmaModel,
                    include: ['curso', 'periodo', 'class', 'anolectivo']
                }
            });
            response.status(200).json(estudantes);
        } catch (error) {
            response.status(500).json({ error: error.message })
        }
    },
    //Listagem de aluno pelo seu id
    async showStudentById(request, response) {
        try {
            const estudante = await AlunoModel.findOne({
                where: { id: request.params.id },
                include: [
                    {
                        model: TurmaModel, attributes: ['nome'],
                        include: ['curso', 'periodo', 'class', 'anolectivo']
                    }, {
                        model: NotaModel, include: ['disciplina']
                    }
                ]
            });
            response.status(200).json(estudante);
        } catch (error) {
            response.status(500).json({ error: error.message })
        }
    },
}