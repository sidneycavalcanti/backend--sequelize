import { Sequelize } from 'sequelize';
import db from '../db.js';

export default db.define('usuario', {
    id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
              msg: 'Please enter your name'
            }
          }
    },
    grad: {
        type: Sequelize.STRING,
        allowNull: false
    },
    idtm: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
              msg: 'Please enter your name'
            }
          },
        unique: true // Aqui voce indica que o valor nao ser repetido
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
              msg: 'Please enter your name'
            }
          },
        unique: true // Aqui voce indica que o valor nao ser repetido
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notNull: {
              msg: 'Please enter your name'
            }
          }
        //colocar informacoes do password cripitografada.
       // set(value) {
            // rmazenar senhas em texto simples no banco de dados é terrível.
            // Hashing Fazer hash do valor com uma função de hash criptográfica apropriada é melhor.
          //  this.setDataValue('password', hash(value));
        //}
    }
});
