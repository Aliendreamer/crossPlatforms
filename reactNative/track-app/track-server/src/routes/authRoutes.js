const express = require("express");
const mongoose= require("mongoose");
const User = mongoose.model("user");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/signup",async (req,res)=>{
   try{
   const {email,password}=req.body;
   console.log(req.body);
   const user = new User({email,password});
   await user.save();
   const token = jwt.sign({userId:user.id},"secret_key");
   res.send({token});
   }catch(err){
      return res.status(422).send(err.message);
   }
});

router.post('/signin',async (req,res)=>{
    const {email,password}=req.body;
    if(!email || ! password){
       return res.status(422).send({error:"must provide email and password"});
    }
    const user = await  User.findOne({email});
    if(!user)
      return res.status(422).send({error:"invalid password or email"});
   try{
      await user.comparePassword(password);
      const token= jwt.sign({userId:user._id,},"secret_key");
      res.send({token});

   }catch(err){
      return res.status(422).send({error:"invalid password or email"});
   }
})

module.exports = router;