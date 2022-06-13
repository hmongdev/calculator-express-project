//jshint esversion:6
//require express module
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    //this sends the index.html file to the server
    //__dirname is the directory where the index.html file is located on our computer
    console.log(__dirname); // => Users/default/Desktop/dev/calculator-express-practice

    //tell the server to load the index.html file
    res.sendFile(__dirname + '/index.html');
});

//POST handle = what this'll do when we click the submit button
app.post("/", function(req, res) {
    res.send('Thank you for posting that!');
});

app.listen(3000, function () {
    //when port 3000 is loaded, log this message:
    console.log('Server running on port 3000!');
});