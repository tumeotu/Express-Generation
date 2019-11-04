var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('user/home', { title: 'Trang chủ',layout: 'index' });
});
router.get('/index.html', function(req, res, next) {
  res.render('user/home', { title: 'Trang chủ',layout: 'index'});
});
router.get('/contact-us.html', function(req, res, next) {
  res.render('user/contact', { title: 'Liên hệ',layout: 'index' });
});
router.get('/acount.html', function(req, res, next) {
  res.render('user/acount', { title: 'Tài khoản' ,layout: 'index'});
});
router.get('/checkout.html', function(req, res, next) {
  res.render('user/checkout', { title: 'Thanh toán',layout: 'index' });
});
router.get('/Cart.html', function(req, res, next) {
  res.render('user/cart', { title: 'Giỏ hàng',layout: 'index'});
});
router.get('/login.html', function(req, res, next) {
  res.render('user/login', { title: 'Đăng nhập' ,layout: 'index'});
});
router.get('/register.html', function(req, res, next) {
  res.render('user/register', { title: 'Đăng ký',layout: 'index' });
});
router.get('/forgotpasswork.html', function(req, res, next) {
  res.render('user/forgotpasswork', { title: 'Quên tài khoản /mật khẩu',layout: 'index' });
});
router.get('/success.html', function(req, res, next) {
  res.render('user/success', { title: 'Quên tài khoản /mật khẩu' ,layout: 'index'});
});
router.get('/products-detail.html', function(req, res, next) {
  res.render('user/product-detail', { title: 'Sản phầm' ,layout: 'index'});
});
router.get('/history.html', function(req, res, next) {
  res.render('user/history', { title: 'Tài khoản' ,layout: 'index'});
});
router.get('/product.html', function(req, res, next) {
  res.render('user/product', { title: 'Tài khoản' ,layout: 'index'});
});


router.get('/brands.html', function(req, res, next) {
  res.render('user/brands', { title: 'Tài khoản' ,layout: 'index'});
});
router.get('/catolory.html', function(req, res, next) {
  res.render('user/catolory', { title: 'Tài khoản' ,layout: 'index'});
});
router.get('/dilevery.html', function(req, res, next) {
  res.render('user/dilevery', { title: 'Tài khoản' ,layout: 'index'});
});
module.exports = router;
