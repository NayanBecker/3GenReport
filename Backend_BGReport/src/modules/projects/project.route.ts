// src/modules/project/project.route.ts
import { FastifyInstance } from 'fastify';
import { createProjectController, getProjectsController, getProjectController, updateProjectController, deleteProjectController } from './project.controller';

export async function projectRoutes(server: FastifyInstance) {
    const protectedRoutes = {
        onRequest: [server.authenticate],
    };

    server.post('/', protectedRoutes, createProjectController);
    server.get('/', protectedRoutes, getProjectsController);
    server.get('/:id', protectedRoutes, getProjectController);
    server.put('/:id', protectedRoutes, updateProjectController);
    server.delete('/:id', protectedRoutes, deleteProjectController);
}