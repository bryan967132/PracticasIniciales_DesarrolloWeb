import React from 'react'
import {Link} from 'react-router-dom';

const Login = () => {
    let headers = new Headers()
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    headers.append('Access-Control-Allow-Origin','http://localhost:4000');
    headers.append('Access-Control-Allow-Credentials','true');
    headers.append('GET','POST','OPTIONS','PUT','DELETE');

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>
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
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Contraseña"
                        />
                    </div>
                    <div className="campo-form">
                        <button className="btn btn-primario btn-block">Iniciar Sesión"</button>
                    </div>
                </form>
                <Link to={'/recuperar-password'} className="enlace-cuenta">
                    ¿Olvidaste tu contraseña?
                </Link>
                <Link to={'/nueva-cuenta'} className="enlace-cuenta">
                    Obtener Cuenta
                </Link>
            </div>
        </div>
    );
}

export default Login;