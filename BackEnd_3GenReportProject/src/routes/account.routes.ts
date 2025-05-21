import { FastifyInstance } from 'fastify';
import { registerAccountController, loginAccountController, updateAccountController } from '../controllers/account.controller';

export async function authRoutes(app: FastifyInstance) {
  app.post('/register', registerAccountController);
  app.post('/login', loginAccountController);
  app.put('/update/:id_Account', updateAccountController);
}
