import { readFile, writeFile } from 'node:fs/promises';

const fileUrl = new URL('../src/data/fercalImages.ts', import.meta.url);
const source = await readFile(fileUrl, 'utf8');

const declarationPattern = /^export const FERCAL_PANORAMICA_IMAGE = .*;\r?$/gm;
let panoramaCount = 0;

const normalized = source.replace(declarationPattern, (line) => {
  panoramaCount += 1;
  return panoramaCount === 1 ? line : '';
});

if (panoramaCount === 0) {
  throw new Error('FERCAL_PANORAMICA_IMAGE não foi encontrada em src/data/fercalImages.ts');
}

if (normalized !== source) {
  await writeFile(fileUrl, normalized.replace(/\n{3,}/g, '\n\n'), 'utf8');
  console.log(`fercalImages.ts normalizado: ${panoramaCount - 1} declaração(ões) duplicada(s) removida(s).`);
} else {
  console.log('fercalImages.ts já está normalizado.');
}
