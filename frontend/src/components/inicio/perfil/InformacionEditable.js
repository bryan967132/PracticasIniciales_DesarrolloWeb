import React from 'react'

const InformacionEditable = () => {
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
                            <button className="btn btn-comentario btn-block">Guardar Cambios</button>
                        </div>
                        <div className="cancelar campo-form">
                            <button className="btn btn-cancelar btn-block">Cancelar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default InformacionEditable;