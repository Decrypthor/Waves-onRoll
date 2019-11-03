var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
const { check, validationResult } = require('express-validator');

router.get('/', function(req, res, next) {
    res.render('signup', { title: 'Signup', layout: 'signuplayout'});
});

//res.render('my_page', { layout: 'my_layout' });
router.get('/success', function(req, res, next) {
    res.render('signupsuccess', { title: 'Signup Success', layout: 'signuplayout'});
});

router.get('/failure', function(req, res, next) {
    res.render('signupfailure', { title: 'Signup Failure', layout: 'signuplayout'});
});

router.post('/', [
    check('uni_name').not().isEmpty(),
    check('uni_email_poc').isEmail(),
    check('uni_website').not().isEmpty(),
    check('uni_phone').not().isEmpty(),
    check('uni_poc').not().isEmpty(),
    check('uni_role').not().isEmpty(),
    check('uni_password').not().isEmpty()
  ],(req,res)=>{
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        console.log(errors.array());
      return res.status(422).json({ errors: errors.array() })
    }

    const uni_name = req.body.uni_name;
    const uni_website = req.body.uni_website;
    const uni_phone = req.body.uni_phone;
    const uni_poc = req.body.uni_poc;
    const uni_role = req.body.uni_role;
    const uni_email_poc = req.body.uni_email_poc;
    // const uni_username = req.body.uni_username;
    const uni_password = req.body.uni_password;
    console.log("test");




    
    MongoClient.connect("mongodb://localhost:27017/", function (err, db) {
   
        if(err) throw err;
        console.log("hii");

        var dbo = db.db('Yovo');
        
        var status = "could not insert it";
        var new_uni = {university_name:uni_name,webiste:uni_website,phone:uni_phone,poc:uni_poc,role:uni_role,email_poc:uni_email_poc,password:uni_password};
        dbo.collection('User').find({ email_poc: uni_email_poc }).count((err,re)=>{

            if(err) throw err;
            console.log("res = "+re);
            if(re!=0){res.json({"status":"Username is taken"});return;}
            dbo.collection('User').insert (new_uni,(err,result)=>{
                if(err) 
                status = err;
                else
                status = result;
                res.json({"status":"yes"});
            });

        });         
     });
});

module.exports = router;