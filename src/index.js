const express = require('express')
const app = express();

app.get("/", (req,res)=>{
    res.json("welcome to DemBack")
})

app.listen(8080, ()=>{
    console.log(`Listening on port 8080`)
})