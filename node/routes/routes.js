const path = require('path');
const express = require('express')

const Router = express.Router();

Router.get('/', (req, res) => {
    console.log('in Base Path');
    res.status(200).json({text: 'Hello from Node JS'});
})

module.exports = Router;