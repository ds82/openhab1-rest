#!/usr/bin/env node
const argv = require('yargs').argv;

import { connect } from '../src/';
const { send } = connect(argv.host);

send(argv.item, argv.value);
