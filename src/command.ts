import { RestClient } from './restClient';

export type Command = (item: string, value: string) => Promise<any>;

export function createCommand(client: RestClient): Command {
  return (item: string, value: string) => {
    return Promise.resolve({});
  };
}
