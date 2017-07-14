# openhab1-rest

This node module can talk to the openhab1 REST API and receive item updates

## usage

```js
const { connect } = require('openhab1-rest');
const {send, getStatus, change$ } = connect('http://192.168.100.1:8080');

// get current status
getStatus().then(status => console.log('status of all items', status));

// subscribe to changes of items
change$.subscribe(item => console.log('changed item: ', item));

// update item
send('Some_Item', 'Some_Value').then(() => console.log('Item was updated'))

```
