#!/usr/bin/env node
/**
 * @author Marcelo Q. Santana
 */ 
const { server } = require('../server.js');
const { loadQuotes } = require('../read-quotes');
const { getPort, portInUse } = require('../port');

let port = getPort();

(async() =>{
   let hasQuotes = await loadQuotes();
   if(!hasQuotes){
        console.log('Data quotes invalid!');
        process.exit();
    }

    let isUse = true;
    do{
        isUse = await portInUse(port);
        if(isUse)++port;
    }while(isUse);

    server.listen(port, () => {
        console.log(`Server quotes started! :: http://127.0.0.1:${port}`);
    });
})();

