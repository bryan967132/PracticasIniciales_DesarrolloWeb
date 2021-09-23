import React from 'react'

const Informacion = () => {
    /*var regA = document.getElementById('carnet').value
    var pass = document.getElementById('password').value*/

    return (
        
        <div className="form-perfil">
            <div className="contenedor-form sombra-dark">
                <h1>Información Personal</h1>
                <form>
                <div className="campo-form">
                        <label htmlFor="carnet">Carnet</label>
                        <input
                            type="text"
                            id="carnet"
                            name="carnet"
                            disabled
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            disabled
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="apellido">Apellido</label>
                        <input
                            type="text"
                            id="apellido"
                            name="apellido"
                            disabled
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            disabled
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            disabled
                        />
                    </div>

                    <div className="campo-form">
                        <button className="btn btn-primario btn-block">Modificar Información</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Informacion;