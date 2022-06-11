const express = require("express");
const app = express();
const port = 5000;
const data = require("./Data.json");

app.get("/BookedData",(req,res)=>{
    res.json(data.BookedData);
})
app.get("/BookedData/RoomName",(req,res)=>{
    res.json(data.BookedData.RoomName);
})

app.get("/BookedData/CustomerName",(req,res)=>{
    res.json(data.BookedData.CustomerName);
})

app.get("/BookedData/Date",(req,res)=>{
    res.json(data.BookedData.Date);
})

app.get("/BookedData/StartTime",(req,res)=>{
    res.json(data.BookedData.StartTime);
})

app.get("/BookedData/EndTime",(req,res)=>{
    res.json(data.BookedData.EndTime);
})
app.listen(port,()=>{
    console.log(`server is running at ${port}`)
})