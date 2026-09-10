import sharp from 'sharp';
import { readdir, stat } from 'node:fs/promises';
let before = 0, after = 0;
for (const file of await readdir('public/images')) {
  if (!file.endsWith('.png')) continue;
  const source = `public/images/${file}`;
  const output = source.replace('.png', '.webp');
  const width = file.startsWith('avatar') ? 720 : /school|university/.test(file) ? 900 : 600;
  await sharp(source).resize({ width, withoutEnlargement: true }).webp({ quality: 84, effort: 5 }).toFile(output);
  before += (await stat(source)).size; after += (await stat(output)).size;
}
await sharp('public/images/avatar-voxel.png').resize(48, 48).webp({ quality: 80 }).toFile('public/favicon.webp');
console.log(JSON.stringify({ originalBytes: before, optimizedBytes: after, reduction: `${Math.round((1-after/before)*100)}%` }));
