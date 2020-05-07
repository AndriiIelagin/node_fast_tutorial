const fs = require("fs")
const path = require("path")

// fs.mkdir(path.join(__dirname, "test"), err => {
//   if(err) {
//     throw err
//   }

//   console.log("Folder has been created")
// })

const filePath = path.join(__dirname, 'test', 'text.txt')

// fs.writeFile(filePath, 'Hello NodeJS! I enjoy you!' ,err => {
//   if(err) {
//     throw err
//   }

//   console.log("File has been created")
// })

// fs.appendFile(filePath, '\nHello Again!', err => {
//   if (err) {
//     throw err
//   }

//   console.log("File has been updated")
// })

fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err
  }

  console.log(content)

  // const data = Buffer.from(content)
  // console.log("Content: ", data.toString())
})