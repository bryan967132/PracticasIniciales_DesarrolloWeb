import React from 'react'
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra'

const MiPerfil = () => {
    return (
        <div className="contenedor-app">
            <Sidebar/>
            <div className="seccion-principal">
                <Barra/>
                <main>
                    <div className="contenedor-tareas">
                        
                    </div>
                </main>
            </div>
        </div>
    );
}

export default MiPerfil;