import React from 'react';

const Barra = () => {
    return (
        <header className="app-header">
            <p className="nombre-usuario">Hola <span>Usuario 1</span></p>
            
            <nav className="nav-principal">
                <a href="#!">Cerrar</a>
            </nav>
        </header>
    );
}

export default Barra;