const readline = require('readline');


const read1 = readline.createInterface({input: process.stdin, output: process.stdout});

// read1.question('What is your name?', (userInput) => {
//     console.log('User has typed ################', userInput);
//     read1.close();
// })



read1.question('What is the sume of 2 and 3?', (userInput) => {
    console.log('User has typed ################', userInput);
    if(userInput == 6) {
        console.log('Correct Answer');
        read1.close();
    }
    else {
        read1.setPrompt('\nYour answer is incorrect. Plz try again.');
        read1.prompt();
        read1.on('line', (userInput) => {
            if(userInput == 6) {
                console.log('Correct Answer');
                read1.close();
            }
            else {
                read1.setPrompt('\nYour answer is incorrect. Plz try again.');
                read1.prompt();
            }
        })
    }
})



read1.on('close', () => {
    console.log('-------------Program Successfull.-------------------');
})



//HW
//apply max attempt limit of 10