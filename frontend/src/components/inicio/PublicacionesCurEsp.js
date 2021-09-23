import React from 'react'
import Sidebar3 from '../layout/Sidebar3';
import Barra from '../layout/Barra'
import FormTarea from '../publicaciones/FormPublicacion';
import ListadoPublicaciones from '../publicaciones/ListadoPublicaciones';

const PublicacionesCursoEspecifico = () => {
    return (
        <div className="contenedor-app">
            <Sidebar3/>
            <div className="seccion-principal">
                <Barra/>
                <main>
                    <FormTarea/>
                    <h1 className="pubCur">Publicaciones por Curso Específico</h1>
                    <div className="contenedor-tareas">
                        <ListadoPublicaciones/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default PublicacionesCursoEspecifico;