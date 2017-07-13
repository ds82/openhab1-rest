const WS = require('ws');
const EventEmitter = require('events');

export interface OpenhabEventEmitter {
  onChange: (item: string, fn: Function) => void;
}

interface Events {
  emitter: any;
}

export function createEventsource(url: string): OpenhabEventEmitter {
  const eventUrl = `${url}/rest/items?type=json`;
  const source = new WS(eventUrl);
  const emitter = new EventEmitter();

  source.onmessage = (msg: any) => {
    // todo
  };

  function onChange(item: string, fn: Function) {

  }

  return {
    onChange
  };
}

// es.onmessage = function(msg) {
//   console.log(msg);
// }

// es.onerror = function(err) {
//   console.log('ERROR', err);
// }
