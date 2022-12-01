var express = require('express');
var app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
const pool = require("./db-config");

app.get('/getList', function (req, res) {
    var sql = 'select * from social_media_name;'
    pool.query(sql, (error, results) => {
        if (error) {
            reject(error)
        }
        if(results){
            res.send({
                name: results.rows[0].name
            });
        }
    });
})

var server = app.listen(3006, function () {
  var host = 'localhost'
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})