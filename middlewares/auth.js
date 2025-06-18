const{getUser}=require("../services/auth")

async function restrictTologinUserOnly(req,res,next) {
    const userUid=req.cookies.uid;
    if(!userUid) return res.redirect("/user/login");
    const user = getUser(userUid);

    if(!user) return req.redirect("/user/login");
    
    req.user = user;
    next();
}
