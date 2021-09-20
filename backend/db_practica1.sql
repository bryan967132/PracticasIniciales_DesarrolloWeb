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

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '2Pj_web?';
flush privileges;
select* from usuario