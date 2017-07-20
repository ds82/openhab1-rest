const { connect } = require('../src/');
const { send, getStatus, change$ } = connect('http://10.0.4.1:8080');

change$.subscribe((item: any) => console.log('changed item: ', item));

// setInterval(() => {}, 10000);
