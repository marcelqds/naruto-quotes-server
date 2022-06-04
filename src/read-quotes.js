const { createReadStream } = require('fs');
const { readFile } = require('fs/promises');
const path = require('path');

let quotes = null;

const ReadQuotes = async() => {
    if(quotes) return true;

    try{
        const pathFile = path.join(__dirname,'utils','quotes.json');

        const fileRead = await readFile(pathFile,{'encoding': 'utf8'});
        quotes = await JSON.parse(fileRead);
        if(!typeof(quotes) === 'object') return null;
        const { id, name, quote } = quotes[0];
        if(!(id && name && quote)) return null;

        return true;
        
    }catch(e){
        console.log(e);
    }
}

const getOneQuote = () => {
    length = quotes.length;
    let index = Math.floor(Math.random() * length);
    return quotes[index];    
}

module.exports={
    ReadQuotes,
    getOneQuote,
};
