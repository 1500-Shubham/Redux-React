const express=require("express")
const dotenv =require("dotenv")
const notes= require("./data/notes")
const app = express();
dotenv.config();

app.get("/",(req,res)=>{
    res.json(notes);
})
app.get("/:id",(req,res)=>{
    const note= notes.find((element)=>element._id===req.params.id );
    console.log(req.params);
    res.send(note);
})
PORT= 5000 || process.env.PORT;
app.listen(4000,()=>{console.log(`SERVER listening ${PORT}`)});