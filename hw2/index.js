import http from "http"

const port = 3004
const localhost = "127.0.0.1"

const createServer = http.createServer((req, res) =>{
   try {
    res.end("Hello NodeJs")
    res.statusCode = 200
   } catch (error) {
    console.log(error)
   }
       
}).listen(port, localhost, function(){
    console.log(`Server start ${port}`)
})