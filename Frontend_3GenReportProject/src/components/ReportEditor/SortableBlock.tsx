import React from 'react';
import type { Block } from '../../types';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import BlockComponent from './Block';

interface SortableBlockProps {
    block: Block;
    onUpdate: (updates: Partial<Block>) => void;
    onDelete: () => void;
}

export function SortableBlock({ block, onUpdate, onDelete }: SortableBlockProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({ id: block.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.7 : 1,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="relative"
        >
            <BlockComponent
                block={block}
                onUpdate={onUpdate}
                onDelete={onDelete}
                dragHandleProps={{ ...attributes, ...listeners }}
            />
        </div>
    );
} 