//const express = require('express');
import express from 'express';
import configViewEngine from './config/viewEngine';
const app = express();

configViewEngine(app);

app.get('/', (req, res) => {
  const user = { name: 'quoc', age: 26 };
  res.render('home.ejs', { user });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
