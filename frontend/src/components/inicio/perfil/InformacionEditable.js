import React from 'react'
import {Link} from 'react-router-dom';

const InformacionEditable = ({carnet}) => {
    let headers = new Headers()
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    headers.append('Access-Control-Allow-Origin','http://localhost:4000');
    headers.append('Access-Control-Allow-Credentials','true');
    headers.append('GET','POST','OPTIONS','PUT','DELETE');

    function Remove(str, startIndex, count) {
        return str.substr(0, startIndex) + str.substr(startIndex + count);
    }
    
    fetch(`http://localhost:4000/buscarUsuario/${carnet}`)
    .then(response => response.json())
    .then(result => {
        if(result.succes === false){} else {
            let objeto = Object.values(result.response);
            let json = JSON.stringify(objeto);
            let cadena = Remove(json,json.length-1,json.length);
            let texto = Remove(cadena,0,1);
            let valor = JSON.parse(texto);
            document.getElementById('carnet').value = valor.carnet;
            document.getElementById('name').value = valor.nombre;
            document.getElementById('apellido').value = valor.apellido;
            document.getElementById('password').value = valor.contrasena;
            document.getElementById('email').value = valor.correo;
        }
    })
    .catch()

    const actualizar = () => {
        var carnet = document.getElementById('carnet').value;
        var name = document.getElementById('name').value;
        var apellido = document.getElementById('apellido').value;
        var pass = document.getElementById('password').value;
        var correo = document.getElementById('email').value;
        if(name === '' || apellido === '' || pass === '' || correo === '') {
            alert('Todos los campos son obligatorios');
        } else {
            fetch('http://localhost:4000/actualizarUsuario',{
                method:'PUT',
                headers,
                body:`{
                    "carnet":"${carnet}",
                    "nombre":"${name}",
                    "apellido":"${apellido}",
                    "contrasena":"${pass}",
                    "correo":"${correo}"
                }`
            })
            .then(response => response.json())
            .then(result => {
                if(result.valor === true) {
                    window.location.href=`mi-perfil?carnet=${carnet}`;
                }
            })
            .catch()
        }
    }

    return (
        <div id="infoUsuario" className="form-perfil">
            
            <div className="contenedor-form sombra-dark">
                <h1>Información Personal</h1>
                <form>
                    <div id="incarnet" className="campo-form">
                        <label>Carnet</label>
                        <input
                            type="number"
                            id="carnet"
                            name="carnet"
                            disabled
                        ></input>
                    </div>

                    <div id="innombre" className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="nombre"
                        />
                    </div>

                    <div id="inapellido" className="campo-form">
                        <label htmlFor="apellido">Apellido</label>
                        <input
                            type="text"
                            id="apellido"
                            name="apellido"
                        />
                    </div>

                    <div id="inpassword" className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                        />
                    </div>

                    <div in="inemail" className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div className="botones">
                        <div className="guardar campo-form">
                            <button className="btn btn-comentario btn-block" onClick={actualizar}>
                                Guardar Cambios
                            </button>
                        </div>
                        <div className="cancelar campo-form">
                            <Link to={`/mi-perfil?carnet=${carnet}`} className="btn btn-cancelar btn-block">
                                <div className="cancel">
                                    <a>Cancelar</a>
                                </div>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default InformacionEditable;
