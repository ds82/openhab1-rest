const EventEmitter = require('events');
const urlParse = require('url-parse');
import { Observable } from 'rxjs/Observable';

const mock__WS = jest.fn();
jest.mock('ws', () => mock__WS);

const { createChangeObservable } = require('../src/events');

describe('events', () => {
  const SAMPLE_URL = 'http://10.0.4.1';

  beforeEach(() => {
    jest.resetModules();
  });

  it('should connect to <HOST>/rest/items', () => {
    createChangeObservable(SAMPLE_URL);
    expect(mock__WS).toHaveBeenCalledWith(`${SAMPLE_URL}/rest/items?type=json`);
  });

  it('should return an Observable', () => {
    expect(createChangeObservable(SAMPLE_URL)).toBeInstanceOf(Observable);
  });

  it('Observable should trigger if `message` event triggers in eventSource', () => {
    const stub__EE = new EventEmitter();
    mock__WS.mockImplementation(() => stub__EE);

    const spy = jest.fn();
    const FAKE_DATA = { foo: { bar: { bunny: 'foofoo' } } };

    createChangeObservable(SAMPLE_URL).subscribe(spy);

    expect(spy).not.toHaveBeenCalled();
    stub__EE.emit('message', FAKE_DATA);
    expect(spy).toHaveBeenCalledWith(FAKE_DATA);
  });
});
