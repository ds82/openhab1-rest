import {connect} from './src/index';


const {
  sendCommand
} = connect('http://10.0.4.1:8080');

sendCommand('Muell_Restmuell', 'ON')
  .catch(err => console.log(err));

setTimeout(() => {
  sendCommand('Muell_Restmuell', 'OFF')
    .catch(err => console.log(err));
}, 3500);