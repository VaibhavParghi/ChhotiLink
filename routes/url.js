const express = require("express");

const router = express.Router();
const {handlegenerateNewShortURL,
    redirect_to_original,
handlegetAnalytics }=require("../controllers/url");
const URL = require("../models/url");


//render home page 
router.get('/mainpage',(req,res)=>{
    res.render('urls');
})

router.post("/",handlegenerateNewShortURL);



router.get("/:shortId",redirect_to_original)

router.get("/analytics/:shortId",handlegetAnalytics)
module.exports=router;
