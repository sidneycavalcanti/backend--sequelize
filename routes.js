// importar biblioteca express possui sistema de rotas completo.
import express from 'express';

// importando o respositorio usuarios
import usuarios from './src/controllers/usuarios.js';

// importando o respositorio chamados
import chamados from './src/controllers/chamado.js';

// criando routes 
const routes = express.Router();

routes.get('/usuarios',usuarios.findAll);
routes.get('/usuarios/:id',usuarios.findUsuario);
routes.put('/usuarios/:id',usuarios.updateUsuario);
routes.delete('/usuarios/:id',usuarios.deleteUsuario);
routes.post('/usuarios', usuarios.addUsuario2);
routes.post('/login', usuarios.login);

routes.get('/chamados',chamados.findAll);
routes.get('/chamados/:id',chamados.findChamado);
routes.put('/chamados/:id',chamados.updateChamado);
routes.delete('/chamados/:id',chamados.deleteChamado);
routes.post('/chamados', chamados.addChamado);



export { routes as default };