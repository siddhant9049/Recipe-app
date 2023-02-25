const mongoose=require("mongoose")
const jwt=require("jsonwebtoken")
const USER=new mongoose.Schema({
    Email:{String,Number},
    Password:{Number,String}
})

USER.method.getAuthToken=async function(){
    try{
        let token= jwt.sign({_id:this._id},process.env.SECRETKEY)
        this.tokens=this.tokens.concat({token:token})
        await this.save()
        return token
    }
    catch (error){
        console.log(error)
    }

    
}

const model = mongoose.model("User",USER)


module.exports=model