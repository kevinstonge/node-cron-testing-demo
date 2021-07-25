const express = require('express');
const server = express();
require('./scheduler.js');
module.exports = server;