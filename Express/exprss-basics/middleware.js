// they run between request and route 
// it recevies ( req,res , next )
// next() => means continue 

// modify do some work stop the request or. let it continue



//

const express = require("express");

const app = express()

app.use((req,res,next) => {
    console.log("hello world");
    next();
});

app.get("/", (req,res) => {
    res.send("hello world");

});

app.listen(3000);

