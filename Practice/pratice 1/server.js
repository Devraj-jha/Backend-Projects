import express from "express";
import "dotenv/config";
import { exp } from "three/tsl";

const app = express();


const PORT = process.env.PORT || 5000; 

app.use(express.json());


app.get("/", (req,res) => {
    res.status(200).json({
        message: "Server is running"
    });
})

app.get("/users", (req,res) => {
    res.status(200).json(users);
})

app.get("/users/:id", (req,res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);


    if(!user){
        return res.status(404).json({
            message : "user not found"
        });

        
    }
res.json(user);
})


app.post("/users", (req,res) => {
    const {name , age} = req.body;

    const newUser = {
        id: users.length + 1,
        name,
        age
    }

    users.push(newUser);

    res.json(newUser);
})