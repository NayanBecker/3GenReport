import { FastifyInstance } from 'fastify';
import { generatePDF } from '../services/pdfService';
import { Block } from '../types';

interface GeneratePDFBody {
    title: string;
    blocks: Block[];
}

export default async function pdfRoutes(fastify: FastifyInstance) {
    fastify.post<{ Body: GeneratePDFBody }>('/generate-pdf', async (request, reply) => {
        try {
            const { title, blocks } = request.body;
            const pdfBuffer = await generatePDF(title, blocks);

            reply.header('Content-Type', 'application/pdf');
            reply.header('Content-Disposition', `attachment; filename="${title}.pdf"`);
            reply.send(pdfBuffer);
        } catch (error) {
            console.error('Erro ao gerar PDF:', error);
            reply.status(500).send({ error: 'Erro ao gerar o PDF' });
        }
    });
} 