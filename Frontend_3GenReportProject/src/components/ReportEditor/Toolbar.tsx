import React from 'react';
import type { BlockType } from '../../types';
import { BsFileFont, BsPaperclip, BsChatSquareDotsFill } from "react-icons/bs";


interface ToolbarProps {
    onAddBlock: (type: BlockType) => void;
}

export default function Toolbar({ onAddBlock }: ToolbarProps) {
    return (
        <div className="fixed right-4 top-1/4 flex flex-col gap-3 p-4 bg-gray-300 rounded-lg shadow-lg border border-gray-200">
            <div className="text-sm font-medium text-gray-600 mb-2">
                Adicionar Blocos
            </div>
            <button
                onClick={() => onAddBlock('text')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
                <div className="flex items-center gap-2 text-align-center">
                    <BsFileFont className="h-5 w-5" fill="currentColor" />
                    Texto
                </div>
            </button>

            <button
                onClick={() => onAddBlock('attachment')}
                className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
            >
                <BsPaperclip className="h-5 w-5" fill="currentColor" />
                Anexo
            </button>
            <button
                onClick={() => onAddBlock('citation')}
                className="flex items-center gap-2 px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors"
            >
                <BsChatSquareDotsFill className="h-5 w-5" fill="currentColor" />
                Citação
            </button>
        </div>
    );
} 