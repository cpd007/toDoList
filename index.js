import express from "express";
import bodyParser from "body-parser";

var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const todayList = [];
const workList = [];
//var index = 0;

app.post("/", (req,res) => {
    todayList.push(req.body['newItem']);
    res.render("index.ejs", {showList1: todayList});
});

app.post("/work", (req,res) => {
    workList.push(req.body['newItem']);
    res.render("work.ejs", {showList: workList});
    //res.redirect("/work");
});

app.get("/", (req,res) => {
    res.render("index.ejs", {showList1: todayList});
});

app.get("/work", (req,res) => {
    res.render("work.ejs", {showList: workList});
});

app.listen(port, () => {
    console.log('server running on port', port);
});