create database actividadweb;
use actividadweb;

CREATE TABLE usuario(
    carnet int(9) primary key not null,
    nombre varchar(50) not null,
    apellido varchar(50) not null,
    contrasena varchar(100) not null,
    correo varchar(100) not null
);

CREATE TABLE curso(
id INT(5) primary key,
nombre varchar(50) not null,
creditos int(3) not null
);

CREATE TABLE catedratico(
id INT primary key auto_increment,
nombre varchar(50) not null,
apellido varchar(50) not null
);
 
CREATE TABLE asignacion(
id INT(9) primary key auto_increment,
nota varchar(3) not null,
id_usuario int(9) not null,
id_curso int(5) not null,
foreign key(id_usuario) references usuario(carnet),
foreign key(id_curso) references curso(id)
);

CREATE TABLE publicacion(
id INT primary key auto_increment,
contenido varchar(50) not null,
fecha varchar(50) not null,
tipo varchar(50) not null,
id_usuario int not null,
id_catedratico int not null,
foreign key(id_usuario) references usuario(carnet),
foreign key(id_catedratico) references catedratico(id)
);

CREATE TABLE comentario(
id INT primary key auto_increment,
contenido varchar(50) not null,
fecha varchar(50) not null,
id_publicacion int not null,
id_usuario int not null,
foreign key(id_publicacion) references publicacion(id),
foreign key(id_usuario) references usuario(carnet)
);

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'PracticasInici@le5';
select* from usuario;
select* from curso;