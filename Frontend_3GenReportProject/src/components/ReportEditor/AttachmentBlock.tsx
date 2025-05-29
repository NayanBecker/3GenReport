import React, { useState, useRef } from 'react';
import { Rnd } from 'react-rnd';
import type { AttachmentBlock as AttachmentBlockType } from '../../types';
import { BsUpload } from 'react-icons/bs';

interface AttachmentBlockProps {
    block: AttachmentBlockType;
    onUpdate: (updates: Partial<AttachmentBlockType>) => void;
}

export function AttachmentBlock({ block, onUpdate }: AttachmentBlockProps) {
    const [showImagePaste, setShowImagePaste] = useState(false);
    const dropzoneRef = useRef<HTMLDivElement>(null);

    const handleFileDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file && file.type.startsWith('image/')) {
            handleFileSelect(file);
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
        const item = e.clipboardData.items[0];
        if (item && item.type.indexOf('image') !== -1) {
            const file = item.getAsFile();
            if (file) {
                handleFileSelect(file);
            }
        }
    };

    const handleFileSelect = (file: File) => {
        const url = URL.createObjectURL(file);
        onUpdate({
            content: file.name,
            fileUrl: url,
            fileName: file.name,
        });
        setShowImagePaste(false);
    };

    return (
        <div className="space-y-4">
            {!block.fileUrl ? (
                <div
                    ref={dropzoneRef}
                    onDrop={handleFileDrop}
                    onDragOver={(e) => e.preventDefault()}
                    onPaste={handlePaste}
                    onClick={() => setShowImagePaste(true)}
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
                >
                    <div className="flex flex-col items-center gap-2">
                        <BsUpload className="w-8 h-8 text-gray-400" />
                        <p className="text-gray-600">
                            Arraste uma imagem aqui, cole da área de transferência ou clique para selecionar
                        </p>
                        {showImagePaste && (
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => {
                                    const file = e.target.files?.[0];
                                    if (file) {
                                        handleFileSelect(file);
                                    }
                                }}
                                className="hidden"
                            />
                        )}
                    </div>
                </div>
            ) : (
                <Rnd
                    default={{
                        x: 0,
                        y: 0,
                        width: 320,
                        height: 200,
                    }}
                    minWidth={100}
                    minHeight={100}
                    bounds="parent"
                    lockAspectRatio
                    className="relative group"
                >
                    <img
                        src={block.fileUrl}
                        alt={block.fileName}
                        className="w-full h-full object-contain"
                    />
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button
                            onClick={() => onUpdate({ fileUrl: '', fileName: '', content: '' })}
                            className="bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                        >
                            ×
                        </button>
                    </div>
                </Rnd>
            )}
        </div>
    );
} 