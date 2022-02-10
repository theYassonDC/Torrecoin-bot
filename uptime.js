const express = require(`express`)
const server = express()
server.all(`/`, (req, res) =>{
  res.send("<h1>Listo!<h1>")
})
server.use(express.static(`public`))

async function uptimeRobot(){
  server.listen(3000, () =>{
    console.log("[INFO]     server listo!")
  })
} 

module.exports = uptimeRobot