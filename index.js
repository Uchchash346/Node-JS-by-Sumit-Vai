const fs = require('fs');
// fs.writeFileSync('myfile.txt', 'Hello programmers')
// fs.appendFileSync('myfile.txt', ' How are you?')

fs.readFile('myfile.txt', (err, data) => {
    console.log(data.toString());
});
console.log('Hello');