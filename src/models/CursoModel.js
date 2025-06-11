const { dbConnection, Sequelize } = require('../../config/dbConfig')

const CursoModel = dbConnection.define('cursos', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    duration: {
        type: Sequelize.INTEGER,
        defaultValue: 4,
        allowNull: false
    },
    isActive: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
    }
})

module.exports = CursoModel