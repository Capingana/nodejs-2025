const { dbConnection, Sequelize } = require('../../config/dbConfig')
const ProfessorModel = dbConnection.define('professores', {
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
    epecialidade: {
        type: Sequelize.STRING,
    }
})

module.exports = ProfessorModel