//configuração de conexão com o banco atraves do sequelize

import { Sequelize } from 'sequelize'; // importando sequelize
import dotenv from 'dotenv/config.js'; // importar dont env para importar as variaveis de ambiente


const dbName = process.env.DB_NAME;
const dbUser = process.env.DB_USER;
const dbHost = process.env.DB_HOST;
const dbPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    dialect: 'mysql',
    host: dbHost
})
// teste de conecao com o banco 
try {
    await sequelize.authenticate();
    console.log('Conecao efetuada com sucesso!');
  } catch (error) {
    console.error('Nao foi possivel conectar:', error);
  }


export default sequelize;