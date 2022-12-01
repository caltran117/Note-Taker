const express = require('express');
const path = require('path');
const notes = require('./db/db.json')
// creating the web server obj for organizing
const app = express();
// setting computer port number for service
const PORT = 3334;

// installing middleware
app.use(express.json())
app.use(express.urlencoded({extended: true }))
app.use(express.static('public'));

// routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')))

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('/api/notes', (req, res) => {
  console.log(notes)
  res.json(notes)
});

// keep your web service awake and listening
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
