const express = require("express");

const app = express();

app.use(express.json());

app.get("/users/:id", (req, res) => {
    const id = req.params.id;
    const showPosts = req.query.posts;

    res.json({
        userId: id,
        showPosts: showPosts
    });
});

app.post("/users", (req, res) => {
    const user = req.body;

    res.json({
        message: "User created",
        user: user
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

// query parameter

// accesses using req.query


// routes -> when someone sends this type of http reuqest to this url, do this;


// we can have multiple para meters 

