// if something went wrong
// instead of writing error msg in every route 

// we write a error handling middle ware

// 4 parameters ( err, req, res , next)



```js
app.get("/", (req, res, next) => {

    const error = new Error("Something went wrong!");

    next(error);
});


// Error-handling middleware
app.use((err, req, res, next) => {

    res.status(500).json({
        message: err.message
    });

});
```
