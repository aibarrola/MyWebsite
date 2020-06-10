var express = require("express");
var app = express();


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));



app.get("/", function(req,res){
    res.render("projects");
});

app.get("/projects", function(req,res){
    res.render("projects");
});

app.get("/projects/affirmation", function(req,res){
    res.render("affirmation");
});




app.get("*", function(req,res){
    res.send("Invalid URL");
});

app.listen(3000,function(){
    console.log("Server started...");
});