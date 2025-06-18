const shortid=require("shortid");
const URL = require("../models/url");

async function handlegenerateNewShortURL(req,res) {
    const body = req.body;

    if(!body.url) return res.status(400).json({error:"url is required"})
    
    const shortId  = shortid();
    await URL.create({
        shortId:shortId,
        redirectURL:body.url,
        visitedHistory : [],
    });

    return res.json({id:shortId});
}

// async function redirect_to_original(req,res) {
//     const shortId = req.params.shortId;
//     const entry = await URL.findOneAndUpdate({
//             shortId
//     },
//     {$push:{
//         visitedHistory:{timestamp:Date.now()}, 
//     }});

//     // Add check for when URL is not found
//     if (!entry) {
//         return res.status(404).json({error: "Short URL not found"});
//     }

//     res.redirect(entry.redirectURL);
// }
async function redirect_to_original(req, res) {
  const shortId = req.params.shortId;

  const entry = await URL.findOneAndUpdate(
    { shortId },
    { $push: { visitedHistory: { timestamp: Date.now() } } }
  );

  if (!entry) {
    return res.status(404).json({ error: "Short URL not found" });
  }

  // Ensure the redirectURL has http or https
  let redirectUrl = entry.redirectURL;
  if (!/^https?:\/\//i.test(redirectUrl)) {
    redirectUrl = 'https://' + redirectUrl;
  }

  res.redirect(redirectUrl);
}


async function  handlegetAnalytics(req,res) {
    const shortId = req.params.shortId;
    const   result = await URL.findOne({shortId});
    res.json({totalclick:result.visitedHistory.length})
}
module.exports={handlegenerateNewShortURL,redirect_to_original,handlegetAnalytics};
