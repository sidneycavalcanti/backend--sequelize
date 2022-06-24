import { Sequelize } from 'sequelize';
import db from '../db.js';

export default db.define('chamado', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    id_militar: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    categoria: {
        type: Sequelize.STRING,
        allowNull: false
    },
   
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    situacao: {
        type: Sequelize.STRING,
        allowNull: false
    },
})