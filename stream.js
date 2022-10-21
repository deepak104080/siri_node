const fs = require('fs');

const readStream = fs.createReadStream('testfile2.txt', 'utf8');
const writeStream = fs.createWriteStream('testfile4.txt');


readStream.on('data', (chunk) => {
    console.log(chunk);
    writeStream.write(chunk);
})

// readStream.pipe(writeStream);