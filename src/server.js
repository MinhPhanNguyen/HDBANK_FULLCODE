const express = require('express');
const app = express();

const hostname = 'localhost'
const port = 8020


app.get('/', function(req, res) {
    res.send('<h1>Hello World!</h1><hr>')
})

app.listen(port, hostname, () => {
    console.log(`http://${ hostname }:${ port }/`)
  })