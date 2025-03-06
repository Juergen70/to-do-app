const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require("body-parser");

const app = express();

// TODO: Verbinde eine Datenbank dazu

const db = new sqlite3.Database('./tasks.db');

app.use(bodyParser.json()); // Middelware

db.run('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, completed BOOLEAN DEFAULT 0)');


// TODO: Schreibe request/respons

app.get('/', (req, res)=> {
    res.send('request received');
})

//Wenn ein neues Item hinzugefügt werden soll
// soll Nodejs server dieses so behandeln
app.post('/add', (req, res)=>{
    db.run(INSERT INTO tasks (titel) VALUES(?), [req.body.titel] function() {
      res.json({tag: "Mittwoch", bald_wirds: "Mittagspause"});
    });
});

// Liste mir alle existierenden Items
// Hier sollten nur alle Items als JSON im Response geschrieben werden 
app.get('/Liste_abrufen',(reg, res)=>{
    db.all('SELECT * FROM tasks', function(err,rows ){
        res.json(rows);
    })
})

app.listen(3050,"localhost",()=>{
    console.log("bald ist Mittagspause")
})