var ex = require("express");

var app = ex();
app.set("view engine","ejs");
app.get("/",function(req,res){
  res.render("index");
});

app.get("/introduce",function(req,res){
  res.render("introduce");
})

app.get("/specification",function(req,res){
  res.render("specification");
})

console.log("listen 1214");
app.listen(1214);
