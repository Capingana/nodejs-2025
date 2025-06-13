const { dbConnection, Sequelize } = require('../../config/dbConfig')

const UserModel = dbConnection.define('users', {
    firstname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    role: {
        type: Sequelize.STRING,
        enum: ['admin', 'user', 'teacher'],
        defaultValue: 'user'
    }
})


module.exports = UserModel