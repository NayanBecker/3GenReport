import React from 'react';
import type { Block, SectionBlock, SubsectionBlock } from '../../types';
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import type { DragEndEvent } from '@dnd-kit/core';
import {
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { SortableBlock } from './SortableBlock';

interface BlockListProps {
    blocks: Block[];
    onUpdateBlock: (blockId: string, updates: Partial<Block>) => void;
    onDeleteBlock: (blockId: string) => void;
    onMoveBlock: (fromIndex: number, toIndex: number) => void;
}

export default function BlockList({ blocks, onUpdateBlock, onDeleteBlock, onMoveBlock }: BlockListProps) {
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event: DragEndEvent) => {
        const { active, over } = event;

        if (over && active.id !== over.id) {
            const oldIndex = blocks.findIndex((block) => block.id === active.id);
            const newIndex = blocks.findIndex((block) => block.id === over.id);
            onMoveBlock(oldIndex, newIndex);
        }
    };

    // Organize blocks into sections
    const organizedBlocks = blocks.reduce((acc: { [key: string]: Block[] }, block) => {
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

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
        >
            <div className="flex flex-col gap-4">
                <SortableContext
                    items={blocks.map(block => block.id)}
                    strategy={verticalListSortingStrategy}
                >
                    {Object.entries(organizedBlocks).map(([sectionKey, sectionBlocks]) => (
                        <div key={sectionKey} className="flex flex-col gap-1">
                            {sectionBlocks.map((block) => (
                                <SortableBlock
                                    key={block.id}
                                    block={block}
                                    onUpdate={onUpdateBlock.bind(null, block.id)}
                                    onDelete={() => onDeleteBlock(block.id)}
                                />
                            ))}
                        </div>
                    ))}
                </SortableContext>
                {blocks.length === 0 && (
                    <div className="text-center text-gray-500 py-8">
                        Adicione blocos usando os botões acima
                    </div>
                )}
            </div>
        </DndContext>
    );
} 