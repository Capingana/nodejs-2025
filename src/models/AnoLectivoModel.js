const { dbConnection, Sequelize } = require('../../config/dbConfig')
const AnoLectivoModel = dbConnection.define('anolectivo',
    {
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        isActive: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    },
    
    { timestamps: false }
)

module.exports = AnoLectivoModel