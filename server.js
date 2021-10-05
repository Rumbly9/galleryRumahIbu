const express = require("express")
const app = express()

const PORT = 8000

app.use(express.static("/"))
app.use("/css", express.static(__dirname + "/css"))
app.use("/assets", express.static(__dirname + "/assets"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`running on port ${PORT}`)
})
