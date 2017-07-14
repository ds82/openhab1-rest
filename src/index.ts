import { RestClient, createClient } from './restClient';
import { createCommand, Command } from './command';
import { createChangeObservable } from './events';
import { Observable } from 'rxjs/Observable';
import { Item } from './item';

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
  const getStatus = createCommand(client.get.bind(client));

  return {
    client,
    send,
    getStatus,
    change$
  };
}
