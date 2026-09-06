
const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {

    if (req.url === "/" && req.method === "GET") {

        res.writeHead(200, {
            "Content-Type": "text/html"
        });

        res.end(`
<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>

    <style>
        body {
            margin: 0;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: blue;
            font-family: Arial, sans-serif;
        }

        h1 {
            color: white;
            font-size: 60px;
        }
    </style>
</head>

<body>

    <h1 id="message">Hello World</h1>

    <script>
        document.getElementById("message").innerHTML = "Hello World";
    </script>

</body>
</html>
        `);

    } else {

        res.writeHead(404, {
            "Content-Type": "text/plain"
        });

        res.end("404 - Page Not Found");
    }
});

server.on("error", (err) => {
    console.error("Server error:", err);
});

server.listen(PORT, "0.0.0.0", () => {
    console.log("Node.js server running on port " + PORT);
});

