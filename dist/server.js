/**
 * @author Marcelo Q. Santana
 * @copyright 2022 Marcelo Q. Santana.
 */ 

const http = require('http');
const { getOneQuote } = require('./read-quotes');

const requestResponse = async (req, res) => {
    const headers = {'Content-Type': 'application/json'};
    res.writeHead(201,headers);
    let data = getOneQuote();
    let mqdsData = JSON.stringify(data);
    res.end(mqdsData);
}

const server = http.createServer(requestResponse);

module.exports = {
    server
}

