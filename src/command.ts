import * as Promise from 'bluebird';
import { RestClient } from './restClient';

export type Command = (item: string, value: string) => Promise<any>;

export function createCommand(action: Function): Command {
  return (item: string = '', value?: any) => {
    return action(`rest/items/${item}`, value);
  };
}
