// src/server.ts

import fastify, { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import fastifyJwt from '@fastify/jwt';
import { userRoutes } from './modules/users/user.route';

declare module 'fastify' {
    export interface FastifyInstance {
        authenticate: (request: FastifyRequest, reply: FastifyReply) => Promise<void>;
    }

    export interface FastifyRequest {
        user: {
            id: string;
            name: string;
            email: string;
        };
    }
}

declare module '@fastify/jwt' {
    export interface FastifyJWT {
        payload: { id: string; name: string; email: string };
        user: { id: string; name: string; email: string };
    }
}

export const server: FastifyInstance = fastify({ logger: true });

server.register(fastifyJwt, {
    secret: process.env.JWT_SECRET || 'supersecret-change-this-in-production',
});

server.decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        await request.jwtVerify();
    } catch (e) {
        reply.code(401).send({ message: 'Autenticação necessária.', error: e });
    }
});

server.register(userRoutes, { prefix: '/api/users' });

const start = async () => {
    try {
        await server.listen({ port: 3000, host: '0.0.0.0' });
    } catch (err) {
        server.log.error(err);
        process.exit(1);
    }
};

if (require.main === module) {
    start();
}