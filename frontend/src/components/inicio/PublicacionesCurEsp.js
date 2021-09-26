import React from 'react'
import Sidebar3 from '../layout/Sidebar3';
import Barra from '../layout/Barra'
import FormTarea from '../publicaciones/FormPublicacion';
import ListadoPublicaciones from '../publicaciones/ListadoPublicaciones';
import FormFiltro from './FormFiltro';

const PublicacionesCursoEspecifico = () => {

    let headers = new Headers()
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    headers.append('Access-Control-Allow-Origin','http://localhost:4000');
    headers.append('Access-Control-Allow-Credentials','true');
    headers.append('GET','POST','OPTIONS','PUT','DELETE');
    
    const catedratico = [];
    return (
        <div className="contenedor-app">
            <Sidebar3/>
            <div className="seccion-principal">
                <Barra/>
                <main>
                    <FormTarea/>
                    <h1 className="pubCur">Publicaciones por Curso Específico</h1>
                    <FormFiltro
                        catedraticos={catedratico}
                    />
                    <div className="contenedor-tareas">
                        <ListadoPublicaciones/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default PublicacionesCursoEspecifico;