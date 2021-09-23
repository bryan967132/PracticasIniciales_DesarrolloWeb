import React from 'react';
import {Link} from 'react-router-dom';

const Informacion = () => {
    const cancelar = () => {
        document.getElementById('nombre').value=''
        document.getElementById('apellido').value=''
        document.getElementById('password').value=''
        document.getElementById('email').value=''
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
                            id="nombre"
                            name="nombre"
                            disabled
                        />
                    </div>

                    <div id="inapellido" className="campo-form">
                        <label htmlFor="apellido">Apellido</label>
                        <input
                            type="text"
                            id="apellido"
                            name="apellido"
                            disabled
                        />
                    </div>

                    <div id="inpassword" className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            disabled
                        />
                    </div>

                    <div in="inemail" className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"  
                            disabled  
                        />
                    </div>
                        <div className="botones1">
                            <Link to={'/mi-perfil-modificar'} className="btn btn-comentario">Editar Información</Link>
                        </div>
                </form>
            </div>
        </div>
    );
}

export default Informacion;