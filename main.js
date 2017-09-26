let http = require('http');
let url = require('url');
let fs = require('fs');
let uc = require('upper-case');
let express = require('express');
let app = express();

// Prepare Server from src
app.use('/', express.static(__dirname + '/src/views'));
app.use('/css', express.static(__dirname + '/src/css'));
app.use('/fonts', express.static(__dirname + '/src/fonts'));
app.use('/images', express.static(__dirname + '/src/images'));

// Prepare Server from node modules
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js', express.static(__dirname + '/node_modules/vue/dist'));

app.listen(8080);
