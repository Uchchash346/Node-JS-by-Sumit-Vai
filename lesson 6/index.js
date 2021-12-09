// const fs = require('fs');
// const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);

// ourReadStream.on('data', (chunk) => {
//     console.log(chunk);
// })
// console.log("Hello");


const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        // res.write('<body><form method='post' action='/process'><input name='message' /></form></body>');
        res.write('<body><form method="post" action="/process"><input name = "message" /></form></body>')
        res.end();
    } else if (req.url === '/process' && req.method == "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        req.on('end', () => {
            console.log("Stream finished");
            const parseBody = Buffer.concat(body).toString();
            console.log(parseBody);
        })
        res.write('Thank you for submitting.');
        res.end();
    } else {
        res.write('Page not Found');
        res.end();
    }
});


server.listen(3000);
console.log('Listening on Port 3000');