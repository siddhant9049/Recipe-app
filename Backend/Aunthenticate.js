const jwt=require("jsonwebtoken")


const mongoose=require("mongoose")


const REGISTER=require("./RegisterModel")

const Authentication=async(req,res)=>{
    console.log("In")
    try {
        const token =req.cookies.accesstoken
        const verifytoken=jwt.verify(token,process.env.SECRETKEY)
        const users=await REGISTER.findOne({_id:verifytoken._id,"tokens.token":token})
        if(!users){
            throw new Error("not found")}
            req.token=token;
            req.users=users;
            req.userID=users._id

            next()

        
        
    }
    catch(error){
        res.status(401).send("token invalid")
        console.log(error)
    }
}

module.exports=Authentication