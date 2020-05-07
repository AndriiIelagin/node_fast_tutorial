const path = require("path")

console.log("File name is: ", path.basename(__filename))

console.log("Diretory name is: ", path.dirname(__filename))

console.log("File extension name is: ", path.extname(__filename))

console.log("Parse: ", path.parse(__filename))

console.log("Parse name: ", path.parse(__filename).name)

console.log(path.join(__dirname, "server", "nginx", "index.html"))