import { z } from 'zod';

export const compileSchema = z.object({
    documentConfig: z.string(),
    documentContent: z.string(),
});