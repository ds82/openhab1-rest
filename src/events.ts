const WS = require('ws');

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';

import { Item } from './item';

export function createChangeObservable(url: string): Observable<Item> {
  const eventUrl = `${url}/rest/items?type=json`;
  const source = new WS(eventUrl);

  return Observable.fromEvent(source, 'message');
}
