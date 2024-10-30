const express= require("express");
const app=express();
app.use(express.json())
let todos=[]

app.post("/todos",(req,res)=>
{
   try{
     console.log(req.body);
   }
   catch(err)
   {
     return res.status(500).json({"mmessage": "please try again later"});
   }
})

app.get("/todos",(req,res)=>
{   try
    { 
        return res.status(200).json({todos})
    }
    catch(err)
    {
        return res.status(500).json({"message":"Please try again later"})
    }
})

app.get("/",(req,res)=>
{
    return res.status(200).json({"message":"everything is fine"});
})
app.listen(3000,()=>
{
  console.log("server is started successfully")
});