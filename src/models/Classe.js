const { dbConnection, Sequelize } = require('../../config/dbConfig')

const ClasseModel = dbConnection.define('classes',
    {
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, { timestamps: false }

)

module.exports = ClasseModel