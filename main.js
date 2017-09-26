let http = require('http');
let url = require('url');
let fs = require('fs');
let uc = require('upper-case');
let express = require('express');
let app = express();

// http.createServer(function (req, res) {
//     let q = url.parse(req.url, true);
//     let filename = "./src" + q.pathname + ".html";
//
//     fs.readFile(filename, function(err, data) {
//
//         // Guard: 404
//         if (err) {
//             res.writeHead(404, {'Content-Type': 'text/html'});
//             return res.end("404 Not Found");
//         }
//
//         // 200
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         res.end();
//     });
//
// }).listen(8080);

// Prepare HTML
app.use('/', express.static(__dirname + '/src/views'));

// Prepare CSS
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'))

// Prepare JS
app.use('/js', express.static(__dirname + '/node_modules/vue/dist'))

app.listen(8080);
