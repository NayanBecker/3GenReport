import type { DocConfig } from '../types/block';

interface DocumentConfigPanelProps {
    config: DocConfig;
    setConfig: React.Dispatch<React.SetStateAction<DocConfig>>;
}

const Label = ({ children }: { children: React.ReactNode }) => (
    <label className="block text-sm font-medium text-gray-400 mb-1">{children}</label>
);

const InputGroup = ({ children }: { children: React.ReactNode }) => (
    <div className="mb-4">{children}</div>
);

export function DocumentConfigPanel({ config, setConfig }: DocumentConfigPanelProps) {

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setConfig(prev => ({
            ...prev,
            [name]: e.target.type === 'number' ? parseFloat(value) : value,
        }));
    };

    return (
        <div className="w-full h-full bg-gray-800 text-white p-4 overflow-y-auto">
            <h2 className="text-xl font-bold border-b border-gray-600 pb-2 mb-6">Configurações do Documento</h2>

            <form>
                <InputGroup>
                    <Label>Tamanho da Fonte (pt)</Label>
                    <select name="fontSize" value={config.fontSize} onChange={handleInputChange} className="input-control">
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                    </select>
                </InputGroup>

                <InputGroup>
                    <Label>Tamanho do Papel</Label>
                    <select name="paperSize" value={config.paperSize} onChange={handleInputChange} className="input-control">
                        <option value="letterpaper">Letter</option>
                        <option value="a4paper">A4</option>
                    </select>
                </InputGroup>

                <InputGroup>
                    <Label>Espaçamento entre Linhas</Label>
                    <select name="lineSpacing" value={config.lineSpacing} onChange={handleInputChange} className="input-control">
                        <option value="single">Simples</option>
                        <option value="onehalf">1.5</option>
                        <option value="double">Duplo</option>
                    </select>
                </InputGroup>

                <InputGroup>
                    <Label>Margens (cm)</Label>
                    <div className="grid grid-cols-2 gap-2">
                        <input type="number" name="marginTop" value={config.marginTop} onChange={handleInputChange} className="input-control" placeholder="Topo" />
                        <input type="number" name="marginBottom" value={config.marginBottom} onChange={handleInputChange} className="input-control" placeholder="Fundo" />
                        <input type="number" name="marginLeft" value={config.marginLeft} onChange={handleInputChange} className="input-control" placeholder="Esquerda" />
                        <input type="number" name="marginRight" value={config.marginRight} onChange={handleInputChange} className="input-control" placeholder="Direita" />
                    </div>
                </InputGroup>
            </form>
        </div>
    );
}