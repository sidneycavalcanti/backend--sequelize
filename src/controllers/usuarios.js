// funções que serão invocadas para cada requisição de usuarios
import UsuarioRepository from '../models/usuarioModel.js';

function findAll(req,res){
    UsuarioRepository.findAll().then((result)=> res.json(result));
}

function findUsuario(req,res){
    UsuarioRepository.findByPk(req.params.id)
    .then( (result) => res.json(result))
}

function addUsuario(req,res){
    UsuarioRepository.create({
        nome: req.body.nome,
        guerra: req.body.guerra,
        idtm: req.body.idtm,
        email: req.body.email,
        password: req.body.passwords
    }).then( (result) => res.json(result))
};

async function updateUsuario(req,res){
    await UsuarioRepository.update({
        nome: req.body.nome,
        guerra: req.body.guerra,
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

export default { findAll, addUsuario, findUsuario, updateUsuario, deleteUsuario } 