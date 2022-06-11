const express = require("express");
const mongoose = require("mongoose");
const port = 5000;
const data = require("./data.json")

const app= express();

app.get("/getRooms",(req,res)=>{
    res.json(data.Rooms)
})
app.get("/getTajAmenities",(req,res)=>{
    res.json(data.Rooms.Taj[1].Amenities);
})
app.get("/getTajPrice",(req,res)=>{
    res.json(data.Rooms.Taj[2].Price);
})

app.listen(port,()=>{
    console.log(`server running at ${port}`)
})