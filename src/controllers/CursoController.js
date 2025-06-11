const { where } = require('sequelize');
const CursoModel = require('../models/CursoModel');
const { request } = require('express');
module.exports = {
    //Lista de cursos
    async index(_request, response) {
        try {
            const courses = await CursoModel.findAll();
            response.status(200).json(courses)
        } catch (error) {
            response.status(500).json(error.message)
        }
    },
    //Criação de um curso
    async store(request, response) {
        const { nome, description, duration, isActive } = request.body;
        try {
            const course = await CursoModel.create({ nome, description, duration, isActive })
            response.status(201).json(course)
        } catch (error) {
            response.status(500).json(error.message)
        }
    },
    //Listagem de um curso especifico
    async show(request, response) {
        try {
            const curso = await CursoModel.findOne({ where: { id: request.params.id } })
            if (curso === null) return response.status(404).json({ error: 'Curso não encontrado.' })
            response.status(200).json(curso)
        } catch (error) {
            response.status(500).json(error.message)
        }
    },
    //Actualizar um curso especifico
    async update(request, response) {
        try {
            const curso_db = await CursoModel.findOne({ where: { id: request.params.id } });
            if (!curso_db) {
                return response.status(404).json({ error: 'Curso não encontrado.' })
            } else {
                const curso = await CursoModel.update(request.body, { where: { id: curso_db.dataValues.id } })
                response.status(200).json(curso)
            }
        } catch (error) {
            response.status(500).json(error.message)
        }
    },
    //Elimar um curso especifico
    async destroy(request, response) {
        try {
            const curso = await CursoModel.destroy({ where: { id: request.params.id } });
            response.status(200).json(curso);
        } catch (error) {
            response.status(500).json(error.message)
        }
    },
    //Listar cursos activos
    async ativos(_request, response) {
        try {
            const courses = await CursoModel.findAll({ where: { isActive: true } });
            response.status(200).json(courses);
        } catch (error) {
            response.status(500).json(error.message)
        }

    }
}