require("./models/user");
const express = require("express");
const mongoose = require("mongoose");
const bodyParser= require("body-parser");
const jwt = require("jsonwebtoken");
mongoose.Promise=global.Promise;


//custom imports
const authRouter = require("./routes/authRoutes");
const app  = express();
const mongoConnectionStr ='mongodb+srv://AdminUser:h9Cz5KoaPJ52bi8n@cluster0-y6kqz.mongodb.net/track-app?retryWrites=true&w=majority';

mongoose.connect(mongoConnectionStr,{
   useNewUrlParser:true,
   useCreateIndex:true,
   useUnifiedTopology:true
});
mongoose.connection.on("error",()=> console.log("lost connection"));
mongoose.connection.on("reconnect",()=>console.log("reconnected to mongo cluster"));
mongoose.connection.on("connection",()=>console.log("connected to cluster"));


app.get('/',(req,res)=>{
   res.send("works");
});
app.use(bodyParser.json());
app.use(authRouter);
app.listen(3000,()=>{
   console.log("listening on 3000");
})