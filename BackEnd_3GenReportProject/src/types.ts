export interface Block {
    id: string;
    type: 'text' | 'citation' | 'attachment' | 'section' | 'subsection';
    title: string;
    content: string;
    order: number;
    source?: string;
    fileName?: string;
    fileUrl?: string;
    number?: number;
    parentSectionNumber?: number;
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

export interface UploadFileResponse {
    fileUrl: string;
    fileName: string;
}

export interface CreateReportDTO extends Omit<Report, 'id' | 'createdAt' | 'updatedAt'> { }

export interface UpdateReportDTO extends Partial<CreateReportDTO> { }
