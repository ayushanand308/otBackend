require('dotenv').config();
const WebSocket = require('ws');
const { setupWSConnection } = require('y-websocket/bin/utils');

// Port number for the WebSocket server
const PORT = process.env.PORT || 1234;

const wss = new WebSocket.Server({ port: PORT });

// Handle WebSocket connections
wss.on('connection', (ws, req) => {
  setupWSConnection(ws, req, { docName: 'my-document-name' });
});

console.log(`WebSocket server is running on ws://localhost:${PORT}`);
