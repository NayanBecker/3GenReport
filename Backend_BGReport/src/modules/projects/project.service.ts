// src/modules/project/project.service.ts
import { PrismaClient } from '@prisma/client';
import { z } from 'zod';
import { projectInputSchema, updateProjectSchema } from './project.schema';

const prisma = new PrismaClient();

type CreateProjectInput = z.infer<typeof projectInputSchema>;
type UpdateProjectInput = z.infer<typeof updateProjectSchema>;

export async function createProjectService(data: CreateProjectInput, ownerId: string) {
    return prisma.project.create({ data: { ...data, ownerId } });
}

export async function getProjectsService(ownerId: string) {
    return prisma.project.findMany({ where: { ownerId } });
}

export async function getProjectService(id: string, ownerId: string) {
    const project = await prisma.project.findFirst({ where: { id, ownerId } });
    if (!project) throw new Error('Projeto não encontrado ou você não tem permissão.');
    return project;
}

export async function updateProjectService(id: string, data: UpdateProjectInput, ownerId: string) {
    // Garante que o usuário é o dono antes de tentar atualizar
    await getProjectService(id, ownerId);
    return prisma.project.update({ where: { id }, data });
}

export async function deleteProjectService(id: string, ownerId: string) {
    await getProjectService(id, ownerId);
    return prisma.project.delete({ where: { id } });
}