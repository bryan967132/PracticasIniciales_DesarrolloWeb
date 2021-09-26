import React from 'react'
import Sidebar from '../layout/Sidebar';
import Barra from '../layout/Barra'
import InformacionEditable from './perfil/InformacionEditable';
import CursosAprobados from './perfil/CursosAprobados';

const MiPerfilEditable = () => {
    let headers = new Headers()
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    headers.append('Access-Control-Allow-Origin','http://localhost:4000');
    headers.append('Access-Control-Allow-Credentials','true');
    headers.append('GET','POST','OPTIONS','PUT','DELETE');
    
    return (
        <div className="contenedor-app">
            <Sidebar/>
            <div className="seccion-principal">
                <Barra/>
                <main className="contenedor-perfil">
                    <div className="contenedor-cursos">
                        <CursosAprobados/>
                    </div>
                    <InformacionEditable/>
                </main>
            </div>
        </div>
    );
}

export default MiPerfilEditable;