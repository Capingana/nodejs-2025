const { dbConnection, Sequelize } = require('../../config/dbConfig');
const ProfessorModel = require('../models/Professor')
const DisciplinaModel = dbConnection.define('disciplinas', {
    nome:
    {
        type: Sequelize.STRING,
        allowNull: false
    }
},
    { timestamps: false }
);

//Disciplina e Professor
ProfessorModel.hasMany(DisciplinaModel, { foreignKey: 'professorId' })
DisciplinaModel.belongsTo(ProfessorModel, { foreignKey: 'professorId' })

module.exports = DisciplinaModel