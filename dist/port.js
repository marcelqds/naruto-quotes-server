/**
 * @author Marcelo Q. Santana
 * @copyright 2022 Marcelo Q. Santana.
 */ 

const getPort = () => {
    const argv = process.argv.slice(2);
    indexPort = argv.indexOf('--port');
    let port = 3004;

    if(argv.length >= 2 
    && indexPort > -1 
    && /^[2-9]\d{2,}$/.test(argv[indexPort + 1]))
    {
        port = argv[indexPort + 1];
    }
    return port;
}

module.exports = {
    getPort,
}
