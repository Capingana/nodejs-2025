const { dbConnection, Sequelize } = require('../../config/dbConfig')

const PeriodoModel = dbConnection.define('periodos', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }
}, { timestamps: false }

)

module.exports = PeriodoModel