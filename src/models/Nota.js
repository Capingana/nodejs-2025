const { dbConnection, Sequelize } = require('../../config/dbConfig');
const AlunoModel = require('../models/Aluno');
const DisciplinaModel = require('./Disciplina');

const NotaModel = dbConnection.define('notas', {
    nota1:
    {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    nota2:
    {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    nota3:
    {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    recurso:
    {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    media:
    {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    estado:
    {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'Recurso'
    },
},
    { timestamps: false }
);

//Nota e Aluno
AlunoModel.hasMany(NotaModel, { foreignKey: 'alunoId' })
NotaModel.belongsTo(AlunoModel, { foreignKey: 'alunoId' })
//Nota e disciplina
DisciplinaModel.hasMany(NotaModel, { foreignKey: 'disciplinaId' })
NotaModel.belongsTo(DisciplinaModel, { foreignKey: 'disciplinaId' })


module.exports = NotaModel