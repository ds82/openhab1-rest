const WS = require('ws');
import { prop } from 'ramda';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';

import { Item } from './item';

const dataProp = prop('data');

export function createChangeObservable(url: string): Observable<Item> {
  const eventUrl = `${url}/rest/items?type=json`;
  const source = new WS(eventUrl, {
    perMessageDeflate: false,
    headers: {
      Accept: 'application/json'
    }
  });

  return Observable.fromEvent(source, 'message').map(dataProp);
}
