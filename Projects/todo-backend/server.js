const tasks = require("./tasks");
const express = require("express");
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    console.log(req.url);
    console.log(req.path);
    res.send("<h1>Hello World!</h1><p>Welcome to my website.</p>");
});

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// POST /tasks
app.post('/tasks', (req, res) => {
    const newTask = {
        id: tasks.length + 1,
        title: req.body.title,
        done: false
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// PATCH /tasks/:id
app.patch('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === parseInt(req.params.id));
    
    if (!task) {
        return res.status(404).json({ error: "task not found" });
    }
    
    task.done = req.body.done;
    res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
    const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
    
    if (index === -1) {
        return res.status(404).json({ error: "task not found" });
    }
    
    tasks.splice(index, 1); 
    res.status(204).send(); 
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));