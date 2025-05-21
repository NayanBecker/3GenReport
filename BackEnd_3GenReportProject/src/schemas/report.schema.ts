import z from "zod";

export const createReportSchema = z.object({
    content_Report: z.string(),
    createdAt_Report: z.date().default(() => new Date()),
    updatedAt_Report: z.date().default(() => new Date()),
    id_Account: z.number().min(1).optional()
});

export const updateReportSchema = z.object({
    content_Report: z.string().optional(),
    updatedAt_Report: z.date().optional(),
});

export const deleteReportSchema = z.object({
    id_Report: z.string().uuid(),
});