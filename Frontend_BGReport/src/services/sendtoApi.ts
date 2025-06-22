interface CompilePayload {
    documentConfig: string;
    documentContent: string;
}

export async function compileAndDownloadPdf(payload: CompilePayload) {
    const response = await fetch(`${'http://localhost:3000'}/compile`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.log || 'Falha ao compilar o PDF.');
    }

    const pdfBlob = await response.blob();

    const url = window.URL.createObjectURL(pdfBlob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'report.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
}