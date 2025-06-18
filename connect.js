const mongoose = require("mongoose");
// require('dotenv').config();
async function connect(){
    await mongoose.connect(process.env.MONOG_DB_URL).then(()=>{
        console.log("connected  to database");
    })
    .catch((error)=>{
        console.log(error);
    })

}

module.exports=connect;
