//configuração de conexão com o banco atraves do sequelize

import { Sequelize } from 'sequelize'; // importaando sequelize
import dotenv from 'dotenv/config.js'; // importar dont env para importar as variaveis de ambiente

const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    dialect: 'mysql',
    host: dbHost
})

export default sequelize;