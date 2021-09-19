import React,{useState} from 'react'
import {Link} from 'react-router-dom';

const Login = () => {
    //state para iniciar sesión
    const [usuario,guardarUsuario] = useState({
        carnet: '',
        password: ''
    });
    //estraer de usuario
    const {carnet,password} = usuario;

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

        //password mínimo de 6 caracteres

        //los 2 passwords iguales

        //pasarlo al action
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesión</h1>
                <form onSubmit={onSubmit}>
                    <div className="campo-form">
                        <label htmlFor="carnet">Carnet</label>
                        <input
                            type="text"
                            id="carnet"
                            name="carnet"
                            placeholder="Tu Carnet"
                            value={carnet}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Contraseña"
                            value={password}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <button className="btn btn-primario btn-block">Iniciar Sesión</button>
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
