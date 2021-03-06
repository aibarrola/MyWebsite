var express = require("express");
var app = express();


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));



app.get("/", function(req,res){
    res.render("home");
});
app.get("/home", function(req,res){
    res.render("home");
});

app.get("/projects",function(req,res){
    res.render("projects");
});

app.get("/projects/affirmation", function(req,res){
    res.render("projects/affirmation");
});

app.get("/projects/pairingtool", function(req,res){
    res.render("projects/pairingtool");
});

app.get("/projects/schedulemaster", function(req,res){
    res.render("projects/schedulemaster");
});

app.get("/projects/coronaAdventure", function(req,res){
    res.render("projects/coronaAdventure");
});

app.get("/projects/yelpcamp", function(req,res){
    res.render("projects/yelpcamp");
});

app.get("/projects/subtleasiannetwork", function(req,res){
    res.render("projects/subtleasiannetwork");
});

app.get("/about", function(req,res){
    res.render("about");
});

app.get("/leader", function(req,res){
    res.render("leader");
});

app.get("/leader/vsa", function(req,res){
    res.render("leader/vsa");
});


app.get("*", function(req,res){
    res.send("Invalid URL");
});


var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Website has started!");
});