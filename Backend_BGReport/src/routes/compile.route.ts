// src/routes/compile.route.ts

import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify';
import { createReadStream } from 'fs';
import { compileLatex } from '../services/latex.service';

// Interface para tipar o corpo da requisição, garantindo segurança
interface ICompileBody {
    documentConfig: string;
    documentContent: string;
}

export async function compileRoute(fastify: FastifyInstance) {
    fastify.post(
        '/compile',
        {
            // Adicionar um schema melhora a performance e a segurança
            schema: {
                body: {
                    type: 'object',
                    properties: {
                        documentConfig: { type: 'string' },
                        documentContent: { type: 'string' },
                    },
                    required: ['documentConfig', 'documentContent'],
                },
            },
        },
        async (request: FastifyRequest<{ Body: ICompileBody }>, reply: FastifyReply) => {
            let cleanup = async () => { };

            try {
                const { documentConfig, documentContent } = request.body;
                const result = await compileLatex(documentConfig, documentContent);
                cleanup = result.cleanup;

                const stream = createReadStream(result.pdfPath);

                stream.on('close', async () => {
                    await cleanup();
                });

                return reply
                    .header('Content-Disposition', 'attachment; filename="documento.pdf"')
                    .type('application/pdf')
                    .send(stream);

            } catch (error: any) {
                request.log.error(error, 'Falha na compilação do LaTeX');
                return reply.status(400).send({
                    message: 'Erro na compilação do LaTeX.',
                    log: error.message,
                });
            }
        }
    );
}