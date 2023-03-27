import express from 'express';
import homeController from '../controller/homeController';
let router = express.Router();

const initWebRoute = (app) => {
  router.get('/', homeController.getHomepage);
  // router.get('/', (req, res) => {
  //   const user = { name: 'quoc', age: 26 };
  //   res.render('home.ejs', { user });
  // });
  return app.use('/', router);
};

export default initWebRoute;
