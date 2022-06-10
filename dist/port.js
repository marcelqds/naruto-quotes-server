/**
 * @author Marcelo Q. Santana
*/
const http = require('http');

const getPort = () => {
    const argv = process.argv.slice(2);
    indexPort = argv.indexOf('--port');
    let port = 5000;

    if(argv.length >= 2 
    && indexPort > -1 
    && /^[2-9]\d{2,}$/.test(argv[indexPort + 1]))
    {
        port = argv[indexPort + 1];
    }
    return port;
}

const portInUse = (port = 5000) => {
   return new Promise( async resolve => { 
        let request = await http.get(`http://127.0.0.1:${port}`,_=>{
            console.log(`Port "${port}" is in use`);
            resolve(true);
        });

        request.on('error',_=> {            
            resolve(false);
        });
    });
}


module.exports = {
    getPort,
    portInUse
}
