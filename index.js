const express = require('express');
const server = express();
require('./scheduler.js');
server.listen(3000, ()=>{console.log('listening')});

