"use strict"

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const createServer = () => {
    const app = express();
    const port = process.env.PORT || 3009;
    const host = process.env.HOST || 'localhost';

    app.use(cors());
    app.use(helmet());
    app.use(express.json({limit: '20mb'}));
    app.use(express.urlencoded({ extended: true, limit: '20mb' }));

    app.post('/', (req, res) => {
        res.json(req.body);
    });

    app.get('/', (req, res) => {
        res.end('Hola');
    });
    
    app.listen(port, (err) => {
        if (err) console.error(err);
        console.log(`Server listening on ${host}:${port}`);
    });
}

createServer();