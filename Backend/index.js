const express=require("express")

const app=express()

const User=require("./Model")

app.use(express.json())

const mongoose=require("mongoose")
const port=5000
mongoose.connect("mongodb://localhost:27017/Sidd")

mongoose.connection.once("open",()=>{
    console.log("connected to database")
}).on("error",(err)=>{
    console.log(err)
})
app.listen(port,()=>console.log(`app is running on Port ${port}`))


app.post("/register",async(req,res)=>{
    try{ const user= await User.create({
         Email:req.body.Email,
        Password:req.body.Password
    })
    res.json({
        status:"Success",
        user,
   

    })
    }catch(e){
        res.status(400).json(
            {
                status:"Failed",
                message:e.message
            }
        )

    }
})

app.get("/signin/:id",async(req,res)=>{
    try{ const user= await User.findOne({
        _id:req.params.id
    })
    res.json({
        status:"Success",
        user,
   
    
    })
    }catch(e){
        res.status(400).json(
            {
                status:"Failed",
                message:e.message
            }
        )

    }
})