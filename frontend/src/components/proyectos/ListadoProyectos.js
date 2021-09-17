import React from "react";
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
    const proyectos = [
        {nombre: 'Usuario 1'},
        {nombre: 'Usuario 2'},
        {nombre: 'Usuario 3'}
    ]

    return (
        <ul className="listado-proyectos">
            {proyectos.map(proyecto =>(
                <Proyecto
                    proyecto={proyecto}
                />
            ))}
        </ul>
    );
}

export default ListadoProyectos;