/**
 * Напечатать "Hello world" в браузере
 */

// подключаем модуль http
const http = require('http');

// создаем сервер
const server = http.createServer((req, res) => {

    // устанавливаем заголовок Content-Type
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // отправляем ответ "Hello World"
    res.end('Hello World');

});

// слушаем порт 3000
server.listen(3000, '90.156.202.37');

console.log('Server running at http://90.156.202.37:3000/');
