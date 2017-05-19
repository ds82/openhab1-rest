const request = require('request-promise');

export interface RestClient {
  get(path: string): Promise<any>;
};

export function createClient(url: string): RestClient {

  function getUrl(path) {
    return `${url}/${path}`;
  }

  function get(path: string): Promise<any> {
    return request.get(getUrl(path));
  }

  return {
    get: (path: string) => Promise.resolve({})
  };
}