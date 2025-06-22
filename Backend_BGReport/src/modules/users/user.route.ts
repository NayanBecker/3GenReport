// src/modules/user/user.route.ts
import { FastifyInstance } from 'fastify';
import { registerUserController, loginController } from './user.controller';

export async function userRoutes(server: FastifyInstance) {
    server.post('/register', registerUserController);
    server.post('/login', loginController);
}