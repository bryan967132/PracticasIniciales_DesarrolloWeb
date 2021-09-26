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
id INT(5) primary key auto_increment,
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
drop tables curso;

INSERT INTO curso(nombre,creditos) VALUES("Análisis y Diseño de Sistemas 1",5);
INSERT INTO curso(nombre,creditos) VALUES("Análisis y Diseño de Sistemas 2",5);
INSERT INTO curso(nombre,creditos) VALUES("Arquitectura de Computadoras y Ensambladores 1",5);
INSERT INTO curso(nombre,creditos) VALUES("Arquitectura de Computadoras y Ensambladores 2",5);
INSERT INTO curso(nombre,creditos) VALUES("Bases de Datos 1",5);
INSERT INTO curso(nombre,creditos) VALUES("Bases de Datos 2",5);
INSERT INTO curso(nombre,creditos) VALUES("Economía",5);
INSERT INTO curso(nombre,creditos) VALUES("Estructura de Datos",5);
INSERT INTO curso(nombre,creditos) VALUES("Gerenciales 2",5);
INSERT INTO curso(nombre,creditos) VALUES("Inteligencia Artificial 1",5);
INSERT INTO curso(nombre,creditos) VALUES("Introducción a la Programación y Computación 1",5);
INSERT INTO curso(nombre,creditos) VALUES("Introducción a la Programación y Computación 2",5);
INSERT INTO curso(nombre,creditos) VALUES("Lenguajes Formales y de Programación",5);
INSERT INTO curso(nombre,creditos) VALUES("Lógica de Sistemas",5);
INSERT INTO curso(nombre,creditos) VALUES("Manejo e Implementación de Archivos",5);
INSERT INTO curso(nombre,creditos) VALUES("Modelación y Simulación 1",5);
INSERT INTO curso(nombre,creditos) VALUES("Organización Computacional",5);
INSERT INTO curso(nombre,creditos) VALUES("Organización de Lenguajes y Compiladores 1",5);
INSERT INTO curso(nombre,creditos) VALUES("Organización de Lenguajes y Compiladores 2",5);
INSERT INTO curso(nombre,creditos) VALUES("Prácticas Iniciales",0);
INSERT INTO curso(nombre,creditos) VALUES("Prácticas Intermedias",0);
INSERT INTO curso(nombre,creditos) VALUES("Programación Comercial 1",5);
INSERT INTO curso(nombre,creditos) VALUES("Programación de Computadoras 1",5);
INSERT INTO curso(nombre,creditos) VALUES("Programación de Computadoras 2",5);
INSERT INTO curso(nombre,creditos) VALUES("Redes de Computadoras 1",5);
INSERT INTO curso(nombre,creditos) VALUES("Redes de Computadoras 2",5);
INSERT INTO curso(nombre,creditos) VALUES("Seminario de Sistemas 1",5);
INSERT INTO curso(nombre,creditos) VALUES("Seminario de Sistemas 2",5);
INSERT INTO curso(nombre,creditos) VALUES("Sistemas Operativos 1",5);
INSERT INTO curso(nombre,creditos) VALUES("Sistemas Operativos 2",5);
INSERT INTO curso(nombre,creditos) VALUES("Sistemas Organizacionales y Gerenciales 1",5);
INSERT INTO curso(nombre,creditos) VALUES("Software Avanzado",5);
INSERT INTO curso(nombre,creditos) VALUES("Teoría de Sistemas 1",5);
INSERT INTO curso(nombre,creditos) VALUES("Teoría de Sistemas 2",5);