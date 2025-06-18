const express = require("express");
const app= express();
const urlRoute=require("./routes/url");
const userRouter= require("./routes/users")
const connect = require("./connect");
require('dotenv').config();


app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 
connect();
app.get("/",(req,res)=>{
    res.render('homePage');
});



app.get("/home",(req,res)=>{
    res.render('homePage');
})
///request handling based on routes 
app.use("/url",urlRoute);

app.use("/user",userRouter);

app.listen(8000,()=>{
    console.log("port 8000");
})


