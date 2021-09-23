import React from 'react'
import Sidebar4 from '../layout/Sidebar4';
import Barra from '../layout/Barra'
import FormTarea from '../publicaciones/FormPublicacion';
import ListadoPublicaciones from '../publicaciones/ListadoPublicaciones';

const PublicacionesCatedraticoEspecifico = () => {
    return (
        <div className="contenedor-app">
            <Sidebar4/>
            <div className="seccion-principal">
                <Barra/>
                <main>
                    <FormTarea/>
                    <h1 className="pubCur">Publicaciones por Catedrático Específico</h1>
                    <div className="contenedor-tareas">
                        <ListadoPublicaciones/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default PublicacionesCatedraticoEspecifico;