import React from 'react';
import type { Block, CitationBlock, AttachmentBlock } from '../../types';

interface DragHandleProps {
    role?: string;
    tabIndex?: number;
    'aria-disabled'?: boolean;
    'aria-pressed'?: boolean;
    'aria-roledescription'?: string;
    'aria-describedby'?: string;
    onKeyDown?: (event: React.KeyboardEvent) => void;
    onMouseDown?: (event: React.MouseEvent) => void;
    onPointerDown?: (event: React.PointerEvent) => void;
}

interface BlockComponentProps {
    block: Block;
    onUpdate: (updates: Partial<Block | CitationBlock | AttachmentBlock>) => void;
    onDelete: () => void;
    dragHandleProps?: DragHandleProps;
}

export default function BlockComponent({ block, onUpdate, onDelete, dragHandleProps }: BlockComponentProps) {
    const renderBlockContent = () => {
        switch (block.type) {
            case 'text':
                return (
                    <textarea
                        value={block.content}
                        onChange={(e) => onUpdate({ content: e.target.value })}
                        className="w-full p-2 border rounded min-h-[100px] resize-y"
                        placeholder="Digite seu texto aqui..."
                    />
                );

            case 'attachment': {
                const attachmentBlock = block as AttachmentBlock;
                return (
                    <div className="flex flex-col gap-2">
                        <input
                            type="file"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    onUpdate({
                                        content: file.name,
                                        fileUrl: URL.createObjectURL(file),
                                        fileName: file.name,
                                    } as Partial<AttachmentBlock>);
                                }
                            }}
                            className="w-full"
                        />
                        {attachmentBlock.content && (
                            <div className="text-sm text-gray-600">
                                Arquivo anexado: {attachmentBlock.content}
                            </div>
                        )}
                    </div>
                );
            }

            case 'citation': {
                const citationBlock = block as CitationBlock;
                return (
                    <div className="flex flex-col gap-2">
                        <textarea
                            value={citationBlock.content}
                            onChange={(e) => onUpdate({ content: e.target.value })}
                            className="w-full p-2 border rounded min-h-[60px] resize-y"
                            placeholder="Digite a citação aqui..."
                        />
                        <input
                            type="text"
                            value={citationBlock.source || ''}
                            onChange={(e) => onUpdate({ source: e.target.value } as Partial<CitationBlock>)}
                            className="w-full p-2 border rounded"
                            placeholder="Fonte da citação"
                        />
                    </div>
                );
            }
        }
    };

    return (
        <div className="border rounded-lg p-4 bg-white shadow-sm group">
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2 flex-grow">
                    <div className="cursor-grab opacity-40 group-hover:opacity-100 transition-opacity" {...dragHandleProps}>
                        ⋮⋮
                    </div>
                    <input
                        type="text"
                        value={block.title}
                        onChange={(e) => onUpdate({ title: e.target.value })}
                        className="text-lg font-medium border-none outline-none bg-transparent flex-grow"
                        placeholder="Título do bloco"
                    />
                </div>
                <div className="flex items-center gap-2">
                    <div className="text-sm font-medium text-gray-500">
                        {block.type === 'text' && 'Texto'}
                        {block.type === 'attachment' && 'Anexo'}
                        {block.type === 'citation' && 'Citação'}
                    </div>
                    <button
                        onClick={onDelete}
                        className="text-red-500 hover:text-red-700 ml-4"
                    >
                        Excluir
                    </button>
                </div>
            </div>
            {renderBlockContent()}
        </div>
    );
} 