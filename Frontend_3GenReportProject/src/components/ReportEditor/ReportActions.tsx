import React from 'react';
import type { Report } from '../../types';
import { FiSave, FiDownload } from 'react-icons/fi';

interface ReportActionsProps {
    report: Report;
    onSave: () => Promise<void>;
    className?: string;
}

export function ReportActions({ report, onSave, className = '' }: ReportActionsProps) {
    const [isSaving, setIsSaving] = React.useState(false);
    const [isGeneratingPDF, setIsGeneratingPDF] = React.useState(false);

    const handleSave = async () => {
        try {
            setIsSaving(true);
            await onSave();
        } catch (error) {
            console.error('Erro ao salvar:', error);
        } finally {
            setIsSaving(false);
        }
    };

    const handleGeneratePDF = async () => {
        try {
            setIsGeneratingPDF(true);
            const response = await fetch('http://localhost:3000/api/generate-pdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: report.title,
                    blocks: report.blocks
                }),
            });

            if (!response.ok) {
                throw new Error('Erro ao gerar PDF');
            }

            // Criar blob do PDF
            const blob = await response.blob();

            // Criar URL do blob
            const url = window.URL.createObjectURL(blob);

            // Criar link temporário para download
            const link = document.createElement('a');
            link.href = url;
            link.download = `relatorio-${report.title.toLowerCase().replace(/\s+/g, '-')}.pdf`;

            // Simular clique para iniciar download
            document.body.appendChild(link);
            link.click();

            // Limpar
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('Erro ao gerar PDF:', error);
        } finally {
            setIsGeneratingPDF(false);
        }
    };

    return (
        <div className={`flex gap-4 ${className}`}>
            <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                <FiSave className="w-5 h-5" />
                {isSaving ? 'Salvando...' : 'Salvar'}
            </button>

            <button
                onClick={handleGeneratePDF}
                disabled={isGeneratingPDF}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
                <FiDownload className="w-5 h-5" />
                {isGeneratingPDF ? 'Gerando PDF...' : 'Baixar PDF'}
            </button>
        </div>
    );
} 