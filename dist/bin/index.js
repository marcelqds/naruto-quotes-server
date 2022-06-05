#!/usr/bin/env node
/**
 * @author Marcelo Q. Santana
 * @copyright 2022 Marcelo Q. Santana.
 */ 

const { server } = require('../server.js');
const { loadQuotes } = require('../read-quotes');
const { getPort } = require('../port');

const port = getPort();

(async() =>{
   let hasQuotes = await loadQuotes();
   if(!hasQuotes){
        console.log('Data quotes invalid!');
        process.exit();
    }

    server.listen(port, () => {
        console.log(`Server started! :: http://localhost:${port}`);
    });
})();

