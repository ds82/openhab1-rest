'use strict';

const WebSocket = require('ws');

const ws = new WebSocket('http://10.0.4.1:8080/rest/items?type=json', {
  perMessageDeflate: false,
  headers: {
    Accept: 'application/json'
  }
});

ws.on('open', function open() {
  console.log('open');
});

ws.on('message', function incoming(data) {
  console.log(data);
});

// var socket = require('socket.io-client')('http://10.0.4.1:8080/rest/items');

// socket.on('error', e => console.log('ERROR', e));

// socket.on('connect', () => console.log(`connected`));
// socket.on('event', event => console.log('event!', event));
// socket.on('disconnect', () => ?Accept=application/jsonconsole.log('disconnect'));

// const EventSource = require('eventsource');
// let urls = ['http://10.0.4.1:8080/rest/items?Accept=application/json'];

// urls.forEach(url => {
//   const es = new EventSource(url, {
//     headers: { Accept: 'application/json', type: 'json' }
//   });
//   es.onmessage = function(msg) {
//     console.log(`EVENT (${url})`, msg);
//   };

//   es.onerror = function(err) {
//     console.log(`ERROR (${url})`, err);
//   };
// });

setInterval(() => {}, 10000);

// var WebSocketClient = require('websocket').client;

// var client = new WebSocketClient();

// client.on('connectFailed', function(error) {
//   console.log('Connect Error: ' + error.toString());
// });

// client.on('connect', function(connection) {
//   console.log('WebSocket Client Connected');
//   connection.on('error', function(error) {
//     console.log('Connection Error: ' + error.toString());
//   });
//   connection.on('close', function() {
//     console.log('echo-protocol Connection Closed');
//   });
//   connection.on('message', function(message) {
//     if (message.type === 'utf8') {
//       console.log("Received: '" + message.utf8Data + "'");
//     }
//   });

// function sendNumber() {
//   if (connection.connected) {
//     var number = Math.round(Math.random() * 0xffffff);
//     connection.sendUTF(number.toString());
//     setTimeout(sendNumber, 1000);
//   }
// }
// sendNumber();
// });

// client.connect('ws://10.0.4.1:8080/rest/items?type=json');
