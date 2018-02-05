var http = require('http');
var fs = require('fs');
var gloabalData = 'empty';
var image;

function readTxtFile(response) {
    fs.readFile('./index.html', 'utf-8', function (err, data) {
        gloabalData = data;
        response.write(gloabalData.toString());
        response.end();
    });
}

function readImage(response){
    fs.readFile('cat.jpg','binary',function (err,data) {
        response.writeHead(200, {"Content-Type": "image/jng"});
        response.write(data, "binary");
        response.end();
    });
}


var server = http.createServer(function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/index') {
        readTxtFile(response);

    } else if(request.method==='GET'){
        readImage(response);
    }
});
server.listen(8080);