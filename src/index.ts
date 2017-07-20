import { prop } from 'ramda';

import { RestClient, createClient } from './restClient';
import { createCommand, Command } from './command';
import { createChangeObservable } from './events';
import { Observable } from 'rxjs/Observable';
import { Item } from './item';

const itemProp = prop('item');

interface OpenhabClient {
  client: RestClient;
  send: Command;
  getStatus: Command;
  change$: Observable<Item>;
}

export function connect(url: string): OpenhabClient {
  const client = createClient(url);
  const change$ = createChangeObservable(url);

  const send = createCommand(client.post.bind(client));

  const getRawStatus = createCommand(client.get.bind(client));
  const getStatus = () => getRawStatus('', '').then(itemProp);

  return {
    client,
    send,
    getStatus,
    change$
  };
}
