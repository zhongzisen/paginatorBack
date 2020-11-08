var express = require('express');
var app = express();
const bodyParser = require('body-parser')
const getData = require('./mock-data')
const total = 100;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
});



app.get('/', function (req, res) {
  res.send(getData(total));
});

app.post('/', function (req, res) {
    console.log(req.body);
    const { offset, limit } = req.body;
    const data = getData(total);
    const responseData = {
      data: getData(total).data.slice((offset - 1) * limit, offset * limit),
      total
    };
    res.send(responseData);
  });

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});