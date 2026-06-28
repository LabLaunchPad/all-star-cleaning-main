import fs from 'fs';
import path from 'path';

const serverDir = path.join(process.cwd(), 'dist', 'server');
const clientDir = path.join(process.cwd(), 'dist', 'client');

// Ensure directories exist
fs.mkdirSync(serverDir, { recursive: true });
fs.mkdirSync(clientDir, { recursive: true });

// Create dummy entrypoint
fs.writeFileSync(path.join(serverDir, 'entry.mjs'), 'export default { fetch() {} };\n');
