import type { Descendant } from 'slate';
import { Text } from 'slate';
import type { Block, CustomText } from '../types/block';

function escapeLatex(text: string): string {
    if (!text) return "";
    return text
        .replace(/\\/g, "\\textbackslash{}")
        .replace(/&/g, "\\&")
        .replace(/%/g, "\\%")
        .replace(/\$/g, "\\$")
        .replace(/#/g, "\\#")
        .replace(/_/g, "\\_")
        .replace(/{/g, "\\{")
        .replace(/}/g, "\\}")
        .replace(/~/g, "\\textasciitilde{}")
        .replace(/\^/g, "\\textasciicircum{}");
}

function serializeSlateNode(node: CustomText): string {
    let text = escapeLatex(node.text);
    if (node.bold) {
        text = `\\textbf{${text}}`;
    }
    if (node.italic) {
        text = `\\textit{${text}}`;
    }
    if (node.underline) {
        text = `\\underline{${text}}`;
    }
    return text;
}

function serializeChildren(children: Descendant[]): string {
    return children.map(node => {
        if (Text.isText(node)) {
            return serializeSlateNode(node);
        }
        if (node.children) {
            return serializeChildren(node.children);
        }
        return "";
    }).join("");
}

export function generateLatex(blocks: Block[]): string {
    return blocks.map(block => {
        const content = serializeChildren(block.children);
        const titleContent = content || "Título em Branco";

        switch (block.type) {
            case "section":
                return `\\section{${titleContent}}`;
            case "subsection":
                return `\\subsection{${titleContent}}`;
            case "text":
                return content;
            default:
                return "";
        }
    }).join("\n\n");
}