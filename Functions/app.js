const names = require('./2nd-app')
const sayHi = require('../app')
const os = require('os')

const user = os.userInfo()

console.log(user);

console.log(`The uptimeis ${os.uptime()} seconds`);