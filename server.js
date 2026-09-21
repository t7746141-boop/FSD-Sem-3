const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    if (req.url === "/") {
        res.end("<h1>Welcome to Node.js HTTP Server! (EXP3)</h1>");
    } else if (req.url === "/about") {
        res.end("<h1>About Page</h1><p>This is a beginner Node.js server experiment.</p>");
    } else {
        res.end("<h1>404 Page Not Found</h1>");
    }
});

server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
