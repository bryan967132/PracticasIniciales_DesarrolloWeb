import React from 'react'
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra'
import InformacionEditable from './perfil/InformacionEditable';
import CursosAprobados from './perfil/CursosAprobados';

const MiPerfilEditable = () => {
    return (
        <div className="contenedor-app">
            <Sidebar/>
            <div className="seccion-principal">
                <Barra/>
                <main className="contenedor-perfil">
                    <div className="contenedor-tareas">
                        <CursosAprobados/>
                    </div>
                    <InformacionEditable/>
                </main>
            </div>
        </div>
    );
}

export default MiPerfilEditable;