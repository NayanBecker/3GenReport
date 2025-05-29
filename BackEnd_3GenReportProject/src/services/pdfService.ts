import PDFDocument from 'pdfkit';
import { Block } from '../types';

export async function generatePDF(title: string, blocks: Block[]) {
    const doc = new PDFDocument();
    const chunks: Buffer[] = [];

    // Coletar chunks do PDF
    doc.on('data', (chunk) => chunks.push(chunk));

    // Título do relatório
    doc.fontSize(24).text(title, { align: 'center' });
    doc.moveDown();

    // Processar cada bloco do relatório
    for (const block of blocks) {
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

    // Finalizar o documento
    doc.end();

    // Retornar uma Promise que resolve com o buffer do PDF
    return new Promise<Buffer>((resolve) => {
        doc.on('end', () => {
            resolve(Buffer.concat(chunks));
        });
    });
} 