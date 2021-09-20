import React,{Fragment} from 'react';
import Publicacion from './Publicacion';

const ListadoPublicaciones = () => {
    const publicaciones = [
        {id: 4, autor: 'Danny', contenido: 'Elegir Plataforma: para poder desarrolar con ReactJS es necesario tener conocimiento de JavaScript', tipo: 'Catedrático: Herman Veliz', fecha: "19/09/2021"},
        {id: 3, autor: 'Bryan', contenido: 'Elegir Colores', tipo: 'Curso: Matemática Intermedia 1', fecha: "15/09/2021"},
        {id: 2, autor: 'Bryan', contenido: 'Elegir Plataformas de Pago', tipo: 'Curso: Introducción a la Programación y Computación 1', fecha: "02/08/2021"},
        {id: 1, autor: 'Danny', contenido: 'Elegir Hosting', tipo: 'Catedrático: Herman Veliz', fecha: "02/02/2021"}
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