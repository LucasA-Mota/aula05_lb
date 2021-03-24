const express = require('express')
const port    = 8000;
let app       = express()

app.get('/', (req, res)=>{
    res.send("Resultado Sucesso")
    console.log("GET/")
})

app.listen(port,()=>{
    console.log(`projeto executado na porta $[port]`)
})