const express = require("express");
var app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

//mongoose.connect("mongodb://localhost/portfolio_app");

app.get("/",(req,res)=>{
  res.send("hello");
})

app.listen("3000",()=>{
  console.log("started");
})
