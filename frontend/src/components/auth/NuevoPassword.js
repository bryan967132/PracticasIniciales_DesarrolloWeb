import React,{useState} from 'react'
import {Link} from 'react-router-dom';

const NuevoPassword = () => {
    const [usuario,guardarUsuario] = useState({
        password: ''
    });
    //estraer de usuario
    const {password} = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name] : e.target.value
        })
    }

    //cuando el usuario quiere iniciar sesión
    const onSubmit = e => {
        e.preventDefault();
        //validar que no haya campos vacíos

        //pasarlo al action
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Nueva Contraseña</h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="password">Nuevo Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Nueva Contraseña"
                            value={carnet}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <button className="btn btn-primario btn-block">Verificar Datos</button>
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