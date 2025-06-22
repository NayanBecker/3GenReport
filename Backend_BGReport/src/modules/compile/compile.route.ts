import { FastifyInstance } from 'fastify';
import { compileController } from './compile.controller';

export async function compileRoute(server: FastifyInstance) {
    server.post('/compile', compileController);
}