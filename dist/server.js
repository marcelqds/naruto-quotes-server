/**
 * @author Marcelo Q. Santana
 */ 

const http = require('http');
const { getOneQuote } = require('./read-quotes');

const requestResponse = async (req, res) => {
    res.writeHead(201,getHeaders());
    let data = getOneQuote();
    let mqdsData = JSON.stringify(data);
    res.end(mqdsData);
}

const getHeaders = () => {
    const headers = {
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : '*',
    }
    return headers;
}

const server = http.createServer(requestResponse);

module.exports = {
    server
}

