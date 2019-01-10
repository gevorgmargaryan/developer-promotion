const db=require("./db")
var express = require('express');
const bodyParser = require('body-parser');
var app=express();

db.setUpConnection()
// kap e hastatum db-i het
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", ["GET", "PUT", "POST", "DELETE", "OPTIONS"]);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


const url = "http://localhost:8081"

const resSend=(data={}, count ,url)=>{
    let len=Math.ceil(data.length/todosPerPage)
    return {
        links: {
            self: url,
            first: url+"?page[offset]="+1,
        },
        data: [{
            count: count,
            type: "Developers",
            attributes: data,
        }]
    }
}
app.get("/",(req, res)=> {

    db.GetDevoloper()
        .then(data => {
            db.Count()
                .then(count => {
                    res.send(resSend(data, count, url))
                })
        })
})

app.post("/",(req, res)=>{
    db.PostDevoloper(req.body)
    db.Count()
        .then(count=> {
            db.GetDevoloper()
                .then(data=>{
                    console.log("body", data)
                    res.send(resSend(data, count))
                })
        })
})



var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
});
console.log();