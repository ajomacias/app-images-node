const routes = require("express").Router()
const fileUpload = require("../middelware/multer")
const main = require("../conexion.js")

routes.get("/", (req,res)=>{
    return res.send("welcome ander")
})

routes.get("/images",async(req,res)=>{
    const file =req.file;
    const sql = await main()
    const [rows, fields] = await sql.query("SELECT * FROM images");
    res.status(200).send({
        data:rows
    })

})

routes.post("/images/post", fileUpload,async(req,res)=>{
    const file =req.file;
    const sql = await main()
    await sql.query("INSERT INTO `images`"
    +"(`id`, `data`, `id_user`) VALUES (NULL, ?, NULL);",
    [`http://localhost:9000/${file.filename}`])
    
    res.status(200).send({
        msj:file.filename
    })

})

module.exports = routes;