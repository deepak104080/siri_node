const os = require('os');

console.log('arch - ', os.arch());
console.log('platform - ', os.platform());
console.log('total memory - ', os.totalmem());
console.log('free memory - ', os.freemem());
console.log('os type - ', os.type());
console.log('user info - ', os.userInfo());