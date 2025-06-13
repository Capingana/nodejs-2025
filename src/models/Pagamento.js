const { dbConnection, Sequelize } = require('../../config/dbConfig')
const AlunoModel = require('./Aluno')

const PagamentoModel = dbConnection.define('pagamentos', {
    valor:
    {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    },
    mes:
    {
        type: Sequelize.STRING,
        allowNull: false,
    },
    estado: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    dataPagamento: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
}, { timestamps: false })

AlunoModel.hasMany(PagamentoModel)
PagamentoModel.belongsTo(AlunoModel)