// src/types.ts
import type { BaseEditor } from 'slate';
import { ReactEditor } from 'slate-react';
import { HistoryEditor } from 'slate-history';

export type BlockType = "section" | "subsection" | "text" | "image";

export type CustomText = {
    text: string;
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
};

export type ParagraphElement = { type: "paragraph"; children: CustomText[] };

export type CustomElement = ParagraphElement;

export interface Block {
    id: string;
    type: BlockType;
    children: CustomElement[];
}

declare module "slate" {
    interface CustomTypes {
        Editor: BaseEditor & ReactEditor & HistoryEditor;
        Element: CustomElement;
        Text: CustomText;
    }
}