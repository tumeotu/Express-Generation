var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user/head', { title: 'Trang chủ' });
});
router.get('/about.html', function(req, res, next) {
  res.render('user/about', { title: 'About' });
});
router.get('/index.html', function(req, res, next) {
  res.render('user/home', { title: 'Trang chủ' });
});
router.get('/contact-us.html', function(req, res, next) {
  res.render('user/contact', { title: 'Liên hệ' });
});
router.get('/acount.html', function(req, res, next) {
  res.render('user/acount', { title: 'Tài khoản' });
});
router.get('/checkout.html', function(req, res, next) {
  res.render('user/checkout', { title: 'Thanh toán' });
});
router.get('/Cart.html', function(req, res, next) {
  res.render('user/cart', { title: 'Giỏ hàng'});
});
router.get('/login.html', function(req, res, next) {
  res.render('user/login', { title: 'Đăng nhập' });
});
router.get('/register.html', function(req, res, next) {
  res.render('user/register', { title: 'Đăng ký' });
});
router.get('/forgotpasswork.html', function(req, res, next) {
  res.render('user/forgotpasswork', { title: 'Quên tài khoản /mật khẩu' });
});
router.get('/success.html', function(req, res, next) {
  res.render('user/success', { title: 'Quên tài khoản /mật khẩu' });
});
router.get('/products.html', function(req, res, next) {
  res.render('user/product', { title: 'Quên tài khoản /mật khẩu' });
});
router.get('/history.html', function(req, res, next) {
  res.render('user/history', { title: 'Tài khoản' });
});
router.get('/dilevery.html', function(req, res, next) {
  res.render('user/dilevery', { title: 'Tài khoản' });
});
module.exports = router;
