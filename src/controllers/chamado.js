// funções que serão invocadas para cada requisição de usuarios
import ChamadoRepository from '../models/chamadoModel.js';

function findAll(req,res){
    ChamadoRepository.findAll().then((result)=> res.json(result));
}

function findChamado(req,res){
    ChamadoRepository.findByPk(req.params.id)
    .then( (result) => res.json(result))
}

function addChamado(req,res){
    ChamadoRepository.create({
        id_militar: req.body.id_militar,
        categoria: req.body.categoria,
        descricao: req.body.descricao,
        situacao: req.body.situacao
    }).then( (result) => res.json(result))
     if(!addChamado){
        console.log("teste")
     }
   };

async function updateChamado(req,res){
    await ChamadoRepository.update({
        id_militar: req.body.id_militar,
        categoria: req.body.categoria,
        descricao: req.body.descricao,
        situacao: req.body.situacao
    },
    {
        where: {
          id: req.params.id
    }
    });

    ChamadoRepository.findByPk(req.params.id)
    .then( (result) => res.json(result))
};

async function deleteChamado(req,res){
    await ChamadoRepository.destroy({
        where: {
          id: req.params.id
        }
      });

      ChamadoRepository.findAll().then((result) => res.json(result));
};

export default { findAll, addChamado, findChamado, updateChamado, deleteChamado } 