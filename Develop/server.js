const express = require('express');
const path = require('path');

// creating the web server obj for organizing
const app = express();
// setting computer port number for service
const PORT = 3002;

// installing middleware
app.use(express.static('public'));

// routes
app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/sendFile.html'))
);

app.get('/routes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/routes.html'))
);

// keep your web service awake and listening
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
