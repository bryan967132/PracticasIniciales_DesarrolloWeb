import React from 'react'
import {Link} from 'react-router-dom';

const NuevaCuenta = () => {
    /*var regA = document.getElementById('carnet').value
    var name = document.getElementById('nombre').value
    var last = document.getElementById('apellido').value
    var pass = document.getElementById('password').value
    var mail = document.getElementById('email').value*/

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
                        <button className="btn btn-primario btn-block">Registrarme</button>
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
