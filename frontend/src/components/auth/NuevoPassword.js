import React from 'react'
import {Link} from 'react-router-dom';

const NuevoPassword = () => {
    /*var pass = document.getElementById('password').value*/

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Nueva Contraseña</h1>
                <form>
                    <div className="campo-form">
                        <label htmlFor="password">Nueva Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Nueva Contraseña"
                        />
                    </div>

                    <div className="campo-form">
                        <input type="button" className="btn btn-primario btn-block" value="Cambiar Contraseña"></input>
                    </div>
                </form>
                <Link to={'/'} className="enlace-cuenta">
                    Iniciar Sesión
                </Link>
            </div>
        </div>
    );
}

export default NuevoPassword;
