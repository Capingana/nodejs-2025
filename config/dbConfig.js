require('dotenv').config()
const Sequelize = require('sequelize')
const dbConnection = new Sequelize
    (
        process.env.DB_NAME,
        process.env.DB_USERNAME,
        process.env.DB_PASSWORD,
        {
            host: process.env.DB_HOST,
            dialect: process.env.DB_DIALECT
        }
    )
dbConnection.sync({ force: false });
dbConnection.authenticate()
    .then(() => console.log(`Conectado com sucesso ao sequelize`))
    .catch((error) => console.log(`Houve uma falha ao se conectra com mysql:${error}`))

module.exports = { dbConnection, Sequelize }