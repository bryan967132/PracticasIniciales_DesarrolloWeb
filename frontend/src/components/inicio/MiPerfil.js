import React from 'react'
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra'
import Informacion from './perfil/Informacion';
import CursosAprobados from './perfil/CursosAprobados';

const MiPerfil = () => {
    return (
        <div className="contenedor-app">
            <Sidebar/>
            <div className="seccion-principal">
                <Barra/>
                <main className="contenedor-perfil">
                    <div className="contenedor-tareas">
                        <CursosAprobados/>
                    </div>
                    <Informacion/>
                </main>
            </div>
        </div>
    );
}

export default MiPerfil;