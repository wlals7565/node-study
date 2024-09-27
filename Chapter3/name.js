//console.log(__dirname)
//console.log(__filename)


import { fileURLToPath } from 'url';
import { dirname } from 'path';

// 현재 파일의 URL을 가져와서 경로로 변환
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log(__dirname);
console.log(__filename);