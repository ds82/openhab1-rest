const EventSource = require('eventsource')
const EventEmitter = require('events');

export function createEventsource(url: string) {
  const eventUrl = `${url}/rest/items/events`;
  const source = new EventSource(eventUrl);
  const emitter = new EventEmitter();

  source.onmessage = (msg: any) => {
    // todo
  };

  return {
    emitter,
    source
  };
}

// es.onmessage = function(msg) {
//   console.log(msg);
// }

// es.onerror = function(err) {
//   console.log('ERROR', err);
// }