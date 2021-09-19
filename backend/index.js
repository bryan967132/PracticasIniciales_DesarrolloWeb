const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
var conexion = mysql.createConnection({
  host : 'localhost',
  database : 'practica1',
  user : 'root',
  password : 's5r4m1gz1pht4rb1m'
});
var corsOptions = { origin: true, optionsSuccessStatus: 200 };
app.use(cors(corsOptions));
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS,PUT, DELETE');
  next();
});

app.listen('3000', function() {
  console.log('Servidor web escuchando en el puerto 3000');
});
conexion.connect(function(err){
    if (err){
        console.error("Error de conexion "+ err.stack)
        return;
    }
    console.log("Conectado con el identificador "+ conexion.threadId);
});

app.post("/insertarUsuario", async (req, res) => {
    let body = req.body;
    var cadena=""
    var datos=[]
    console.log(req.body)
      cadena="INSERT INTO usuario (usuario,nombre,apellido,direccion,correo) VALUES (?,?,?,?,?)"
        datos=[
          body.usuario, 
          body.nombre, 
          body.apellido,
          body.direccion,
          body.correo
        ]
    
    conexion.query(cadena, datos, function (err, result) {
    if (err) {
     res.send({valor:false,error:err}) 
    }else{
      res.send({valor:true,datos:result});
    }
  });
});
app.get('/', async function(req, res){

    res.send("Mi primer servidor")


})