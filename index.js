// Server creation using NodeJs
// const http = require('http');
// const server = http.createServer((request, response)=> {
//     console.log("Hey, Waving from console");
//     response.writeHead(200, "content-type:text/html");
//     response.write("Hey, Waving from browser");
//     response.end();
// }).listen(1200);


// Server creating with Express

const express = require('express');
const parser = require('body-parser');
const app = express();

app.set("view engine", "ejs");
app.use(parser.urlencoded({extended: true}));
app.use(express.static("public"));

var task = ["default task"];
var complete = ["finish jquery"];

app.get('/', (req, res) => {
    res.render('index', {task: task, complete: complete});
});

app.post('/addtask', (req, res) => {
    task.push(req.body.newtask);
    res.redirect('/');
});

app.post('/removetask', (req, res) => {
    if (typeof(req.body.check) == "string") {
        complete.push(req.body.check);
        task.splice(task.indexOf(req.body.check), 1);
    } else if (typeof completeTask === "object") {
        alert("Sdf");
        for (var i = 0; i < completeTask.length; i++) {     complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]), 1);
        }
    }
    res.redirect('/');
});

app.listen(1200, (req, res)=> {
    console.log("Server listens at post 1200");
});