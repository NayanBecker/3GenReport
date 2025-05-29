import mongoose, { Schema, Document } from 'mongoose';
import { Report, Block } from '../types';

export interface ReportDocument extends Omit<Report, 'id'>, Document {
    id: string;
}

const blockSchema = new Schema({
    id: { type: String, required: true },
    type: {
        type: String,
        required: true,
        enum: ['text', 'attachment', 'citation']
    },
    content: { type: String, required: true },
    order: { type: Number, required: true },
    title: { type: String, required: true },
    fileUrl: { type: String },
    fileName: { type: String },
    source: { type: String }
}, { _id: false });

const reportSchema = new Schema({
    id: { type: String, required: true },
    title: { type: String, required: true },
    blocks: [blockSchema],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

// Middleware para atualizar o updatedAt antes de salvar
reportSchema.pre('save', function (this: ReportDocument, next) {
    this.updatedAt = new Date();
    next();
});

export const ReportModel = mongoose.model<ReportDocument>('Report', reportSchema); 