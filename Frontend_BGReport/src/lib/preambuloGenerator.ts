import type { DocConfig } from '../types/block';

export function generatePreambulo(config: DocConfig): string {
    const documentClass = `\\documentclass[${config.fontSize}pt]{article}`;

    // define configs de relatorio LaTeX
    const packages = [
        '\\usepackage[utf8]{inputenc}',
        '\\usepackage[portuguese]{babel}',
        '\\usepackage{amsmath}',
        '\\usepackage{graphicx}',
        '\\usepackage[colorlinks=true, allcolors=blue]{hyperref}',
        '\\usepackage{float}',
        `\\usepackage[${config.paperSize},top=${config.marginTop}cm,bottom=${config.marginBottom}cm,left=${config.marginLeft}cm,right=${config.marginRight}cm]{geometry}`

    ];

    let lineSpacingSetup = '';

    if (config.lineSpacing !== 'single') {
        packages.push('\\usepackage{setspace}');
        if (config.lineSpacing === 'onehalf') {
            lineSpacingSetup = '\\onehalfspacing';
        } else if (config.lineSpacing === 'double') {
            lineSpacingSetup = '\\doublespacing';
        }
    }

    return [
        documentClass,
        ...packages,
        lineSpacingSetup
    ].filter(Boolean).join('\n'); // remove strings vazias
}