// Create web server
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');

let comments = [];

// Read JSON file
fs.readFile('comments.json', 'utf-8', (err, data) => {
  if (err) throw err;

  comments = JSON.parse(data);
});