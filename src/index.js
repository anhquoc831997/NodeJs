//const express = require('express');
import express from 'express';
import configViewEngine from './config/viewEngine';
import initWebRoute from './route/web';
import * as dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT;
configViewEngine(app);
initWebRoute(app);
app.listen(port, () => {
  console.log('Server started on port', port);
});
