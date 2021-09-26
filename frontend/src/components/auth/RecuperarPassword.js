import React from 'react'
import {Link} from 'react-router-dom';

const RecuperarPassword = () => {
    let headers = new Headers()
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    headers.append('Access-Control-Allow-Origin','http://localhost:4000');
    headers.append('Access-Control-Allow-Credentials','true');
    headers.append('GET','POST','OPTIONS','PUT','DELETE');

    function Remove(str, startIndex, count) {
        return str.substr(0, startIndex) + str.substr(startIndex + count);
    }

    const reestablecer = () => {
        var carnet = document.getElementById('carnet').value;
        var correo = document.getElementById('email').value;
        var newpass = document.getElementById('newpassword').value;
        if(carnet === '' || correo === '') {
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
                    if(parseInt(carnet) === parseInt(valor.carnet) && correo === valor.correo) {
                        fetch('http://localhost:4000/actualizarUsuario',{
                        method:'PUT',
                        headers,
                        body:`{
                            "carnet":"${valor.carnet}",
                            "nombre":"${valor.nombre}",
                            "apellido":"${valor.apellido}",
                            "contrasena":"${newpass}",
                            "correo":"${valor.correo}"
                            }`
                        })
                        .then(response1 => response1.json())
                        .then(result1 => {
                            if(result1.valor === true) {
                                alert('Reestablecido')
                            }
                        })
                        .catch()

                    } else {
                        alert('Carnet o email incorrecto');
                    }
                }
            })
            .catch()
        }
    }

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
                        <button className="btn btn-primario btn-block" href="/nuevo-password" onClick={reestablecer}>Restablecer Contraseña</button>
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