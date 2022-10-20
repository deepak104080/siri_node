// process generated
// nodejs generated
// code generated


const EventEmitter = require('events');

const eventEmitter = new EventEmitter();


setTimeout(function() {
    eventEmitter.emit('testevent1', 1,2);
}, 2000);


eventEmitter.on('testevent1', (a, b) => {
    console.log('event tested after2 seconds...', a, b)
})