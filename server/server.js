const express = require("express");
const route = require("./controllers/routes");
const cors = require("cors")
const app = express()
const path = require("path")

app.use(cors())
app.use(express.static(path.join(__dirname, "images")))
app.use("/", route);

app.listen(9000,()=>{
    console.log("server run: http://localhost:"+9000)
})