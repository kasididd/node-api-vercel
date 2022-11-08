const express = require('express');
const app = express();
const PORT = 4000
const fs = require('fs');
var HTMLParser = require('node-html-parser');

var root = HTMLParser.parse('<ul id="list"><li>Hello World</li></ul>');
app.listen(PORT,()=>{
    console.log('http://localhost:'+PORT);
})

app.get('/',(req,res)=>{
    res.send("root")
})
try {
  const data = fs.readFileSync('/Users/joe/test.txt', 'utf8');
  console.log(data);
} catch (err) {
  console.error(err);
}
let data = "This is a file containing a collection of books.";
  
fs.writeFile("books.txt", data, (err) => {
  if (err)
    console.log(err);
  else {
    console.log("File written successfully\n");
    console.log("The written has the following contents:");
    console.log(fs.readFileSync("books.txt", "utf8"));
  }
});

module.exports = app
