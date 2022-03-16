const { Sequelize } = require('sequelize');
const dotenv = require('dotenv')

dotenv.config({path: './config.env'})

const sequelize = new Sequelize({
    host: process.env.DB_HOST,
    username: 'postgres',
    password: 'asd',
    database: 'movies_API',
    port: 5432,
    dialect: 'postgres'
})

module.exports = { sequelize };