import React from 'react';
import {Link} from 'react-router-dom';

const Barra = ({carnet}) => {
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
            document.getElementById('nombre').innerHTML = valor.nombre;
        }
    })
    .catch()

    return (
        <header className="app-header">
            <p className="nombre-usuario">Hola <Link to={`/mi-perfil?carnet=${carnet}`} className="enlace-perfil"><span id="nombre"></span>
                </Link>
            </p>
            
            <nav className="nav-principal">
                <a href="/">Cerrar</a>
            </nav>
        </header>
    );
}

export default Barra;