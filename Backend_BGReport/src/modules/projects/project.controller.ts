// src/modules/project/project.controller.ts
import { FastifyReply, FastifyRequest } from 'fastify';
import { projectInputSchema, updateProjectSchema } from './project.schema';
import { createProjectService, getProjectsService, getProjectService, updateProjectService, deleteProjectService } from './project.service';

export async function createProjectController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const data = projectInputSchema.parse(request.body);
        const project = await createProjectService(data, request.user.id);
        return reply.code(201).send(project);
    } catch (error: any) {
        return reply.code(400).send({ message: 'Erro de validação', details: error.flatten ? error.flatten() : error.message });
    }
}

export async function getProjectsController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const projects = await getProjectsService(request.user.id);
        return reply.code(200).send(projects);
    } catch (error: any) {
        return reply.code(500).send({ message: 'Erro ao buscar projetos.' });
    }
}

export async function getProjectController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const { id } = request.params as { id: string };
        const project = await getProjectService(id, request.user.id);
        return reply.code(200).send(project);
    } catch (error: any) {
        return reply.code(404).send({ message: error.message });
    }
}

export async function updateProjectController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const { id } = request.params as { id: string };
        const data = updateProjectSchema.parse(request.body);
        const project = await updateProjectService(id, data, request.user.id);
        return reply.code(200).send(project);
    } catch (error: any) {
        return reply.code(400).send({ message: error.message, details: error.flatten ? error.flatten() : undefined });
    }
}

export async function deleteProjectController(request: FastifyRequest, reply: FastifyReply) {
    try {
        const { id } = request.params as { id: string };
        await deleteProjectService(id, request.user.id);
        return reply.code(204).send();
    } catch (error: any) {
        return reply.code(404).send({ message: error.message });
    }
}