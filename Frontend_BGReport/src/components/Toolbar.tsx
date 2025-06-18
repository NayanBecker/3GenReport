import { useSlate } from 'slate-react';
import { toggleMark, isMarkActive } from '../lib/slateUtils';
import { Bold, Italic, Underline } from 'lucide-react';

const MarkButton = ({ format, icon: Icon }: { format: string, icon: React.ElementType }) => {
    const editor = useSlate();
    const isActive = isMarkActive(editor, format);

    return (
        <button
            type="button"
            onMouseDown={(event) => {
                event.preventDefault();
                toggleMark(editor, format);
            }}
            className={`p-2 rounded-md ${isActive ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"}`}
        >
            <Icon size={16} />
        </button>
    );
};

export const Toolbar = () => {
    return (
        <div className="flex gap-2 mb-2 p-1 bg-gray-100 dark:bg-gray-900 rounded-md sticky top-0 z-10">
            <MarkButton format="bold" icon={Bold} />
            <MarkButton format="italic" icon={Italic} />
            <MarkButton format="underline" icon={Underline} />
        </div>
    );
};