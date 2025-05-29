import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import { createWriteStream } from 'fs';
import { join, extname } from 'path';
import { pipeline } from 'stream/promises';
import { ReportController } from '../controllers/ReportController';
import { UploadFileResponse } from '../types';

const reportController = new ReportController();

export const reportRoutes: FastifyPluginAsync = async (fastify: FastifyInstance) => {
    // Rotas do relatório
    fastify.post('/reports', reportController.create);
    fastify.get('/reports/:id', reportController.findOne);
    fastify.put('/reports/:id', reportController.update);
    fastify.delete('/reports/:id', reportController.delete);
    fastify.get('/reports/:id/pdf', reportController.generatePDF);

    // Rota para upload de arquivos
    fastify.post('/upload', async (request, reply) => {
        const data = await request.file();

        if (!data) {
            return reply.code(400).send({ error: 'Nenhum arquivo enviado' });
        }

        const filename = `${Date.now()}${extname(data.filename)}`;
        const filepath = join(__dirname, '../../uploads', filename);

        await pipeline(data.file, createWriteStream(filepath));

        const response: UploadFileResponse = {
            fileUrl: `/uploads/${filename}`,
            fileName: data.filename
        };

        return response;
    });
}; 