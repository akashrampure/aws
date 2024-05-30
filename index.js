const exp = require('constants');
const express = require('express');

const port = 8000;

const app = express();

app.get("/index",(req,res)=>{
    res.send("Welcome to Remote Server 🌏");
});

app.listen(port, ()=>{
    console.log(`Server Started on port:${port}`)
})