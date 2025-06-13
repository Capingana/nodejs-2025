const { dbConnection, Sequelize } = require('../../config/dbConfig');
const AnoLectivoModel = require('./AnoLectivo');
const ClasseModel = require('./Classe');
const CursoModel = require('./Curso');
const PeriodoModel = require('./Periodo');
const TurmaModel = dbConnection.define('turmas', {
    nome:
    {
        type: Sequelize.STRING,
        allowNull: false
    }
},
    { timestamps: false }
);

//Relacionamento entre tabelas
//Turma e curso
TurmaModel.belongsTo(AnoLectivoModel, { foreignKey: 'anolectivoId' })
AnoLectivoModel.hasMany(TurmaModel, { foreignKey: 'anolectivoId' })
//Turma e ano lectivo
TurmaModel.belongsTo(CursoModel, { foreignKey: 'cursoId' })
CursoModel.hasMany(TurmaModel, { foreignKey: 'cursoId' });
//Turma e periodo
TurmaModel.belongsTo(PeriodoModel, { foreignKey: 'periodoId' })
PeriodoModel.hasMany(TurmaModel, { foreignKey: 'periodoId' })
//Turma e classe
ClasseModel.hasMany(TurmaModel, { foreignKey: 'classId' })
TurmaModel.belongsTo(ClasseModel, { foreignKey: 'classId' })


module.exports = TurmaModel