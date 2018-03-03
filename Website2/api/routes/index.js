var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlC3Products = require('../controllers/ProductController');

// profile
router.get('/profile', auth, ctrlProfile.profileRead);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

//StoreC3 Products
router.post('/updateC3Product',ctrlC3Products.updateProduct);
router.post('/deleteC3Product',ctrlC3Products.deleteProduct);
router.post('/createC3Product',ctrlC3Products.createProduct);
router.post('/getC3Products',ctrlC3Products.getProducts);

module.exports = router;
