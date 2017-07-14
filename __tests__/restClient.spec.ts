const mock__request = {
  get: jest.fn().mockImplementation(() => Promise.resolve()),
  post: jest.fn()
};
jest.mock('request-promise', () => mock__request);

const { createClient } = require('../src/restClient');

describe('restClient', () => {
  const HOST = 'http://localhost:8080';
  let client;

  beforeEach(() => {
    client = createClient(HOST);
  });

  describe('get', () => {
    it('should send header accept: application/json', () => {
      const path = '/foo';
      client.get(path);

      expect(mock__request.get).toHaveBeenCalledWith(expect.anything(), {
        headers: { accept: 'application/json' }
      });
    });

    it('should send get correct path', () => {
      const path = '/foobar';

      client.get(path);
      expect(mock__request.get).toHaveBeenCalledWith(
        `${HOST}${path}?type=json`,
        expect.anything()
      );
    });

    it('should return parsed JSON', () => {
      const response = { foo: { bar: 1 } };
      mock__request.get.mockImplementationOnce(() =>
        Promise.resolve(JSON.stringify(response))
      );

      return client.get('').then(r => {
        expect(r).toEqual(response);
      });
    });
  });
});
