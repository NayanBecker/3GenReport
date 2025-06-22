import { exec } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const tempDir = path.resolve('./tmp');

fs.mkdir(tempDir, { recursive: true });

export interface CompileResult {
    pdfPath: string;
    cleanup: () => Promise<void>;
}

export async function compileLatexService(documentConfig: string, documentContent: string): Promise<CompileResult> {
    const uniqueId = uuidv4();
    const texFilePath = path.join(tempDir, `${uniqueId}.tex`);
    const fullLatexCode = `${documentConfig}\n${documentContent}`.replace(/\\n/g, '\n');

    const cleanup = async () => {
        const extensionsToDelete = ['.tex', '.aux', '.log', '.pdf'];
        for (const ext of extensionsToDelete) {
            try {
                await fs.unlink(path.join(tempDir, `${uniqueId}${ext}`));
            } catch (error) {
                console.error(`Erro ao remover arquivo temporário ${ext}:`, error);
            }
        }
    };

    try {
        await fs.writeFile(texFilePath, fullLatexCode);
        const command = `pdflatex -interaction=nonstopmode -output-directory=${tempDir} ${texFilePath}`;

        await new Promise<void>((resolve, reject) => {
            exec(command, async (error) => {
                if (error) {
                    const logFilePath = path.join(tempDir, `${uniqueId}.log`);
                    try {
                        const logContent = await fs.readFile(logFilePath, 'utf-8');
                        reject(new Error(logContent));
                    } catch (logError) {
                        reject(new Error(`Falha na compilação do LaTeX e o arquivo de log não pôde ser lido. Erro original: ${error.message}`));
                    }
                    return;
                }
                resolve();
            });
        });

        const pdfFilePath = path.join(tempDir, `${uniqueId}.pdf`);
        await fs.access(pdfFilePath);
        return { pdfPath: pdfFilePath, cleanup };

    } catch (error) {
        await cleanup();
        throw error;
    }
}