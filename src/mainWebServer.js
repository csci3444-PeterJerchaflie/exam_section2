var express = require('express');
var app = express();
var myPowers = require('./common/util/math/myPowers');
app.engine('html', require('ejs').renderFile);
app.set('views', './src/views/');

// routes
// set home route
app.get('/', function(req, res) {
    var data2template = {
        head: { title: 'Hello express with ejs' },
        name: 'Peter',
        lastname: 'Jerchaflie'
    };
    res.render('pages/home.ejs', data2template);
});
// set Square route
app.get('/square', function(req, res) {
    var input = 3;
    var data2template = {
        head: { title: 'My Square Page' },
        input: 3,
        result: myPowers.toSqre(input)
    };
    res.render('pages/square.ejs', data2template);
});
// set Cube route
app.get('/cube', function(req, res) {
    var input = 3;
    var data2template = {
        head: { title: 'My Cube Page' },
        input: 3,
        result: myPowers.toCbe(input)
    };
    res.render('pages/cube.ejs', data2template);
});

// set about route
app.get('/about', function(req, res) {
    // res.status(200).render('about'); // NOTE_4 ilker, if no default "view engine" specified above, this will complain; "No default engine was specied and no extension was provided"
    res.status(200).render('pages/about.html'); // NOTE_3b ilker, this is OK if you had done "app.engine('html', require('ejs').renderFile);" before
});

// set everything else to error page
app.get('/*', function(req, res) {
    res.status(404).render('pages/error.ejs', { head: { title: 'Error' } });
});

// start express server
var server = app.listen(8014, function() {
    console.log(
        'express app, hello_express_basic, started and listening at http://%s:%s',
        server.address().address,
        server.address().port);
});