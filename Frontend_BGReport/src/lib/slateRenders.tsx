import type { RenderElementProps, RenderLeafProps } from 'slate-react';

export const renderElement = ({ attributes, children, element }: RenderElementProps) => {
    switch (element.type) {
        case "paragraph":
            return <p {...attributes}>{children}</p>;
        default:
            return <div {...attributes}>{children}</div>;
    }
};

export const renderLeaf = ({ attributes, children, leaf }: RenderLeafProps) => {
    if (leaf.bold) {
        children = <strong>{children}</strong>;
    }
    if (leaf.italic) {
        children = <em>{children}</em>;
    }
    if (leaf.underline) {
        children = <u>{children}</u>;
    }
    return <span {...attributes}>{children}</span>;
};