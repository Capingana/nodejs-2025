const UserModel = require('../models/UserModel');
const bcrypt = require('bcrypt')
module.exports = {
    async index(_request, response) {
        try {
            const users = await UserModel.findAll();
            response.status(200).json(users)
        } catch (error) {
            response.status(500).json(error.message)
        }
    },
    async store(request, response) {
        const { firstname, lastname, email, password, role } = request.body;
        try {
            const hasPassword = await bcrypt.hash(password, 10);
            const user = await UserModel.create({
                firstname, lastname, email, role, password: hasPassword
            });
            response.status(201).json(user)
        } catch (error) {
            response.status(500).json(error.message)
        }
    }
}