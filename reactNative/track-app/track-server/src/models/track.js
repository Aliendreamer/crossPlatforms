const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pointSchema = new Schema({
   timestamp:Number,
   coords:{latitude:Number,
   longitude:Number,
   altitude:Number,
   accuracy:Number,
   heading:Number,
   speed:Number
   }
      
})
mongoose.model('point',pointSchema)


const trackSchema = new Schema({
    name:{type:String,default:""},
    userId : {
       type: mongoose.Schema.Types.ObjectId,
       ref:'user'
    },
    locations:[pointSchema]
})
mongoose.model('track',trackSchema)