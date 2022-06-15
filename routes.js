// importar biblioteca express possui sistema de rotas completo.
import express from 'express';

// importando o repositorio clients
import clients from './src/controllers/clients.js';

// importando o respositorio usuarios
import usuarios from './src/controllers/usuarios.js';

// criando routes 
const routes = express.Router();

routes.get('/clients',clients.findAll);
routes.get('/clients/:id',clients.findClient);
routes.put('/clients/:id',clients.updateClient);
routes.delete('/clients/:id',clients.deleteClient);
routes.post('/clients', clients.addClient);

routes.get('/usuarios',usuarios.findAll);
routes.get('/usuarios/:id',usuarios.findUsuario);
routes.put('/usuarios/:id',usuarios.updateUsuario);
routes.delete('/usuarios/:id',usuarios.deleteUsuario);
routes.post('/usuarios', usuarios.addUsuario);

export { routes as default };