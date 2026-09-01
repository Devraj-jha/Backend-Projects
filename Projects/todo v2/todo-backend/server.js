const tasks = require("./tasks");
const express = require("express");
const cors = require('cors');
const app = express();
const Task = require('./models/task');


const mongoose = require("mongoose");
const task = require("./models/task");


require('dotenv').config();
const PORT = 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('Connection error:', err));
app.get('/', (req, res) => {
    console.log(req.url);
    console.log(req.path);
    res.send("<h1>Hello World!</h1><p>Welcome to my website.</p>");
});

app.get('/tasks', async(req, res) => {
   const tasks = await Task.find(); 

   res.json(tasks);
});

// POST /tasks
app.post('/tasks', async(req, res) => {
   
    const newTask = new task({title: req.body.title});
    await newTask.save();
    res.status(201).json(newTask);

});

// PATCH /tasks/:id
app.patch('/tasks/:id', async (req, res) => {  const task = await Task.findByIdAndUpdate(    req.params.id,    { done: req.body.done },    { new: true }  );  if (!task) return res.status(404).json({ error: 'Task not found' });  res.json(task);});
app.delete('/tasks/:id', async (req, res) => {  await Task.findByIdAndDelete(req.params.id);  res.status(204).send();});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));