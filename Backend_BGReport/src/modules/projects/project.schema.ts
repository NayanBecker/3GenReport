// src/modules/project/project.schema.ts
import { z } from 'zod';

export const projectInputSchema = z.object({
    title: z.string({ required_error: 'Título é obrigatório.' }),
    documentConfig: z.string().optional(),
    documentContent: z.string().optional(),
});

export const updateProjectSchema = projectInputSchema.partial();