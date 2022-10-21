const fs = require('fs');


// fs.writeFile('testfile1.txt', 'I work at NS - 12345', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('successfully file created.');
            
//     }
// })

// fs.rename('testfile1.txt', 'testfile2.txt', (err) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log('successfully done.')
//     }
// })


// fs.unlink - delete file
// fs.appendfile - to add content


fs.readFile('testfile2.txt', 'utf8', (err, file) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log(file)
    }
})