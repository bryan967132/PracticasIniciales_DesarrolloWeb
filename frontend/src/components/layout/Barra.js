import React from 'react';
import {Link} from 'react-router-dom';

const Barra = () => {
    return (
        <header className="app-header">
            <p className="nombre-usuario">Hola <Link to={'/mi-perfil'} className="enlace-cuenta"><span>Usuario 1</span></Link></p>
            
            <nav className="nav-principal">
                <a href="#!">Cerrar</a>
            </nav>
        </header>
    );
}

export default Barra;