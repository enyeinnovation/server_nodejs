const express = require("express")
const cors = require("cors")
const tempData = require("./data/tempData.js")

// console.log(tempData);

const app = express()

app.use(cors())
app.use(express.static("frontend"))

app.get("/movies", (req, res) => {
    res.json(tempData)
})

app.listen(3000)