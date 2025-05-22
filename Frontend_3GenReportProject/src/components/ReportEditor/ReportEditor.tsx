import React, { useState } from 'react';
import type { Block, Report } from '../../types';
import BlockList from './BlockList';
import Toolbar from './Toolbar';

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
        const newBlock: Block = {
            id: crypto.randomUUID(),
            type,
            content: '',
            order: report.blocks.length,
            title: 'Novo Bloco'
        };

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

    return (
        <div className="flex flex-col gap-4 p-4 max-w-4xl mx-auto pr-[200px]">
            <input
                type="text"
                value={report.title}
                onChange={(e) => setReport((prev) => ({ ...prev, title: e.target.value }))}
                className="text-2xl font-bold border-none outline-none"
                placeholder="Título do Relatório"
            />

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