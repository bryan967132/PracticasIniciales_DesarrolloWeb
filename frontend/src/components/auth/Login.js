import React from 'react'
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router';
import Inicio from '../inicio/Publicaciones';
import Publicacion from '../publicaciones/Publicacion';

const Login = () => {
    let headers = new Headers()
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    headers.append('Access-Control-Allow-Origin','http://localhost:4000');
    headers.append('Access-Control-Allow-Credentials','true');
    headers.append('GET','POST','OPTIONS','PUT','DELETE');

    function Remove(str, startIndex, count) {
        return str.substr(0, startIndex) + str.substr(startIndex + count);
    }

    const login = () => {
        var carnet = document.getElementById('carnet').value;
        var pass = document.getElementById('password').value;
        if(carnet === '' || pass === '') {
            alert('Todos los campos son obligatorios')
        } else {
            fetch(`http://localhost:4000/buscarUsuario/${carnet}`)
            .then(response => response.json())
            .then(result => {
                if(result.succes === false){
                    alert('El usuario no existe')
                } else {
                    let objeto = Object.values(result.response);
                    let json = JSON.stringify(objeto);
                    let cadena = Remove(json,json.length-1,json.length);
                    let texto = Remove(cadena,0,1);
                    let valor = JSON.parse(texto);
                    if(parseInt(valor.carnet) === parseInt(carnet) && parseInt(valor.contrasena) === parseInt(pass)) {
                        alert('Bienvenido');
                        window.location.href=`inicio?carnet=${carnet}`;
                    } else {
                        alert('Carnet o contraseña incorrecta');
                    }
                }
            })
            .catch(
                error => {
                    alert('Ha ocurrido un error al iniciar sesión')
                }
            )
        }
    }

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
                        <button className="btn btn-primario btn-block" onClick={login}>Iniciar Sesión"</button>
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