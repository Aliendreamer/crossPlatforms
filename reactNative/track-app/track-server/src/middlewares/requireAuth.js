const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const User = mongoose.model("user");

const auth =(req,res,next)=>{
      const {authorization} = req.headers;
      if(!authorization)
         return res.status(401).send({error:"you must be logged"});

      const token = authorization.replace('Bearer ','');
      jwt.verify(token,"secret_key",async (error,payload)=>{
         if(error)
            return res.status(401).send({error:"you must be logged in"});
         const {userId} = payload;
         const user= await User.findById(userId);
         req.user=user;
         next();
      });
}

module.exports.auth =auth;