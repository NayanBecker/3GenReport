import { FastifyRequest, FastifyReply } from 'fastify';
import { ReportModel } from '../models/Report';
import PDFDocument from 'pdfkit';
import { CreateReportDTO, UpdateReportDTO } from '../types';
import { randomUUID } from 'crypto';

export class ReportController {
    // Criar um novo relatório
    async create(request: FastifyRequest<{ Body: CreateReportDTO }>, reply: FastifyReply) {
        try {
            const reportData = {
                ...request.body,
                id: randomUUID(),
            };

            const report = new ReportModel(reportData);
            await report.save();
            return reply.code(201).send(report);
        } catch (error) {
            return reply.code(400).send({ error: (error as Error).message });
        }
    }

    // Buscar um relatório específico
    async findOne(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
        try {
            const report = await ReportModel.findOne({ id: request.params.id });
            if (!report) {
                return reply.code(404).send({ error: 'Relatório não encontrado' });
            }
            return report;
        } catch (error) {
            return reply.code(400).send({ error: (error as Error).message });
        }
    }

    // Atualizar um relatório
    async update(
        request: FastifyRequest<{
            Params: { id: string };
            Body: UpdateReportDTO;
        }>,
        reply: FastifyReply
    ) {
        try {
            const report = await ReportModel.findOneAndUpdate(
                { id: request.params.id },
                request.body,
                { new: true }
            );
            if (!report) {
                return reply.code(404).send({ error: 'Relatório não encontrado' });
            }
            return report;
        } catch (error) {
            return reply.code(400).send({ error: (error as Error).message });
        }
    }

    // Deletar um relatório
    async delete(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
        try {
            const report = await ReportModel.findOneAndDelete({ id: request.params.id });
            if (!report) {
                return reply.code(404).send({ error: 'Relatório não encontrado' });
            }
            return { message: 'Relatório deletado com sucesso' };
        } catch (error) {
            return reply.code(400).send({ error: (error as Error).message });
        }
    }

    // Gerar PDF do relatório
    async generatePDF(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
        try {
            const report = await ReportModel.findOne({ id: request.params.id });
            if (!report) {
                return reply.code(404).send({ error: 'Relatório não encontrado' });
            }

            const doc = new PDFDocument();
            const filename = `report-${report.id}.pdf`;

            reply.header('Content-Type', 'application/pdf');
            reply.header('Content-Disposition', `attachment; filename=${filename}`);

            doc.pipe(reply.raw);

            // Título do relatório
            doc.fontSize(24).text(report.title, { align: 'center' });
            doc.moveDown();

            // Processar cada bloco do relatório
            for (const block of report.blocks) {
                // Título do bloco
                doc.fontSize(16).text(block.title);
                doc.moveDown(0.5);

                switch (block.type) {
                    case 'text':
                        doc.fontSize(12).text(block.content);
                        break;

                    case 'citation':
                        doc.fontSize(12)
                            .text(block.content)
                            .fontSize(10)
                            .text(`Fonte: ${block.source}`, { oblique: true });
                        break;

                    case 'attachment':
                        doc.fontSize(12)
                            .text(`Anexo: ${block.fileName}`)
                            .text(`URL: ${block.fileUrl}`);
                        break;
                }
                doc.moveDown();
            }

            doc.end();
            return reply;
        } catch (error) {
            return reply.code(400).send({ error: (error as Error).message });
        }
    }
} 