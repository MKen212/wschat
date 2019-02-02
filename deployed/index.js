const WebSocket = require ('ws');
const wss = new WebSocket.Server({ port: 3000 });

console.log("WebSocket Server running on port 3000");

wss.on('connection', function connection(ws) {
    console.log("Connected: " + new Date());
    ws.on('message', function incoming(message) {
        console.log("Incomming message: " + new Date());
        wss.clients.forEach(function each(client) {
            client.send(message);
        });
    });
});