"use strict";

const express = require('express');
const body = require('body-parser');
const cookie = require('cookie-parser');
const morgan = require('morgan');
const uuid = require('uuid/v4');
const app = express();

const APPLICATION_PORT = 5000;

app.set('views', './static/views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    app.use(express.static(__dirname + "/static"));
    res.render('index', { title: 'Hey', message: 'Hello there!'});
    // res.sendfile("static/hello.html");
});

let port = process.env.PORT || APPLICATION_PORT;

app.listen(port);
