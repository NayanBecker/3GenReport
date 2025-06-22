import { useState, useEffect, useCallback } from 'react';
import { DndContext, closestCenter, KeyboardSensor, PointerSensor, useSensor, useSensors, type DragEndEvent } from '@dnd-kit/core';
import { arrayMove, SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable';

import { v4 as uuidv4 } from 'uuid';
import { Download, LoaderCircle, Plus } from 'lucide-react';

import type { Block, BlockType, DocConfig } from './types/block';
import { generateLatex } from './lib/latexGenerator';
import { generatePreambulo } from './lib/preambuloGenerator';

import { SortableBlockItem } from './components/SortableBlockItem';
import { DocumentConfigPanel } from './components/DocumentConfigPanel';
import { compileAndDownloadPdf } from './services/sendtoApi';



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
const initialConfig: DocConfig = {
  fontSize: 12,
  paperSize: 'a4paper',
  marginTop: 2,
  marginBottom: 2,
  marginLeft: 3,
  marginRight: 3,
  lineSpacing: 'onehalf',
};

export default function App() {
  const [blocks, setBlocks] = useState<Block[]>(initialBlocks);
  const [docConfig, setDocConfig] = useState<DocConfig>(initialConfig);

  const [contentLatex, setContentLatex] = useState('');
  const [preambleLatex, setPreambleLatex] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );
  useEffect(() => { setPreambleLatex(generatePreambulo(docConfig)); }, [docConfig]);
  useEffect(() => { setContentLatex(generateLatex(blocks)); }, [blocks]);

  const handleCompile = async () => {
    setIsLoading(true);
    setError(null);

    const payload = {
      documentConfig: preambleLatex,
      documentContent: `\\begin{document}\n\n${contentLatex}\n\n\\end{document}`
    };

    try {
      await compileAndDownloadPdf(payload);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Ocorreu um erro desconhecido.');
    } finally {
      setIsLoading(false);
    }
  };

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
    setPreambleLatex(generatePreambulo(docConfig));
  }, [docConfig]);

  useEffect(() => {
    setContentLatex(generateLatex(blocks));
  }, [blocks]);

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100 dark:bg-gray-900">

      <div className="w-full md:w-64 lg:w-80 bg-gray-800 flex-shrink-0 p-4">
        <DocumentConfigPanel config={docConfig} setConfig={setDocConfig} />
        <div className="pt-4 border-t border-gray-700">
          <button
            onClick={handleCompile}
            disabled={isLoading}
            className="btn-add w-full flex items-center justify-center disabled:bg-gray-500 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <LoaderCircle size={20} className="animate-spin mr-2" />
            ) : (
              <Download size={20} className="mr-2" />
            )}
            {isLoading ? 'Compilando...' : 'Compilar e Baixar PDF'}
          </button>
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </div>

      </div>



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
        <h2 className="text-xl font-bold mb-4 text-white border-b border-gray-600 pb-2">Saída LaTeX</h2>
        <pre className="whitespace-pre-wrap">
          <code className="text-cyan-400">{preambleLatex}</code>

          <code className="text-gray-500">{"\n\n\\begin{document}\n\n"}</code>
          <code className="text-gray-200">{contentLatex}</code>
          <code className="text-gray-500">{"\n\n\\end{document}"}</code>
        </pre>
      </div>
    </div>
  );
}