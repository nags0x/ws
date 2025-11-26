import {WebSocket} from 'ws';

const ws = new WebSocket("ws://localhost:8080");

ws.on('error', console.error);
ws.on('open', () => {
    ws.send("Am sending u the data");
});
// ws.on('message', (msg) => {
//     // console.log('recieved %s',msg);
// })