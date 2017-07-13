import * as Promise from 'bluebird';
const request = require('request-promise');

import { replace, pipe, prepend } from 'ramda';

const DEFAULT_OPTS = {
  headers: {
    accept: 'application/json'
  }
};
const prep = (str1: String) => (str2: String) => `${str1}${str2}`;
const app = (str1: String) => (str2: String) => `${str2}${str1}`;

export interface RestClient {
  get(path: string): Promise<any>;
  post(path: string, body: any): Promise<any>;
}

export function createClient(url: string): RestClient {
  const getUrl = pipe(replace(/^\/+/, ''), prep(`${url}/`), app('?type=json'));

  function get(path: string): Promise<any> {
    return request.get(getUrl(path), DEFAULT_OPTS).then(JSON.parse);
  }

  function post(path: string, body: any): Promise<any> {
    return request.post({
      url: getUrl(path),
      body: body
    });
  }

  return {
    get,
    post
  };
}
