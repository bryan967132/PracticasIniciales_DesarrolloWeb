create database actividadweb;
use actividadweb;

create table usuario(
carnet int(9) primary key not null,
nombre varchar(50) not null,
apellido varchar(50) not null,
contrasena varchar(100) not null,
correo varchar(100) unique not null
);

CREATE TABLE curso(
id INT primary key auto_increment,
nombre varchar(50) not null,
creditos int not null
);

CREATE TABLE catedratico(
id INT primary key auto_increment,
nombre varchar(50) not null,
apellido varchar(50) not null
);
 
CREATE TABLE asignacion(
id INT primary key auto_increment,
nota varchar(50) not null,
id_usuario int not null,
id_curso int not null,
foreign key(id_usuario) references usuario(id),
foreign key(id_curso) references curso(id)
);

CREATE TABLE publicacion(
id INT primary key auto_increment,
contenido varchar(50) not null,
fecha varchar(50) not null,
tipo varchar(50) not null,
id_usuario int not null,
id_catedratico int not null,
foreign key(id_usuario) references usuario(id),
foreign key(id_catedratico) references catedratico(id)
);

CREATE TABLE comentario(
id INT primary key auto_increment,
contenido varchar(50) not null,
fecha varchar(50) not null,
id_publicacion int not null,
id_usuario int not null,
foreign key(id_publicacion) references publicacion(id),
foreign key(id_usuario) references usuario(id)
);

DROP TABLE usuario;
select* from usuario