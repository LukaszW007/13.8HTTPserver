var http = require('http');
var fs = require('fs');
var gloabalData = 'empty';
var image;

function readFile() {
    fs.readFile('./index.html', 'utf-8', function (err, data) {
        gloabalData = data;
    });
}
/*function readImage(){
    fs.readFile('./cat.jpg',function (err,data) {
        if (err) throw err;
        image=data;
    });
}*/

var server = http.createServer(function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/index') {
        readFile();
        response.write(gloabalData.toString());
        response.end();
    } else {
        // readImage();
        response.statusCode = 404;
        response.write('<h1>404: Zła ścieżka!</h1>');
        response.write('<img src="./cat.jpg">');
        response.end();
    }
});
server.listen(8080);