const { request } = require("express");
const express = require("express");
const moment= require("moment")
const app = express();
const data = require("./data.json");
app.use(express.json());

app.post("/Book",(req,res)=>{
    const name = req.body;
    const date = moment().format("YYYY-MM-DDTHH:mm"); 
    const startTime="14:52";
    const endTime="22:00";
    const Roomid = 4566621;
    return res.send(`Booking was done by ${name} at ${date} startTime : ${startTime} and endtime : ${endTime} Room-ID : ${Roomid}`);
})

// app.get("/checkout",(req,res)=>{
//     var end = moment().format("YYYY-MM-DDTHH:mm")
//     var time = date-end;
//     console.log(time);
//     res.send(`<h2>The checkout time is ${time}</h2>`)
// })
app.get("/getthedata",(req,res)=>{
    res.header("Content-Type",'application/json');
    res.send(JSON.stringify(data));
})

app.post("/bookName",(req,res)=>{
    const Customer = req.body
    // let = request.body.CustomerName;
 
    res.send(Customer);
})




app.listen(5000,()=>{
    console.log("server running at port number 5000")
})