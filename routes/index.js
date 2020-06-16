var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'My Profile' });
  // res.sendFile(path.join(__dirname, '../views/home.himl'));
});

module.exports = router;
