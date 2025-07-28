const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    // htmlfile path
    const filePath = path.join(__dirname, 'index.html');

    // Read the HTML file
    fs.readFile(filePath, (err, content) => {
        if (err) {
            // 404 error if fil not found
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end("Error: 404 - Page Not Found");
            return;
        }

        // Status 200 file found
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(content);
    });
});

const PORT = 2004;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});