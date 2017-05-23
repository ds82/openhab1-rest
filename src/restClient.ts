import * as Promise from 'bluebird';
const request = require('request-promise');

export interface RestClient {
  get(path: string): Promise<any>;
  post(path: string, body: any): Promise<any>;
};

export function createClient(url: string): RestClient {

  function getUrl(path: string) {
    return `${url}/${path}`;
  }

  function get(path: string): Promise<any> {
    return request.get(getUrl(path));
  }

  function post(path: string, body: any): Promise<any> {
    return request.post({
      url: getUrl(path),
      body: body
    });
  }

  return {
    get, post
  };
}