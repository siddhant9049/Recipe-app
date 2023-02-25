const mongoose=require("mongoose")

const USER=new mongoose.Schema({
    Email:{String,Number},
    Password:{Number,String}
})
const model = mongoose.model("User",USER)

module.exports=model