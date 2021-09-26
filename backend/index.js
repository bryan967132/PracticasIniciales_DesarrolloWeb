const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const router = express.Router();

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

// -------------------------------------------------------------------------------------------------------------
// INICIO DEL SERVIDOR

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

// -------------------------------------------------------------------------------------------------------------
// METODOS DE INCERSION

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

app.post("/insertarCurso", async (req, res) => {
  let body = req.body;
  var cadena=""
  var datos=[]
  console.log(body)
  cadena="INSERT INTO curso (id,nombre,creditos) VALUES (?,?,?)"
  datos=[
    body.id,
    body.nombre, 
    body.creditos
  ]
  conexion.query(cadena, datos, function (err, result) {
    if (err) {
      res.send({valor:false,error:err})
    }else{
      res.send({valor:true,datos:result});
    }
  });
});

app.post("/insertarComentario", async (req, res) => {
  let body = req.body;
  var cadena=""
  var datos=[]
  console.log(body)
  cadena="INSERT INTO comentario (contenido, fecha) VALUES (?,?,?)"
  datos=[
    body.contenido, 
    body.fecha
  ]
  conexion.query(cadena,datos, function (err, result) {
    if (err) {
      res.send({valor:false,error:err})
    }else{
      res.send({valor:true,datos:result});
    }
  });
});

app.post("/insertarPublicacion", async (req, res) => {
    let body = req.body;
    var cadena=""
    var datos=[]
    console.log(body)
      cadena="INSERT INTO publicacion (contenido,fecha,tipo) VALUES (?,?,?)"
        datos=[
          body.contenido, 
          body.fecha, 
          body.tipo
        ]
  
    conexion.query(cadena, datos, function (err, result) {
    if (err) {
      res.send({valor:false,error:err})
    }else{
      res.send({valor:true,datos:result});
    }
  });
});

// -------------------------------------------------------------------------------------------------------------
// METODOS DE ELIMINACION

app.delete('/eliminarUsuario', async function (req, res) {  // solo para eliminar usuario
  var cadena = "DELETE FROM usuario where carnet="+req.body.carnet;
  conexion.query(cadena , function(err,result) {
    if (err){
      return res.json ({
        succes: false,
        msj: "No se encontró el usuario",
        err
      });      
    } else {
      return res.json ({
        succes: true,
        usuario: result // usuario que es devuelto por el método
      });
    }
  })
});

app.delete('/eliminar', async function (req, res) {  // para eliminar cualquier tipo excepto usuario
    //console.log(body)
    cadena="DELETE FROM ", req.body.tipo_registro, " where id=", req.body.id;
    conexion.query(cadena, function (err, result) {
    if (err) {
      res.send({valor:false,error:err})
    }else{
      res.send({valor:true,datos:result});
    }
    });
});

// -------------------------------------------------------------------------------------------------------------
// METODOS BUSCAR/GET
app.get('/buscarUsuario/:CARNET_B', function (req, res) { // "CARNET_B" se pasa en la url como carnet para buscar
  var cadena = "SELECT * FROM usuario where carnet="+req.params.CARNET_B;
  conexion.query(cadena , function(err,result) {
    if (err){
      return res.json ({
        succes: false,
        msj: "No se encontró el usuario",
        err
      });      
    } else {
      return res.json ({
        succes: true,
        response: result // usuario que es devuelto por el método
      });
    }
  })
}); // devuelve el usuario que coinside con el carte enviado por la url

app.get('/buscarComentario/:COMENTARIO_b', function (req, res) { // "COMENTARIO_B" se pasa en la url como comentario para buscar

  let comentario = req.params.COMENTARIO_b;

  usuario.find ({ comentario: comentario }, function(err, comentarioBD) {
    if (err){
      return res.json ({
        succes: false,
        msj: "No se encontró el comentario",
        err
      });      
    } else {
      return res.json ({
        succes: true,
        usuario: comentarioBD //comentario que es devuelto por el método
      });
    }
  })
}); // devuelve el comentario que coinside con el contenido

app.get('/buscarPublicacion/:PUBLICACION_b', function (req, res) { // "PUBLICACION_B" se pasa en la url como publicacion para buscar

  let publicacion = req.params.PUBLICACION_b;

  usuario.find ({ publicacion: publicacion }, function(err, publicacionBD) {
    if (err){
      return res.json ({
        succes: false,
        msj: "No se encontró la publicacion",
        err
      });      
    } else {
      return res.json ({
        succes: true,
        usuario: publicacionBD //publicacion que es devuelta por el método
      });
    }
  })
}); // devuelve la publicacion que coinside con el contenido

app.get('/buscarcurso/:ID_C', function (req, res) { // "CARNET_B" se pasa en la url como carnet para buscar
  var cadena = "SELECT * FROM curso WHERE id="+req.params.ID_C;
  conexion.query(cadena , function(err,result) {
    if (err){
      return res.json ({
        succes: false,
        msj: "No se encontró el usuario",
        err
      });      
    } else {
      return res.json ({
        succes: true,
        response: result // usuario que es devuelto por el método
      });
    }
  })
});

app.get('/obtenercursos', function (req, res) { // "CARNET_B" se pasa en la url como carnet para buscar
  var cadena = "SELECT * FROM curso";
  conexion.query(cadena , function(err,result) {
    if (err){
      return res.json ({
        succes: false,
        msj: "No se encontró el usuario",
        err
      });      
    } else {
      return res.json ({
        succes: true,
        response: result // usuario que es devuelto por el método
      });
    }
  })
});

// -------------------------------------------------------------------------------------------------------------
// METODOS DE ACTUALIZACION/UPDATE

app.put("/actualizarUsuario", async (req, res) => {
    let body = req.body;
    var cadena=""
    console.log(body)
      cadena='UPDATE usuario SET nombre="'+body.nombre+'", apellido="'+body.apellido+'", contrasena="'+body.contrasena+'", correo="'+body.correo+'" WHERE carnet='+body.carnet

    conexion.query(cadena, function (err, result) {
    if (err) {
      res.send({valor:false,error:err})
    }else{
      res.send({valor:true,datos:result});
    }
  });
});

app.post("/actualizarPublicacion", async (req, res) => {
    let body = req.body;
    var cadena=""    
    console.log(body)
      cadena="UPDATE publicacion SET contenido='", body.contenido, "' WHERE id=", body.id
    conexion.query(cadena, function (err, result) {
    if (err) {
      res.send({valor:false,error:err})
    }else{
      res.send({valor:true,datos:result});
    }
  });
});

// -------------------------------------------------------------------------------------------------------------

app.get('/', async function(req, res){
    res.send("Servidor - Practicas Iniciales - Grupo 1 primer semestre 2021.");
});

