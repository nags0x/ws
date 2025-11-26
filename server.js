import { WebSocketServer } from "ws";

const ws_server = new WebSocketServer({port: 8080});
console.log("listening on ws://localhost:8080");

ws_server.on('connection', (ws) => {
      ws.on('error', err => console.log('error on server: ', err));

      ws.on('message', (msg) => {
        // console.log("server recieved msg: ", msg);
        console.log(msg.toString());
        // ws.send('server recieved');
      })

      ws.on('close', () => console.log('ws connection closed'));


})