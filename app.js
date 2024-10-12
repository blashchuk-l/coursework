const http = require('http');
const fs = require('fs');
const path = require('path');
const PORT = 8888;

const server = http.createServer((req, res) => {
    console.log('Server request')
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    res.write('This is my server');
    res.end();
});

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listeting port ${PORT}`);
});
