create database practica1;
use practica1;

create table usuario(
id int primary key auto_increment,
carnet varchar(50) not null,
nombre varchar(50) not null,
apellido varchar(50) not null,
contrasena varchar(100) not null,
correo varchar(100) unique not null
);