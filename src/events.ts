const EventSource = require('eventsource')
const EventEmitter = require('events');

interface EventEmitter {
  onChange: (item: string, fn: Function) => void
};

interface Events {
  emitter: any;
};

export function createEventsource(url: string): Events {
  const eventUrl = `${url}/rest/items/events`;
  const source = new EventSource(eventUrl);
  const emitter = new EventEmitter();

  source.onmessage = (msg: any) => {
    // todo
  };

  function onChange(item: string, fn: Function) {

  }

  return {
    emitter
  };
}

// es.onmessage = function(msg) {
//   console.log(msg);
// }

// es.onerror = function(err) {
//   console.log('ERROR', err);
// }