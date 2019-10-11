//import expess
const express = require('express');

//create an express application
const server = express();

//mount global middleware
server.use(express.json());

//import router
const projectRouter = require('./projects/projectRouter.js');

//mount router
server.use('/api/projects', projectRouter);

//export server
module.exports = server;