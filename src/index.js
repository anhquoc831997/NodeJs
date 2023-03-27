//const express = require('express');
import express from 'express';
import configViewEngine from './config/viewEngine';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT;
configViewEngine(app);

app.get('/', (req, res) => {
  const user = { name: 'quoc', age: 26 };
  res.render('home.ejs', { user });
});

app.listen(port, () => {
  console.log('Server started on port ', { port });
});
