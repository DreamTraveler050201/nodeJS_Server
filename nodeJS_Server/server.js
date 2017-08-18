var http = require('http');
//var path = require('path');
var express = require('express');
var fs = require('fs');
//var url = require('url');
var app = express();

//创建服务器
var serverFunction = function(request, response) {
    /*
    //报文头
    //response.setHeader('Content-type', 'text/html') //; charset='utf-8'

    //回应头
    //response.writeHead(200, 'OK');

    //返回数据
    //response.write('<html><head><meta charset=\'utf-8\' /><title>DreamTraveler</title></head><body>');
    //response.write('<script>alert(\'Welcome to visit this server\');</script><h1>您正在访问服务器本身！</h1>');
    //response.write('</body></html>');

    //返回结束
    //response.end();
    */
}

//收到了请求
var handleRequest = function(request, response) {

    //变量定义
    var url = request.url;
    var Address = request.connection.remoteAddress;

    if (url === '/') {
        //url = '?/index.html';
        fs.readFile('./index.html', function(err, data) {
            if (err) {
                response.writeHead(404, 'Not Found.');
                response.end();
                throw err;
            }
            response.writeHead(200, 'OK');

            response.end(data);
        });
    } else if (url === '/index.html') {
        fs.readFile('./index.html', function(err, data) {
            if (err) {
                response.writeHead(404, 'Not Found.');
                response.end();
                throw err;
            }
            response.writeHead(200, 'OK');

            response.end(data);
        });
    } else if (url === '/src') {
        fs.readFile('./src/html/403.html', function(err, data) {
            if (err) {
                response.writeHead(404, 'Not Found.');
                response.end();
                throw err;
            }
            response.writeHead(403, 'Forbidden');

            response.end(data);
        });
    } else if (url === '/src/html/404.html') {
        fs.readFile('./src/html/403.html', function(err, data) {
            if (err) {
                response.writeHead(404, 'Not Found.');
                response.end();
                throw err;
            }
            response.writeHead(403, 'Forbidden');

            response.end(data);
        });
    } else if (url === '/src/html/403.html') {
        fs.readFile('./src/html/403.html', function(err, data) {
            if (err) {
                response.writeHead(404, 'Not Found.');
                response.end();
                throw err;
            }
            response.writeHead(403, 'Forbidden');

            response.end(data);
        });
    } else if (url === '/src/html') {
        fs.readFile('./src/html/403.html', function(err, data) {
            if (err) {
                response.writeHead(404, 'Not Found.');
                response.end();
                throw err;
            }
            response.writeHead(403, 'Forbidden');

            response.end(data);
        });
    } else if (url === '/src/css') {
        fs.readFile('./src/html/403.html', function(err, data) {
            if (err) {
                response.writeHead(404, 'Not Found.');
                response.end();
                throw err;
            }
            response.writeHead(403, 'Forbidden');
            response.end(data);
        });
    } else if (url === '/src/css/main.css') {
        fs.readFile('./src/html/403.html', function(err, data) {
            if (err) {
                response.writeHead(404, 'Not Found.');
                response.end();
                throw err;
            }
            response.writeHead(403, 'Forbidden');
            response.end(data);
        });
    } else if (url === '/src/img') {
        fs.readFile('./src/html/403.html', function(err, data) {
            if (err) {
                response.writeHead(404, 'Not Found.');
                response.end();
                throw err;
            }
            response.writeHead(403, 'Forbidden');

            response.end(data);
        });
    } else if (url === '/src/js') {
        fs.readFile('./src/html/403.html', function(err, data) {
            if (err) {
                response.writeHead(404, 'Not Found.');
                response.end();
                throw err;
            }
            response.writeHead(403, 'Forbidden');

            response.end(data);
        });
    } else if (url === '/src/js/main.js') {
        fs.readFile('./src/html/403.html', function(err, data) {
            if (err) {
                response.writeHead(404, 'Not Found.');
                response.end();
                throw err;
            }
            response.writeHead(403, 'Forbidden');
            response.end(data);
        });
    } else if (url === '/inside/src/js/mouse.js') {
        fs.readFile('./src/js/mouse.js', function(err, data) {
            if (err) {
                response.writeHead(404, 'Not Found.');
                response.end();
                throw err;
            }
            response.writeHead(301, 'Redirect.');
            response.end(data);
        });
    } else if (url === '/inside/src/js/main.js') {
        fs.readFile('./src/js/main.js', function(err, data) {
            if (err) {
                response.writeHead(404, 'Not Found.');
                response.end();
                throw err;
            }
            response.writeHead(301, 'Redirect.');
            response.end(data);
        });
    } else if (url === '/src/img/111.jpg') {
        fs.readFile('./src/img/111.jpg', function(err, data) {
            if (err) {
                response.writeHead(404, 'Not Found.');
                response.end();
                throw err;
            }
            response.writeHead(200, 'OK');

            response.end(data);
        });
    } else {
        fs.readFile('./src/html/404.html', function(err, data) {
            if (err) {
                response.writeHead(404, 'Not Found.');
                response.end();
                throw err;
            }
            response.writeHead(404, 'Not Found.');

            response.end(data);
        });
    }

    console.log("Visitor ip:[" + request.connection.remoteAddress + ']\nReceive the request[' + url + ']');
}

//服务器的创建
var server = http.createServer(serverFunction);

//如果收到了请求
server.on('request', handleRequest);
//server.on('request', app.use(express.static(__dirname)));

//监听端口
server.listen(8888);

//终端输出
console.log('Server is running at port 8888\n');