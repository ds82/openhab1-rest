import * as Promise from 'bluebird';
const request = require('request-promise');

import { replace, pipe, prepend, tryCatch } from 'ramda';

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

const parseJson = tryCatch(JSON.parse.bind(JSON), () => {});

export function createClient(url: string): RestClient {
  const getUrl = pipe(replace(/^\/+/, ''), prep(`${url}/`));
  const appendJsonType = app('?type=json');
  const getJsonUrl = pipe(getUrl, appendJsonType);

  function get(path: string): Promise<any> {
    return request.get(getJsonUrl(path), DEFAULT_OPTS).then(parseJson);
  }

  function post(path: string, body: string): Promise<any> {
    body = String(body);
    return request.post({
      url: getUrl(path),
      body: body,
      headers: { 'Content-Type': 'text/plain' }
    });
  }

  return {
    get,
    post
  };
}
