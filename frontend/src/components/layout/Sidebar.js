import React from "react";
import NuevoProyecto from "../proyectos/NuevoProyecto";
import ListadoProyectos from "../proyectos/ListadoProyectos";

const Sidebar = () => {
    return (
        <aside>
            <h1>DTT</h1>
            <NuevoProyecto/>
            <div className="proyectos">
                <h2>Publicaciones</h2>
                <div className="clasificacion">
                    <input type="radio" id="huey" name="drone" value="huey"/><a>Orden de publicación</a>
                    <input type="radio" id="huey" name="drone" value="huey"/><a>Por Curso</a>
                    <input type="radio" id="huey" name="drone" value="huey"/><a>Por Catedrático</a>
                    <input type="radio" id="huey" name="drone" value="huey"/><a>Por Curso Específico</a>
                    <input type="radio" id="huey" name="drone" value="huey"/><a>Por Catedrático</a>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;