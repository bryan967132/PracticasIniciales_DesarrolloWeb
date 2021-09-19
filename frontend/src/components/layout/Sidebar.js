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
                    <input type="radio" id="huey" name="drone" value="huey"/>Huey
                    <input type="radio" id="huey" name="drone" value="huey"/>Huey
                    <input type="radio" id="huey" name="drone" value="huey"/>Huey
                    <input type="radio" id="huey" name="drone" value="huey"/>Huey
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;