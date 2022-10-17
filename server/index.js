import express from "express";
import cors from "cors";

const app = express()
const port = 8000

app.use(cors())

app.get('/',(req,res)=>{
    res.json({msg:"Hello World"})
}) 

app.listen(port,()=>{
    console.log(`Running on http://localhost:${port}`)
})