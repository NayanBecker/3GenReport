export interface Block {
    id: string;
    type: 'text' | 'citation' | 'attachment';
    title: string;
    content: string;
    order: number;
    source?: string;
    fileName?: string;
    fileUrl?: string;
}

export interface Report {
    id: string;
    title: string;
    blocks: Block[];
    createdAt: Date;
    updatedAt: Date;
}

export interface UploadFileResponse {
    fileUrl: string;
    fileName: string;
}

export interface CreateReportDTO extends Omit<Report, 'id' | 'createdAt' | 'updatedAt'> { }

export interface UpdateReportDTO extends Partial<CreateReportDTO> { }
