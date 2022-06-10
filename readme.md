# Naruto Random Quotes

## Simple app to generate random Naruto quotes using Node.js
![naruto-server-quotes](https://user-images.githubusercontent.com/20728338/173084352-39e5193f-03b2-4546-b69b-55dbca14909a.gif)


### Install

```sh
    npm install naturo-quotes-server-node
```


### Usage

```sh
    npx naruto-quotes-server-node 
```
or

```sh
    node ./node_modules/.bin/naruto-quotes-server-node
```

or set for include property in commandline `--port` and number port greater equal 2000. The default port is `5000`.


### Example set port: 

```sh
    npx naruto-quotes-server-node --port 3005
```
or

```sh
    node ./node_modules/.bin/naruto-quotes-server-node --port 3008
```

### Response

```json
{
    "speaker" : "string",
    "quote" : "string"
}
```



## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
