import React from "react";
import BuscarUsuario from "../inicio/BuscarUsuario";
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside>
            <h1>DTT</h1>
            <BuscarUsuario/>
            <div className="proyectos">
                <Link to={'/inicio'} className="enlace-publicacion">Publicaciones</Link>
                <h3>Clasificar por:</h3>
                <div className="clasificacion">
                    <input type="radio" id="ord" name="drone" value="ord"/><a>Orden de publicación</a>
                    <input type="radio" id="cur" name="drone" value="cur"/><a>Por Curso</a>
                    <input type="radio" id="cat" name="drone" value="cat"/><a>Por Catedrático</a>
                    <input type="radio" id="cures" name="drone" value="cures"/><a>Por Curso Específico</a>
                    <input type="radio" id="cates" name="drone" value="cates"/><a>Por Catedrático Específico</a>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;