import React from 'react'
import {Link} from 'react-router-dom';

const RecuperarPassword = () => {
    /*var regA = document.getElementById('carnet').value
    var mail = document.getElementById('email').value*/

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Reestablecer Contraseña</h1>
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
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Nueva Contraseña</label>
                        <input
                            type="password"
                            id="newpassword"
                            name="newpassword"
                            placeholder="Tu Nueva Contraseña"
                        />
                    </div>

                    <div className="campo-form">
                        <button className="btn btn-primario btn-block" href="/nuevo-password">Restablecer Contraseña</button>
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Iniciar Sesión
                </Link>
            </div>
        </div>
    );
}

export default RecuperarPassword;
