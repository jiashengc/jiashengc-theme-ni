var http = require('http');
var url = require('url');
var fs = require('fs');
var uc = require('upper-case');
var express = require('express');
var app = express();

// Prepare Server from src
app.use('/', express.static(__dirname + '/src/views', {
    extensions: ['html']
}));
app.use('/css', express.static(__dirname + '/src/css'));
app.use('/fonts', express.static(__dirname + '/src/fonts'));
app.use('/images', express.static(__dirname + '/src/images'));
app.use('/', express.static(__dirname + '/src/resume'));

// Prepare Server from node modules
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/font-awesome', express.static(__dirname + '/node_modules/font-awesome'))
app.use('/css', express.static(__dirname + '/node_modules/hover.css/css'));
app.use('/js', express.static(__dirname + '/node_modules/vue/dist'));
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));


app.listen(process.env.PORT || 8081);
