var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    sess = req.session;
    res.render('uploadorverify', { title: 'Express' , layout: 'uploadorverifylayout', uni_name: sess.uni_name});
  });
  

module.exports = router;