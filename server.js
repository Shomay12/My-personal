/**
 * ============================================================================
 * 🌸 PINK TEDDY WONDERLAND — AUTO-SYNC LOCAL SERVER (server.js)
 * ============================================================================
 * Automatically scans `photos/`, `love-letter/`, and `music/` whenever you
 * refresh the browser so any files you drop into those folders appear live!
 * Includes automatic port selection if port 3000 is already in use.
 * ============================================================================
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { scanAll } from './sync-photos.js';

const __filename = fileURLToPath(import.meta.url);
const ROOT = path.dirname(__filename);
let PORT = parseInt(process.env.PORT || '3000', 10);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.avif': 'image/avif',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav',
  '.ogg': 'audio/ogg',
  '.m4a': 'audio/mp4',
  '.txt': 'text/plain; charset=utf-8'
};

scanAll();

function createServer() {
  const server = http.createServer((req, res) => {
    try {
      const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
      let pathname = decodeURIComponent(parsedUrl.pathname);
      if (pathname === '/') pathname = '/index.html';

      if (pathname === '/folder-manifest.js') {
        const manifest = scanAll();
        res.writeHead(200, {
          'Content-Type': 'application/javascript; charset=utf-8',
          'Cache-Control': 'no-store'
        });
        res.end(`window.FOLDER_MANIFEST = ${JSON.stringify(manifest, null, 2)};`);
        return;
      }

      const safePath = path.normalize(path.join(ROOT, pathname));
      if (!safePath.startsWith(ROOT)) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
      }

      if (!fs.existsSync(safePath) || fs.statSync(safePath).isDirectory()) {
        res.writeHead(404);
        res.end('Not found');
        return;
      }

      const ext = path.extname(safePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache'
      });
      fs.createReadStream(safePath).pipe(res);
    } catch (err) {
      res.writeHead(500);
      res.end('Server error');
    }
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      PORT++;
      server.listen(PORT);
    } else {
      console.error('Server error:', err);
    }
  });

  server.on('listening', () => {
    console.log(`\n🧸💖 Khushiii (My Latu) × Shomayyy Love Page running at: http://localhost:${PORT}\n`);
  });

  server.listen(PORT);
  return server;
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename)) {
  createServer();
}

export { createServer };
