const express = require('express')
const app = express()
const cors = require('cors')
var port = 8000
var corsOptions = {origin: true, optionsSuccessStatus: 200}
app.use(cors(corsOptions))
app.listen(port, ()=> console.log("Servidor corriendo en el puerto "+ port));

app.get('/', async function(req, res){

    res.send("Mi primer servidor")

})

app.post('/datos', async function(req,res){

    nombre = req.body.nombre;
    apellido = req.body.apellido;

    res.send("Hola "+ nombre + apellido + ", este es mi primer servidor")

})
