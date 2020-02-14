var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next){
  res.render('index', { title: 'My Portfolio' });
});

/* GET home page. */
router.get('/home', function(req, res, next){
  res.render('home', { title: 'My Portfolio' });
});

/* GET About page. */
router.get('/about', (req, res, next) => {
  res.render('about', { title: 'About Page' });
});

/* GET projects page. */
router.get('/projects', (req, res, next) => {
  res.render('projects', { title: 'Projects Page' });
});

/* GET Contact page. */
router.get('/contact', (req, res, next) => {
  res.render('contact', { title: 'Contact Us Page' });
});

module.exports = router;
