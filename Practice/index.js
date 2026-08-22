// server a programme.. waits for request and sends response..

// give me something -> it returns something.. :)


import http from "http";

const server = http.createServer((req, res) => {

    if (req.method === "GET" && req.url === "/") {
        res.end("Hello from server");
    }

    else if (req.method === "GET" && req.url === "/users") {
        res.end("Users");
    }

    else {
        res.statusCode = 404;
        res.end("Not Found");
    }

});

server.listen(4000, () => {
    console.log("Server running on port 4000");
});


