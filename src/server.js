const http = require('http');
const { ReadQuotes, getOneQuote } = require('./read-quotes');

let port = 8080;

const argv = process.argv.slice(2);
indexPort = argv.indexOf('--port');

if(argv.length >= 2 
&& indexPort > -1 
&& /^\d{2,4}$/.test(argv[indexPort + 1]))
{
    port = argv[indexPort + 1];
}

const server = http.createServer(async (req, res) => {
    const headers = {'Content-Type': 'application/json'};
    res.writeHead(201,headers);
    let data = getOneQuote();
    let datar = JSON.stringify(data);

    res.end(datar);
});


(async() =>{
   let hasQuotes = await ReadQuotes();
   if(!hasQuotes){
        console.log('Data quotes invalid! '); 
        process.exit();
    }

    server.listen(port, () => {
        console.log(`Server started port:\n http://localhost:${port}`);
    });
})();

