CREATE DATABASE practicasiniciales;
USE practicasiniciales;

CREATE TABLE usuario(
id INT primary key auto_increment,
carnet varchar(50) not null,
nombre varchar(50) not null,
apellido varchar(50) not null,
contrasena varchar(50) not null,
correo varchar(50) not null
);

CREATE TABLE curso(
id INT primary key auto_increment,
nombre varchar(50) not null,
creditos int not null
);

CREATE TABLE catedraticos(
id INT primary key auto_increment,
nombre varchar(50) not null,
apellido varchar(50) not null
);
 
CREATE TABLE asignacion(
id INT primary key auto_increment,
nota varchar(50) not null,
id_usuario int not null,
id_curso int not null,
id_catedratico int not null,
foreign key(id_usuario) references usuario(id),
foreign key(id_curso) references curso(id),
foreign key(id_catedratico) references catedraticos(id)
);




CREATE TABLE publicacion(
id INT primary key auto_increment,
contenido varchar(50) not null,
hora varchar(50) not null,
id_usuario int not null,
foreign key(id_usuario) references usuario(id)
);

CREATE TABLE comentario(
id INT primary key auto_increment,
contenido varchar(50) not null,
hora varchar(50) not null,
id_publicacion int not null,
foreign key(id_publicacion) references usuario(id)
);