const express = require('express');
const app = express();
const PORT = 4000

app.listen(PORT,()=>{
    console.log('listening on port '+PORT);
})

app.get('/',(req,res)=>{
    res.send('this is my APU running....')
})

module.exports = app