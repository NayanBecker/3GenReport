export type BlockType = 'text' | 'attachment' | 'citation';

export interface BaseBlock {
    id: string;
    type: BlockType;
    content: string;
    order: number;
    title: string;
}

export interface TextBlock extends BaseBlock {
    type: 'text';
}

export interface AttachmentBlock extends BaseBlock {
    type: 'attachment';
    fileUrl: string;
    fileName: string;
}

export interface CitationBlock extends BaseBlock {
    type: 'citation';
    source: string;
}

export type Block = TextBlock | AttachmentBlock | CitationBlock;

export interface Report {
    id: string;
    title: string;
    blocks: Block[];
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateReportDTO {
    title: string;
    blocks: Block[];
}

export interface UpdateReportDTO {
    title?: string;
    blocks?: Block[];
}

export interface UploadFileResponse {
    fileUrl: string;
    fileName: string;
} 