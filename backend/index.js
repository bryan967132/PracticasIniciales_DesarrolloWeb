const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
var conexion = mysql.createConnection({
  host : 'localhost',
  database : 'actividadweb',
  user : 'root',
  password : ''
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

app.listen('4000', function() {
  console.log('Servidor web escuchando en el puerto 4000');
});
conexion.connect(function(err){
    if (err){
        console.error("Error de conexion --> "+ err.stack)
        return;
    }
    console.log("Conectado con el identificador "+ conexion.threadId);
});

app.post("/insertarUsuario", async (req, res) => {
    let body = req.body;
    var cadena=""
    var datos=[]
    console.log(body)
      cadena="INSERT INTO usuario (carnet,nombre,apellido,contrasena,correo) VALUES (?,?,?,?,?)"
        datos=[
          body.carnet, 
          body.nombre, 
          body.apellido,
          body.contrasena,
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

/*app.post("/insertarUsuario", async (req, res) => {
  let body = req.body;
  var cadena=""
  var datos=[]
  console.log(body)
    cadena="INSERT INTO usuario (carnet,nombre,apellido,contrasena,correo) VALUES (?,?,?,?,?)"
      datos=[
        body.carnet, 
        body.nombre, 
        body.apellido,
        body.contrasena,
        body.correo
      ]
  
  conexion.query(cadena, datos, function (err, result) {
  if (err) {
    res.send({valor:false,error:err})
  }else{
    res.send({valor:true,datos:result});
  }
  });
});*/

app.get('/', async function(req, res){
    res.send("Mi primer servidor")
})