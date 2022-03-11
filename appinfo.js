//Globals - No Window
// __dirname - Path to current directory
// __filename - file name
// require - function to use modules (CommonJS)
// module - info about current mode (file)
// process - info about env where the program is being executed

const os = require('os')

const user = os.userInfo()

console.log(user);

console.log(`The uptimeis ${os.uptime()} seconds`);


// 