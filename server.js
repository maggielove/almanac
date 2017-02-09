var express = require('express');
var path = require('path');

var app = express();
var port = 8080;

var weather_key = process.env.WU_ALMANAC_KEY;

app.use(express.static('./'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './dist/src/index.html'));
});

app.get('/keys', function(req, res) {
    res.send(weather_key);
});

var server = app.listen(port, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Almanac running on port ', port);
});
