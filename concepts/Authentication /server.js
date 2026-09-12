// imagine a person sends request 
// how do we figure out if that person is the right one. 
// so we have authentication. 

// authentication -> who are you?
// authorization -> operations allowed.

// cookies => automatically stores and send small pieces of data.

// 
const express = require("express");
const bcrypt = require("bcrypt");
const fs = require("fs");

const app = express();

app.use(express.json());
app.use(express.static("public"));

const PORT = 3000;

function getUsers(){
    
}