const express = require("express")
const app = express()

const PORT = 8000

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
  res.sendFile(__dirname + "/css/normalize.css")
  res.sendFile(__dirname + "/css/style.css")
})

app.listen(process.env.PORT || PORT, () => {
  console.log(`running on port ${PORT}`)
})
