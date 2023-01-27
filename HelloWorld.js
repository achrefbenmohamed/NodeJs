console.log("Hello World")
const http = require('http')

http.createServer((req,res)=>{
    res.write('<h1>Hello Node!!!!</h1>')
    res.end()
}).listen(3000)

 const fs = require('fs')

 fs.readFile('./welcome.txt','utf-8',(err,data)=>{
     if (err) {
         console.log(err)
     } else {
         console.log(data)

     }
 })

