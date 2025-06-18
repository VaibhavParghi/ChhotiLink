const express = require("express");

const router = express.Router();
const {signup,login}=require('../controllers/users')
///sign up thing 


router.get('/signup',(req,res)=>{
    res.render('signupPage')
})//render page 

//take data 
router.post('/signup',signup);



//login 
router.get('/login',(req,res)=>{
    res.render('loginPage');
});
router.post('/login',login)
module.exports=router;
