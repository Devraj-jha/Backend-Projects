
const { default: DotScreenNode } = require("three/examples/jsm/tsl/display/DotScreenNode.js");
const tasks = require("./tasks");
const express = require("express")

const app = express();


app.use(express.json());


app.get('/', (req,res) => {

    console.log((req.url));
    console.log(req.path);
  
    res.send("<h1>Hello World!</h1><p>Welcome to my website.</p>");

});


app.post('/tasks', (req,res) => {
    const newTask = {
        id: tasks.length + 1, 
        title: req.body.title,
        done : false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
})

app.get('/tasks', (req,res) => {
    res.json(tasks);
})

app.listen(3000, () => console.log("server is running "));
