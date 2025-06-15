// src/modules/user/user.controller.ts
import { FastifyReply, FastifyRequest } from 'fastify';
import { createUserSchema, loginSchema } from './user.schema';
import { createUserService, authenticateUserService } from './user.service';

export async function registerUserController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const data = createUserSchema.parse(request.body);
        const user = await createUserService(data);
        return reply.code(201).send(user);
    } catch (error: any) {
        if (error.code === 'P2002') { // Erro de duplicidade do Prisma
            return reply.code(409).send({ message: 'Email já cadastrado.' });
        }
        return reply.code(400).send({ message: 'Erro de validação', details: error.flatten ? error.flatten() : error.message });
    }
}

export async function loginController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const data = loginSchema.parse(request.body);
        const token = await authenticateUserService(data);
        return reply.code(200).send({ accessToken: token });
    } catch (error: any) {
        return reply.code(400).send({ message: 'Erro nos dados fornecidos', details: error.flatten ? error.flatten() : error.message });
    }
}