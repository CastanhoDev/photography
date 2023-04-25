const express = require('express');
const fs = require('fs');
const PORT = process.env.PORT || 3000;

const folderPath = 'path/to/folder'; 
const app = express();
const path = require('path');

app.set('view engine', 'ejs'); // set the view engine to EJS

// Serve the static files from the "images" folder
app.use(express.static(__dirname + '/public'));

// Serve the index.html file
app.get('/', (req, res) => {
  const images = [];
  res.render('index', {images});
});

app.listen(PORT, () => {
  console.log('Server listening on port '+PORT);
});

app.get('/animals', (req, res) => {
  const folderPath = 'images/animals';
  fs.readdir( 'public/'+folderPath, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
  
    const images = files.filter(file => path.extname(file).toLowerCase() === '.jpg' || path.extname(file).toLowerCase() === '.png')
      .map(file => ({ src: path.join(folderPath, file) }));
  
    res.render('index', { images });
  });
});