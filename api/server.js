const express = require('express');

const Games = require('../games/games-model.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('Server is reponding and running!');
});

module.exports = server;