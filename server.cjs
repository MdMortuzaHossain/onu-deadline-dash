const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const page = fs.readFileSync(path.join(__dirname, 'index.html'));
http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(page);
  } else if (req.url === '/favicon.ico') {
    res.writeHead(204); res.end();
  } else { res.writeHead(404); res.end('Not found'); }
}).listen(4173, '127.0.0.1', () => console.log('ONU preview: http://localhost:4173'));