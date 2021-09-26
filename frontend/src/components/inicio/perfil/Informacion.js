import React from 'react';
import {Link} from 'react-router-dom';

const Informacion = ({carnet}) => {
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
                        <label>Nombre</label>
                        <input
                            type="text"
                            id="name"
                            name="nombre"
                            disabled
                        />
                    </div>

                    <div id="inapellido" className="campo-form">
                        <label>Apellido</label>
                        <input
                            type="text"
                            id="apellido"
                            name="apellido"
                            disabled
                        />
                    </div>

                    <div id="inpassword" className="campo-form">
                        <label>Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            disabled
                        />
                    </div>

                    <div in="inemail" className="campo-form">
                        <label>Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"  
                            disabled  
                        />
                    </div>
                        <div className="botones1">
                            <Link to={`/mi-perfil-modificar?carnet=${carnet}`} className="btn btn-comentario btn-block">
                                <div className="txt">
                                    <a>Editar Información</a>
                                </div>
                            </Link>
                        </div>
                </form>
            </div>
        </div>
    );
}

export default Informacion;