describe('index', () => {
  const HOST = 'http://localhost:8080';
  let connection;
  let mock__request, mock__WS;

  beforeEach(() => {
    jest.resetModules();
    mock__request = {
      get: jest.fn().mockImplementation(() => Promise.resolve('{"get": true}')),
      post: jest.fn().mockImplementation(() => Promise.resolve('post'))
    };
    jest.mock('request-promise', () => mock__request);

    mock__WS = jest.fn();
    jest.mock('ws', () => mock__WS);

    const { connect } = require('../src/index');
    connection = connect(HOST);
  });

  describe('getStatus', () => {
    it('should get /rest/items/ if no parameter given', () => {
      return connection.getStatus().then(r => {
        expect(mock__request.get).toBeCalledWith(
          `${HOST}/rest/items/?type=json`,
          expect.anything()
        );
      });
    });
  });

  describe('send', () => {
    it('should send command to openhab', () => {
      return connection.send('Some_Item', 'Some_Value').then(r => {
        expect(r).toEqual('post');
        expect(mock__request.post).toHaveBeenCalledWith({
          url: `${HOST}/rest/items/Some_Item`,
          body: 'Some_Value',
          headers: expect.anything()
        });
      });
    });
  });
});
