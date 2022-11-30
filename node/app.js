const express = require('express');
const bodyParser = require('body-parser');

const Routes = require('./routes/routes');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type', 'Authorization');
    next();
})

app.use('/home', Routes);

app.use((req, res) => {
    res.status(404).send('<h1> Page Not Found</h1>')
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(3000)