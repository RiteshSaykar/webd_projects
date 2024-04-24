const express=require("express");
const http=require("http");
const app=express();

app.get("/",function(req,res){

  http.get("")
  res.send("Server is up and running")
});

app.listen(3000,function(req,res){
  console.log("Server is running on port 3000");
})
