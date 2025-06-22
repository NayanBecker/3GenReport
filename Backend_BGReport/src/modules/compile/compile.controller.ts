import { FastifyReply, FastifyRequest } from 'fastify';
import { createReadStream } from 'fs';
import { compileSchema } from './compile.schema';
import { compileLatexService } from './compile.service';

export async function compileController(request: FastifyRequest, reply: FastifyReply) {
    let cleanup = async () => { };
    try {
        const { documentConfig, documentContent } = compileSchema.parse(request.body);

        const result = await compileLatexService(documentConfig, documentContent);
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
        await cleanup();
        request.log.error(error, 'Falha na compilação do LaTeX');
        return reply.status(400).send({
            message: 'Erro na compilação do LaTeX.',
            log: error.message || 'Erro desconhecido',
            details: error.flatten ? error.flatten() : undefined,
        });
    }
}