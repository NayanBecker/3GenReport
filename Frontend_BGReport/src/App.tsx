import { useState, useEffect, useCallback } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, type DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { v4 as uuidv4 } from 'uuid';
import { SortableBlockItem } from './components/SortableBlockItem';
import type { Block, BlockType } from './types/block';
import { generateLatex } from './lib/latexGenerator';
import { Plus } from 'lucide-react';


const initialBlocks: Block[] = [
  {
    id: uuidv4(),
    type: "section",
    children: [{ type: "paragraph", children: [{ text: "Introdução" }] }]
  },
  {
    id: uuidv4(),
    type: "text",
    children: [{ type: "paragraph", children: [{ text: "Este é o parágrafo inicial do seu documento. Você pode formatar o texto em " }, { text: "negrito", bold: true }, { text: " ou " }, { text: "itálico", italic: true }, { text: "." }] }]
  },
];

export default function App() {
  const [blocks, setBlocks] = useState<Block[]>(initialBlocks);
  const [latexOutput, setLatexOutput] = useState("");

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      setBlocks((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }, []);

  const updateBlock = useCallback((id: string, newChildren: any[]) => {
    setBlocks((currentBlocks) =>
      currentBlocks.map((block) =>
        block.id === id ? { ...block, children: newChildren } : block
      )
    );
  }, []);

  const addBlock = useCallback((type: BlockType) => {
    const newBlock: Block = {
      id: uuidv4(),
      type,
      children: [{ type: "paragraph", children: [{ text: "" }] }],
    };
    setBlocks((prev) => [...prev, newBlock]);
  }, []);

  useEffect(() => {
    const output = generateLatex(blocks);
    setLatexOutput(output);
  }, [blocks]);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full md:w-1/2 overflow-y-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={blocks}>
              <div className="space-y-3">
                {blocks.map((block) => (
                  <SortableBlockItem key={block.id} block={block} updateBlock={updateBlock} />
                ))}
              </div>
            </SortableContext>
          </DndContext>
          <div className="mt-6 flex flex-wrap gap-2">
            <button onClick={() => addBlock("section")} className="btn-add">
              <Plus size={16} className="mr-1" /> Seção
            </button>
            <button onClick={() => addBlock("subsection")} className="btn-add">
              <Plus size={16} className="mr-1" /> Subseção
            </button>
            <button onClick={() => addBlock("text")} className="btn-add">
              <Plus size={16} className="mr-1" /> Texto
            </button>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-gray-800 text-gray-200 p-4 md:p-8 overflow-y-auto font-mono text-sm">
        <h2 className="text-xl font-bold mb-4 text-white border-b border-gray-600 pb-2">Saída LaTeX em Tempo Real</h2>
        <pre className="whitespace-pre-wrap"><code>{latexOutput}</code></pre>
      </div>
    </div>
  );
}