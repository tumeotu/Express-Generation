var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user/head', { title: 'Home' });
});
router.get('/about.html', function(req, res, next) {
  res.render('user/about', { title: 'About' });
});
router.get('/index.html', function(req, res, next) {
  res.render('user/home', { title: 'Home' });
});
router.get('/contact-us.html', function(req, res, next) {
  res.render('user/contact', { title: 'Home' });
});
router.get('/acount.html', function(req, res, next) {
  res.render('user/acount', { title: 'Home' });
});
router.get('/checkout.html', function(req, res, next) {
  res.render('user/checkout', { title: 'Checkout' });
});
module.exports = router;
