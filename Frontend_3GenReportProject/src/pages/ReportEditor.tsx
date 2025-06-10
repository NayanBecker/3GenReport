import React, { useState } from 'react';
import type { Block, Report, SectionBlock, SubsectionBlock } from '../types';
import BlockList from '../components/ReportEditor/BlockList';
import Toolbar from '../components/ReportEditor/Toolbar';
import { ReportActions } from '../components/ReportEditor/ReportActions';

interface ReportEditorProps {
    initialReport?: Report;
}

const DEFAULT_BLOCKS: Block[] = [
    {
        id: crypto.randomUUID(),
        type: 'text',
        content: '',
        order: 0,
        title: 'Título do Projeto'
    },
    {
        id: crypto.randomUUID(),
        type: 'text',
        content: '',
        order: 1,
        title: 'Objetivo Geral'
    },
    {
        id: crypto.randomUUID(),
        type: 'text',
        content: '',
        order: 2,
        title: 'Descrição do Projeto'
    },
    {
        id: crypto.randomUUID(),
        type: 'text',
        content: '',
        order: 3,
        title: 'Tecnologias e Ferramentas Utilizadas'
    },
    {
        id: crypto.randomUUID(),
        type: 'text',
        content: '',
        order: 4,
        title: 'Cronograma de Atividades'
    },
    {
        id: crypto.randomUUID(),
        type: 'text',
        content: '',
        order: 5,
        title: 'Resultados Esperados'
    },
    {
        id: crypto.randomUUID(),
        type: 'text',
        content: '',
        order: 6,
        title: 'Considerações Finais'
    },
    {
        id: crypto.randomUUID(),
        type: 'attachment',
        content: '',
        order: 7,
        title: 'Anexos: Diagramas, protótipos, etc'
    }
];

export default function ReportEditor({ initialReport }: ReportEditorProps) {
    const [report, setReport] = useState<Report>(
        initialReport || {
            id: crypto.randomUUID(),
            title: 'Novo Relatório',
            blocks: DEFAULT_BLOCKS,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    );

    const addBlock = (type: Block['type']) => {
        let newBlock: Block;

        if (type === 'section') {
            // Count existing sections to determine the new section number
            const sectionCount = report.blocks.filter(block => block.type === 'section').length;
            newBlock = {
                id: crypto.randomUUID(),
                type: 'section',
                content: '',
                order: report.blocks.length,
                title: 'Nova Seção',
                number: sectionCount + 1
            } as SectionBlock;
        } else if (type === 'subsection') {
            // Find the last section to determine parent section number
            const lastSection = [...report.blocks]
                .reverse()
                .find(block => block.type === 'section') as SectionBlock | undefined;

            if (!lastSection) {
                // If no section exists, create a section first
                const sectionBlock: SectionBlock = {
                    id: crypto.randomUUID(),
                    type: 'section',
                    content: '',
                    order: report.blocks.length,
                    title: 'Nova Seção',
                    number: 1
                };

                // Count subsections in the current section
                const subsectionCount = report.blocks.filter(
                    block => block.type === 'subsection' &&
                        (block as SubsectionBlock).parentSectionNumber === sectionBlock.number
                ).length;

                const subsectionBlock: SubsectionBlock = {
                    id: crypto.randomUUID(),
                    type: 'subsection',
                    content: '',
                    order: report.blocks.length + 1,
                    title: 'Nova Subseção',
                    number: subsectionCount + 1,
                    parentSectionNumber: sectionBlock.number
                };

                setReport((prev) => ({
                    ...prev,
                    blocks: [...prev.blocks, sectionBlock, subsectionBlock],
                    updatedAt: new Date(),
                }));
                return;
            }

            // Count subsections in the current section
            const subsectionCount = report.blocks.filter(
                block => block.type === 'subsection' &&
                    (block as SubsectionBlock).parentSectionNumber === lastSection.number
            ).length;

            newBlock = {
                id: crypto.randomUUID(),
                type: 'subsection',
                content: '',
                order: report.blocks.length,
                title: 'Nova Subseção',
                number: subsectionCount + 1,
                parentSectionNumber: lastSection.number
            } as SubsectionBlock;
        } else {
            newBlock = {
                id: crypto.randomUUID(),
                type,
                content: '',
                order: report.blocks.length,
                title: 'Novo Bloco'
            };
        }

        setReport((prev) => ({
            ...prev,
            blocks: [...prev.blocks, newBlock],
            updatedAt: new Date(),
        }));
    };

    const updateBlock = (blockId: string, updates: Partial<Block>) => {
        setReport((prev) => ({
            ...prev,
            blocks: prev.blocks.map((block) =>
                block.id === blockId ? { ...block, ...updates } : block
            ),
            updatedAt: new Date(),
        }));
    };

    const deleteBlock = (blockId: string) => {
        setReport((prev) => ({
            ...prev,
            blocks: prev.blocks.filter((block) => block.id !== blockId),
            updatedAt: new Date(),
        }));
    };

    const moveBlock = (fromIndex: number, toIndex: number) => {
        setReport((prev) => {
            const newBlocks = [...prev.blocks];
            const [movedBlock] = newBlocks.splice(fromIndex, 1);
            newBlocks.splice(toIndex, 0, movedBlock);

            return {
                ...prev,
                blocks: newBlocks.map((block, index) => ({
                    ...block,
                    order: index
                })),
                updatedAt: new Date()
            };
        });
    };

    const handleSave = async () => {
        try {
            const response = await fetch('/api/reports', {
                method: report.id ? 'PUT' : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(report),
            });

            if (!response.ok) {
                throw new Error('Erro ao salvar relatório');
            }

            const savedReport = await response.json();
            setReport(savedReport);
        } catch (error) {
            console.error('Erro ao salvar:', error);
            throw error;
        }
    };

    return (
        <div className="flex flex-col gap-4 p-1 max-w-4xl mx-auto">
            <div className="flex justify-between items-center">
                <input
                    type="text"
                    value={report.title}
                    onChange={(e) => setReport((prev) => ({ ...prev, title: e.target.value }))}
                    className="text-2xl font-bold border-none outline-none bg-transparent flex-grow"
                    placeholder="Título do Relatório"
                />
                <ReportActions report={report} onSave={handleSave} />
            </div>

            <BlockList
                blocks={report.blocks}
                onUpdateBlock={updateBlock}
                onDeleteBlock={deleteBlock}
                onMoveBlock={moveBlock}
            />

            <Toolbar onAddBlock={addBlock} />
        </div>
    );
} 