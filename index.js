const express = require('express');
const app = express();
const PORT = 4000

app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
})

app.get('/',(req,res)=>{
    res.send('this is my APU running....'+"<br/>"+
    "<button> click to create files </button>")
})

module.exports = app