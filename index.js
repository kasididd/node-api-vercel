const express = require('express');
const app = express();
const PORT = 4000
var HTMLParser = require('node-html-parser');

var root = HTMLParser.parse('<ul id="list"><li>Hello World</li></ul>');
app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
})

app.get('/',(req,res)=>{
    res.send(root)
})

module.exports = app