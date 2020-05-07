const os = require('os')

console.log("Platform: ", os.platform)

console.log("Processor Architecture: ", os.arch())

console.log("Processors Info: ", os.cpus())

console.log("Free memory: ", os.freemem())

console.log("Total memory: ", os.totalmem())

console.log("Turned on: ", os.uptime())

console.log("User info: ", os.userInfo())