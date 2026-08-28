const express = require("express")

const app = express();

app.use(express.json());
let todos = [
    {
        id: 1,
        title: "Learn Express",
        completed: false
    },
    {
        id: 2,
        title: "Build backend",
        completed: false
    }
];

app.get("/todos", (req, res) => {
    res.json(todos);
});

app.get("/todos/:id", (req, res) => {
    const id = Number(req.params.id);

    const todo = todos.find(todo => todo.id === id);

    res.json(todo);
});

app.post("/todos" , (req,res) => {
    const newTodo = {
        id: todos.length + 1,
        title: req.body.title,
        completed : false
    };

    todos.push(newTodo);

    res.status(201).json(newTodo);
})

