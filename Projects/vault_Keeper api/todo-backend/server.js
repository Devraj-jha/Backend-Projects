
const express = require("express");
const cors = require('cors');
const app = express();
const Task = require('./models/task');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
require('dotenv').config();
const mongoose = require("mongoose");
const task = require("./models/task");



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

app.post('/signup', async (req,res ) => {
    try {
        const { email , password} = req.body;


        const hasPassword = await bcrypt.hash(password, 10);

        const user = new User ({
            email : email,
            password : hasPassword
        })

        await user.save();

        res.status(201).json ({
            message: "account created",
            UserId: user._id
        }) 


    }catch (err){
        res.status(400).json({
            error: "signup failed",
            details: err.message
        })
    }
})


async function login(req ,res){

    const user = await User.findOne({
        email: req.body.email
    })

    if(!user){
        return res.status(401).json({
            error: 'invalid credentials'
        })
    }

    const isMatch = await bcrypt.compare(
        req.body.password,
        user.password
    );

    if(!isMatch){
        return res.status(401).json({
            error: "invaid password"
        }
        );

    };

    const token = jwt.sign(
        {id : user._id},
        process.env.JWT_SECRET,
        {expiresIn: '1h'}
    )

    res.json({token});
    
};


app.post('/login', login)
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