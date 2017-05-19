const EventSource = require('eventsource')
const es = new EventSource('http://10.0.4.1:8080/rest/items/events')

es.onmessage = function(msg) {
  console.log(msg);
}

es.onerror = function(err) {
  console.log('ERROR', err);
}