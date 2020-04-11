const express = require("express");
const mongoose= require("mongoose");
const Track = mongoose.model("track");
const {auth}= require("../middlewares/requireAuth");

const router = express.Router();


router.use(auth);

router.get('/tracks',async(req,res)=>{
      const userId = req.user._id;

      const tracks= await Track.find({userId});

      res.send(tracks);
});


router.post("/tracks", async (req,res)=>{
         const {name,locations} = req.body;
         const userId = req.user._id;

         if(!name || !locations){
            return res.status(422).send({error:"provide name and locations"});         
         }
         try{
         const track = new Track({name,locations,userId});
         await track.save();
         return res.status(200).send(track);
         }catch(e){
            res.status(422).send({error:e.message})
         }
})

module.exports = router;