import { exec } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const tempDir = path.join(__dirname, '..', '..', 'tmp');

fs.mkdir(tempDir, { recursive: true });

interface CompileResult {
    pdfPath: string;
    cleanup: () => Promise<void>;
}

/**
 * Compila uma string de código LaTeX para um arquivo PDF.
 * @param documentConfig O preâmbulo do documento LaTeX.
 * @param documentContent O corpo do documento LaTeX.
 * @returns Uma promessa que resolve para um objeto contendo o caminho do PDF e uma função de limpeza.
 */

export async function compileLatex(documentConfig: string, documentContent: string): Promise<CompileResult> {
    const uniqueId = uuidv4();
    const texFileName = `${uniqueId}.tex`;
    const pdfFileName = `${uniqueId}.pdf`;

    const texFilePath = path.join(tempDir, texFileName);
    const pdfFilePath = path.join(tempDir, pdfFileName);

    const rawLatexCode = `${documentConfig}\n${documentContent}`;
    const fullLatexCode = rawLatexCode.replace(/\\n/g, '\n');


    const cleanup = async () => {
        const extensionsToDelete = ['.tex', '.aux', '.log', '.pdf'];
        for (const ext of extensionsToDelete) {
            try {
                await fs.unlink(path.join(tempDir, `${uniqueId}${ext}`));
            } catch (error) {
                // Ignora erros caso o arquivo não exista (ex: compilação falhou e não gerou .pdf)
            }
        }
    };

    try {
        // 1. Escreve o código LaTeX no arquivo .tex
        await fs.writeFile(texFilePath, fullLatexCode);

        // 2. Executa o pdflatex usando um processo filho
        const command = `pdflatex -interaction=nonstopmode -output-directory=${tempDir} ${texFilePath}`;

        await new Promise<void>((resolve, reject) => {
            exec(command, async (error, stdout, stderr) => {
                if (error) {
                    const logFilePath = path.join(tempDir, `${uniqueId}.log`);
                    try {
                        const logContent = await fs.readFile(logFilePath, 'utf-8');
                        reject(new Error(`LaTeX compilation failed. See log for details:\n\n${logContent}`));
                    } catch (logError) {
                        reject(new Error(`LaTeX compilation failed, and the log file could not be read. Original error: ${error.message}`));
                    }
                    return;
                }
                resolve();
            });
        });

        await fs.access(pdfFilePath);

        return { pdfPath: pdfFilePath, cleanup };

    } catch (error) {
        await cleanup();
        throw error;
    }
}