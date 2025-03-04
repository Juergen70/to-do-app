const express = require('express');


const app = express();

// TODO: Verbinde eine Datenbank dazu
// TODO: Schreibe request/respons

app.get('/', (req, res)=> {
    res.send('request received');
})

app.listen(3050,"localhost",()=>{
    console.log("bald ist Mittagspause")
})