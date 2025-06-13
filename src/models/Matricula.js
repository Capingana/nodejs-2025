
const { dbConnection, Sequelize } = require('../../config/dbConfig')
const AlunoModel = require('./Aluno')
const TurmaModel = require('./Turma')

const MatriculaModel = dbConnection.define('matriculas', {
    dataMatricula: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    }
}, { timestamps: false })

AlunoModel.belongsToMany(TurmaModel, { through: MatriculaModel })
TurmaModel.belongsToMany(AlunoModel, { through: MatriculaModel })

module.exports = MatriculaModel
