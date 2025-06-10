import React from 'react';
import type { Report, Block, SectionBlock, SubsectionBlock } from '../../types';
import { FiSave, FiDownload, FiSettings } from 'react-icons/fi';

interface ReportActionsProps {
    report: Report;
    onSave: () => Promise<void>;
    className?: string;
}

interface PDFSettings {
    showPageNumbers: boolean;
    fontSize: 'small' | 'medium' | 'large';
    lineSpacing: 'single' | '1.5' | 'double';
    margins: 'narrow' | 'normal' | 'wide';
    includeTableOfContents: boolean;
    includeAbstract: boolean;
    includeKeywords: boolean;
    includeReferences: boolean;
    paperSize: 'A4' | 'letter';
    orientation: 'portrait' | 'landscape';
    sectionNumbering: 'arabic' | 'roman' | 'alpha';
    subsectionNumbering: 'arabic' | 'roman' | 'alpha';
}

export function ReportActions({ report, onSave, className = '' }: ReportActionsProps) {
    const [isSaving, setIsSaving] = React.useState(false);
    const [isGeneratingPDF, setIsGeneratingPDF] = React.useState(false);
    const [showSettings, setShowSettings] = React.useState(false);
    const [pdfSettings, setPdfSettings] = React.useState<PDFSettings>({
        showPageNumbers: true,
        fontSize: 'medium',
        lineSpacing: '1.5',
        margins: 'normal',
        includeTableOfContents: true,
        includeAbstract: true,
        includeKeywords: true,
        includeReferences: true,
        paperSize: 'A4',
        orientation: 'portrait',
        sectionNumbering: 'arabic',
        subsectionNumbering: 'arabic'
    });

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

            // Organize blocks by sections and subsections
            const organizedBlocks = report.blocks.reduce((acc: { [key: string]: Block[] }, block) => {
                if (block.type === 'section') {
                    acc[`section_${(block as SectionBlock).number}`] = [block];
                } else if (block.type === 'subsection') {
                    const sectionKey = `section_${(block as SubsectionBlock).parentSectionNumber}`;
                    if (!acc[sectionKey]) {
                        acc[sectionKey] = [];
                    }
                    acc[sectionKey].push(block);
                } else {
                    // Add non-section blocks to the last section or create a default section
                    const lastSectionKey = Object.keys(acc).pop() || 'default';
                    if (!acc[lastSectionKey]) {
                        acc[lastSectionKey] = [];
                    }
                    acc[lastSectionKey].push(block);
                }
                return acc;
            }, {});

            const response = await fetch('http://localhost:3000/api/generate-pdf', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    title: report.title,
                    blocks: report.blocks,
                    organizedBlocks,
                    settings: pdfSettings,
                    metadata: {
                        author: report.author || '',
                        institution: report.institution || '',
                        department: report.department || '',
                        date: new Date().toISOString(),
                        keywords: report.keywords || [],
                        abstract: report.abstract || '',
                        references: report.references || []
                    }
                }),
            });

            if (!response.ok) {
                throw new Error('Erro ao gerar PDF');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = url;
            link.download = `relatorio-${report.title.toLowerCase().replace(/\s+/g, '-')}.pdf`;
            document.body.appendChild(link);
            link.click();
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

            <div className="relative">
                <button
                    onClick={() => setShowSettings(!showSettings)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                >
                    <FiSettings className="w-5 h-5" />
                    Configurações do PDF
                </button>

                {showSettings && (
                    <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg p-4 z-50 border border-gray-200">
                        <h3 className="text-lg font-semibold mb-4">Configurações do PDF</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Tamanho da Fonte
                                </label>
                                <select
                                    value={pdfSettings.fontSize}
                                    onChange={(e) => setPdfSettings(prev => ({ ...prev, fontSize: e.target.value as PDFSettings['fontSize'] }))}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="small">Pequeno</option>
                                    <option value="medium">Médio</option>
                                    <option value="large">Grande</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Espaçamento entre Linhas
                                </label>
                                <select
                                    value={pdfSettings.lineSpacing}
                                    onChange={(e) => setPdfSettings(prev => ({ ...prev, lineSpacing: e.target.value as PDFSettings['lineSpacing'] }))}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="single">Simples</option>
                                    <option value="1.5">1.5</option>
                                    <option value="double">Duplo</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Margens
                                </label>
                                <select
                                    value={pdfSettings.margins}
                                    onChange={(e) => setPdfSettings(prev => ({ ...prev, margins: e.target.value as PDFSettings['margins'] }))}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="narrow">Estreitas</option>
                                    <option value="normal">Normais</option>
                                    <option value="wide">Largas</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Tamanho do Papel
                                </label>
                                <select
                                    value={pdfSettings.paperSize}
                                    onChange={(e) => setPdfSettings(prev => ({ ...prev, paperSize: e.target.value as PDFSettings['paperSize'] }))}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="A4">A4</option>
                                    <option value="letter">Carta</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Orientação
                                </label>
                                <select
                                    value={pdfSettings.orientation}
                                    onChange={(e) => setPdfSettings(prev => ({ ...prev, orientation: e.target.value as PDFSettings['orientation'] }))}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="portrait">Retrato</option>
                                    <option value="landscape">Paisagem</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Numeração das Seções
                                </label>
                                <select
                                    value={pdfSettings.sectionNumbering}
                                    onChange={(e) => setPdfSettings(prev => ({ ...prev, sectionNumbering: e.target.value as PDFSettings['sectionNumbering'] }))}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="arabic">Números (1, 2, 3)</option>
                                    <option value="roman">Romanos (I, II, III)</option>
                                    <option value="alpha">Alfabético (A, B, C)</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Numeração das Subseções
                                </label>
                                <select
                                    value={pdfSettings.subsectionNumbering}
                                    onChange={(e) => setPdfSettings(prev => ({ ...prev, subsectionNumbering: e.target.value as PDFSettings['subsectionNumbering'] }))}
                                    className="w-full p-2 border rounded"
                                >
                                    <option value="arabic">Números (1.1, 1.2, 1.3)</option>
                                    <option value="roman">Romanos (I.i, I.ii, I.iii)</option>
                                    <option value="alpha">Alfabético (A.a, A.b, A.c)</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={pdfSettings.showPageNumbers}
                                        onChange={(e) => setPdfSettings(prev => ({ ...prev, showPageNumbers: e.target.checked }))}
                                        className="rounded"
                                    />
                                    <span className="text-sm">Mostrar numeração de páginas</span>
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={pdfSettings.includeTableOfContents}
                                        onChange={(e) => setPdfSettings(prev => ({ ...prev, includeTableOfContents: e.target.checked }))}
                                        className="rounded"
                                    />
                                    <span className="text-sm">Incluir sumário</span>
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={pdfSettings.includeAbstract}
                                        onChange={(e) => setPdfSettings(prev => ({ ...prev, includeAbstract: e.target.checked }))}
                                        className="rounded"
                                    />
                                    <span className="text-sm">Incluir resumo</span>
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={pdfSettings.includeKeywords}
                                        onChange={(e) => setPdfSettings(prev => ({ ...prev, includeKeywords: e.target.checked }))}
                                        className="rounded"
                                    />
                                    <span className="text-sm">Incluir palavras-chave</span>
                                </label>

                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        checked={pdfSettings.includeReferences}
                                        onChange={(e) => setPdfSettings(prev => ({ ...prev, includeReferences: e.target.checked }))}
                                        className="rounded"
                                    />
                                    <span className="text-sm">Incluir referências</span>
                                </label>
                            </div>
                        </div>
                    </div>
                )}
            </div>

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