import React from 'react'
import {Link} from 'react-router-dom';

const NuevaCuenta = () => {
    let headers = new Headers()
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    headers.append('Access-Control-Allow-Origin','http://localhost:4000');
    headers.append('Access-Control-Allow-Credentials','true');
    headers.append('GET','POST','OPTIONS','PUT','DELETE');

    const crearCuenta = () => {
        fetch('http://localhost:4000/insertarusuario',{
            method:'POST',
            headers,
            body: `{
                "carnet":"${parseInt(document.getElementById('carnet').value)}",
                "nombre":"${document.getElementById('nombre').value}",
                "apellido":"${document.getElementById('apellido').value}",
                "contrasena":"${document.getElementById('password').value}",
                "correo":"${document.getElementById('email').value}"
            }`
        })
        .then(response => response.json())
        .then(result => {
            if(result.valor === false){
                alert('Usuario en uso')
            } else {
                alert('Registrado con éxito')
            }
        })
        .catch(
            error => {
                alert(error)
                console.log(error)
            }
        )
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear Cuenta</h1>
                <form>
                    <div className="campo-form">
                        <label htmlFor="carnet">Carnet</label>
                        <input
                            type="text"
                            id="carnet"
                            name="carnet"
                            placeholder="Tu Carnet"
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            placeholder="Tu Nombre"
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="apellido">Apellido</label>
                        <input
                            type="text"
                            id="apellido"
                            name="apellido"
                            placeholder="Tu Apellido"
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Contraseña"
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                        />
                    </div>

                    <div className="campo-form">
                        <button className="btn btn-primario btn-block" onClick={crearCuenta}>Registrarme</button>
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Iniciar Sesión
                </Link>
            </div>
        </div>
    );
}

export default NuevaCuenta;