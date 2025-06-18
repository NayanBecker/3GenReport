import { useMemo } from 'react';
import { createEditor } from 'slate';
import type { Descendant } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { withHistory } from 'slate-history';
import type { Block } from '../types/block';
import { Toolbar } from './Toolbar';
import { renderElement, renderLeaf } from '../lib/slateRenders';

interface SlateBlockProps {
    block: Block;
    updateBlock: (id: string, newChildren: Descendant[]) => void;
}

export function SlateBlock({ block, updateBlock }: SlateBlockProps) {
    const editor = useMemo(() => withHistory(withReact(createEditor())), []);

    const placeholderMap = {
        section: "Título da Seção...",
        subsection: "Título da Subseção...",
        text: "Escreva seu texto aqui..."
    };

    const textClass = block.type === 'section' ? 'text-2xl font-bold' :
        block.type === 'subsection' ? 'text-xl font-semibold' :
            '';

    return (
        <Slate
            editor={editor}
            initialValue={block.children}
            onChange={(value) => {
                const isAstChange = editor.operations.some(op => "set_selection" !== op.type);
                if (isAstChange) {
                    updateBlock(block.id, value);
                }
            }}
        >
            {block.type === 'text' && <Toolbar />}
            <Editable
                renderElement={renderElement}
                renderLeaf={renderLeaf}
                placeholder={placeholderMap.hasOwnProperty(block.type) ? placeholderMap[block.type as keyof typeof placeholderMap] : "Digite algo..."}
                className={`w-full outline-none p-2 dark:text-gray-200 ${textClass}`}
            />
        </Slate>
    );
}