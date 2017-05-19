
import {createClient} from './restClient';
import {createCommand, Command} from './command';
import {createEventsource} from './events';

interface OpenhabClient {
  sendCommand: Command;
};

export function connect(url: string): OpenhabClient {
  const client = createClient(url);
  const emmiter = createEventsource(url);

  const sendCommand = createCommand(client);

  return {
    sendCommand
  };
}