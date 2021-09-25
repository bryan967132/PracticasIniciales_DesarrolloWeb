import React,{Fragment} from 'react';
import Publicacion from './Publicacion';

const ListadoPublicaciones = () => {
    const publicaciones = [
        {id: 4, autor: 'Usuario1', contenido: '¿Recomiendan a este catedrático para el curso de IPC2?', tipo: 'Catedrático: Catedrático1', fecha: "19/09/2021"},
        {id: 3, autor: 'Usuario2', contenido: '¿A quién recomiendan para llevar el curso?', tipo: 'Curso: Matemática Intermedia 1', fecha: "15/09/2021"},
        {id: 2, autor: 'Usuario3', contenido: '¿Qué tan difícil es este curso?', tipo: 'Curso: Introducción a la Programación y Computación 1', fecha: "02/08/2021"},
        {id: 1, autor: 'Usuario4', contenido: '¿Recomiendan a este catedrático para el curso de MC2?', tipo: 'Catedrático: Catedrático2', fecha: "02/02/2021"}
    ];

    return(
        <Fragment>
            <ul className="listado-tareas">
                {publicaciones.length === 0
                    ? (<li className="tarea"><p>No hay publicaciones</p></li>)
                    : publicaciones.map(publi =>(
                        <Publicacion
                            publicacion = {publi}
                        />
                    ))
                }
            </ul>
        </Fragment>
    );
}

export default ListadoPublicaciones;