const { dbConnection, Sequelize } = require('../../config/dbConfig')
const ClasseModel = require('./Classe')
const TurmaModel = require('./Turma')
const AlunoModel = dbConnection.define('alunos', {
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    identidade: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },

    dataNascimento: {
        type: Sequelize.DATE,
    },
    sexo: {
        type: Sequelize.STRING,
        enum: ['Masculino', "Feminino"],
        allowNull: false
    }
})

//Relacionamento entre tabelas
//Turma e aluno
TurmaModel.hasMany(AlunoModel)
AlunoModel.belongsTo(TurmaModel)

//Aluno e classe
ClasseModel.hasMany(AlunoModel)
AlunoModel.belongsTo(ClasseModel)


module.exports = AlunoModel