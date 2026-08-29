
const express = require("express");

const app = express();


// 1. Middleware
app.use(express.json());


// 2. Logging middleware
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});


// 3. Some temporary data
let todos = [
    { id: 1, title: "Learn Express" },
    { id: 2, title: "Build a backend" }
];


// 4. GET - get all todos
app.get("/todos", (req, res) => {
    res.json(todos);
});


// 5. POST - create a todo
app.post("/todos", (req, res) => {

    const newTodo = {
        id: todos.length + 1,
        title: req.body.title
    };

    todos.push(newTodo);

    res.status(201).json(newTodo);
});


// 6. Error-handling middleware
app.use((err, req, res, next) => {

    res.status(500).json({
        message: "Something went wrong"
    });

});


// 7. Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

