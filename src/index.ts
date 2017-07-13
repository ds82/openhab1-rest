import { RestClient, createClient } from './restClient';
import { createCommand, Command } from './command';
import { OpenhabEventEmitter, createEventsource } from './events';

interface OpenhabClient {
  client: RestClient;
  send: Command;
  getStatus: Command;
  emitter: OpenhabEventEmitter;
}

export function connect(url: string): OpenhabClient {
  const client = createClient(url);
  const emitter = createEventsource(url);

  const send = createCommand(client.post);
  const getStatus = createCommand(client.get);

  return {
    client,
    send,
    getStatus,
    emitter
  };
}
