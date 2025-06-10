export type BlockType = 'text' | 'attachment' | 'citation' | 'section' | 'subsection';

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

export interface SectionBlock extends Block {
    type: 'section';
    number: number;
}

export interface SubsectionBlock extends Block {
    type: 'subsection';
    number: number;
    parentSectionNumber: number;
}

export interface Report {
    id: string;
    title: string;
    blocks: Block[];
    createdAt: Date;
    updatedAt: Date;
    author?: string;
    institution?: string;
    department?: string;
    keywords?: string[];
    abstract?: string;
    references?: string[];
} 