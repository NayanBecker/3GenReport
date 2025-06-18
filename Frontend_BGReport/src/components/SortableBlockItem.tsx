import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { GripVertical } from 'lucide-react';
import type { Block } from '../types/block';
import { SlateBlock } from './SlateBlock';

interface SortableBlockItemProps {
    block: Block;
    updateBlock: (id: string, newChildren: any[]) => void;
}

export function SortableBlockItem({ block, updateBlock }: SortableBlockItemProps) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: block.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
    };

    return (
        <div ref={setNodeRef} style={style} className="flex-1 items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm border border-transparent focus-within:border-blue-500">
            <div className='flex items-start gap-2'>

                <button {...attributes} {...listeners} className="cursor-grab touch-none p-2 text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md self-start mt-1">
                    <GripVertical size={20} />
                </button>
                <div className="flex-grow bg-red-200 pl-3">
                    <SlateBlock block={block} updateBlock={updateBlock} />
                </div>
            </div>
        </div>
    );
}