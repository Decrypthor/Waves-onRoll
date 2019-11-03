var express = require('express');
// var WavesKeeper = require('Waves');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' , layout: 'layout'});
});



router.post('/login', (req,res)=>{
  

 

  const username_l = req.body.username;
  const password_l = req.body.password;
  var x=false;

  MongoClient.connect("mongodb://localhost:27017/", function (err, db) {
   
    if(err) 
      throw err;
    var dbo = db.db('wavepayroll')
    dbo.collection("employee").findOne({email:username_l,password:password_l},(err,result)=>{
      if(err) throw err; 
      x = result;
        console.log(x);
      db.close();
      
      sess = req.session;
      sess.email_poc = req.body.username;
      console.log("sess email = "+sess.email_poc);
      if(x)
        res.json({status:"yes"});
      else
        res.json({status:"no"});

    });
             
  });

});



router.post('/signup', (req,res)=>{

  const username_l = req.body.username;
  const password_l = req.body.password;
  var x=false;

  MongoClient.connect("mongodb://localhost:27017/", function (err, db) {
   
    if(err) 
      throw err;
    var dbo = db.db('wavepayroll')
    dbo.collection("employee").findOne({email_poc:username_l,password:password_l},(err,result)=>{
      if(err) throw err; 
      x = result;
        console.log(x);
      db.close();
      
      sess = req.session;
      sess.email_poc = req.body.username;
      console.log("sess email = "+sess.email_poc);
      res.json({login:x!=null, status:"yes"});

    });
             
  });

});


module.exports = router;
