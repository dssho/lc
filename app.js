const express=require("express");
const lcRouter=require("./routes/lc.js");
const bodyParser=require("body-parser");
const cors=require("cors");
var app=express();
app.listen(8080);
app.use(cors({
  origin:['http://localhost:8080',"http://127.0.0.1:5500",
  "http://127.0.0.1:5501"],
  credentials:true
}))

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({
  extended:false
}));



app.use('/lc',lcRouter);