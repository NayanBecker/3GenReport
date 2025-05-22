export type BlockType = 'text' | 'attachment' | 'citation';

export interface Block {
    id: string;
    type: BlockType;
    content: string;
    order: number;
    title: string;
}

export interface TextBlock extends Block {
    type: 'text';
}

export interface AttachmentBlock extends Block {
    type: 'attachment';
    fileUrl: string;
    fileName: string;
}

export interface CitationBlock extends Block {
    type: 'citation';
    source: string;
}

export interface Report {
    id: string;
    title: string;
    blocks: Block[];
    createdAt: Date;
    updatedAt: Date;
} 