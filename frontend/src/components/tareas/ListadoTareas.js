import React,{Fragment} from 'react';
import Tarea from './Tarea';

const ListadoTareas = () => {
    const tareasProyecto = [
        {nombre: 'Elegir Plataforma: para poder desarrolar con ReactJS es necesario tener conocimiento de JavaScript', estado: true},
        {nombre: 'Elegir Colores', estado: false},
        {nombre: 'Elegir Plataformas de Pago', estado: false},
        {nombre: 'Elegir Hosting', estado: true}
    ];

    return(
        <Fragment>
            <h2>Clasificar por:</h2>
            <ul className="listado-tareas">
                {tareasProyecto.length === 0
                    ? (<li className="tarea"><p>No hay tareas</p></li>)
                    : tareasProyecto.map(tarea =>(
                        <Tarea
                            tarea = {tarea}
                        />
                    ))
                }
            </ul>
            <button
                type="button"
                className="btn btn-eliminar"
            >Eliminar Proyecto &times;</button>
        </Fragment>
    );
}

export default ListadoTareas;