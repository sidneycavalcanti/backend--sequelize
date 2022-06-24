// funções que serão invocadas para cada requisição de usuarios
import { application } from 'express';

import { Op } from 'sequelize';

//arquivo de usarioModel
import UsuarioRepository from '../models/usuarioModel.js';

//responsavel pela criptografia
import bcrypt from 'bcrypt';


import jwt from 'jsonwebtoken';
//import { useNavigate } from 'react-router-dom';
//import sequelize from 'sequelize';

//const bcrypt = require("bcrypt");
//const jwt = require('jsonwebtoken');

function findAll(req,res){
    UsuarioRepository.findAll().then((result)=> res.json(result));
}

function findUsuario(req,res){
    UsuarioRepository.findByPk(req.params.id)
    .then( (result) => res.json(result))
}

function addUsuario1(req,res){
    UsuarioRepository.create({
        nome: req.body.nome,
        grad: req.body.grad,
        idtm: req.body.idtm,
        email: req.body.email,
        password: req.body.password

       //verificar se conseguiu cadastrar com sucesso
    }).then( (result) => res.json(result))
   };
   
//cadastrar usuario verificando se ja tem email e idtm cadastrado no banco   
async function addUsuario2(req,res){
    
    const user = await UsuarioRepository.findOne({ where : {[Op.or]: [{idtm: req.body.idtm}, {email: req.body.email}]}});
    if(user === null){
    const salt = await bcrypt.genSalt(10);
    var usr = {
        nome: req.body.nome,
        grad: req.body.grad,
        idtm: req.body.idtm,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, salt)
    };
     await UsuarioRepository.create(usr)

     //verificar se conseguiu cadastrar o usuario com sucesso
     //res.status(201).json(created_user)

    .then(() => { console.log("Usuario cadastrado com sucesso!");
        return res.json({
            erro: false,
            mensagem: "Usuario cadastrado com sucesso!",
            alert: "Usuario cadastrado com sucesso!"
            
        });

    }).catch(() => { console.log("Erro: Usuario nao cadastrado com sucesso!");
        return res.status(400).json({
            erro: true,
            mensegem: "Erro: Usuario nao cadastrado com sucesso!",
            alert: "Erro: Usuario nao cadastrado com sucesso!"
        });
        
    }
   )}else{ ( console.log("Erro: Usuario já cadastrado!"));
    return res.status(400).json({
        erro: true,
        mensegem: "Erro: Usuario já possui cadastro!",
        alert: "Erro: Usuario já possui cadastro!"
    });  
   };   
}

// funcao de login, verificar a senha e identidade militar no banco de dados.
//caso nao tenha ele informa q nao possui cadastro.
async function login (req,res,next){
    
    //const navigate  = useNavigate();
    const user = await UsuarioRepository.findOne({ where : {idtm : req.body.idtm }});
    if(user){
       const password_valid = await bcrypt.compare(req.body.password,user.password);
       if(password_valid){
           res.status(200).json({user : user});
           const token = jwt.sign({ "id" : user.id, "email" : user.email, "idtm" : user.idtm },process.env.JWT_KEY);
           //res.status(200).json({ token : token });
           //navigate("/projeto-sgti/home-page");
            /*
           try {
              let token = req.headers['authorization'].split(" ")[1];
              let decoded = jwt.verify(token,process.env.JWT_KEY);
              req.user = decoded;
              next();
            } catch(err){
              res.status(401).json({"msg":"Couldnt Authenticate"});
            }
              let user = await User.findOne({where:{id : req.user.id},attributes:{exclude:["password"]}});
              if(user === null){
                res.status(404).json({'msg':"User not found"});
              }
              res.status(200).json(user);        
              */


           console.log("usuario conectado");
       } else {
         res.status(400).json({ error : "Password incorreto" });
         console.log("Password incorreto");
       }
     
     }else{
       res.status(404).json({ error : "Identidade militar inexistente" });
       console.log("Identidade militar inexistente");
     }
     
     };
 
 


async function updateUsuario(req,res){
    await UsuarioRepository.update({
        nome: req.body.nome,
        grad: req.body.grad,
        idtm: req.body.idtm,
        email: req.body.email,
        password: req.body.passwords
    },
    {
        where: {
          id: req.params.id
    }
    });

    UsuarioRepository.findByPk(req.params.id)
    .then( (result) => res.json(result))
};

async function deleteUsuario(req,res){
    await UsuarioRepository.destroy({
        where: {
          id: req.params.id
        }
      });

      UsuarioRepository.findAll().then((result) => res.json(result));
};

export default { findAll, addUsuario1, addUsuario2, findUsuario, updateUsuario, deleteUsuario, login } 