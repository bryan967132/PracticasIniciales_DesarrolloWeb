import React from "react";
import BuscarUsuario from "../inicio/BuscarUsuario";
import {Link} from 'react-router-dom';

const Sidebar3 = ({carnet}) => {
    return (
        <aside>
            <h1>DTT</h1>
            <BuscarUsuario/>
            <div className="proyectos">
                <Link to={`inicio?carnet=${carnet}`} className="enlace-publicacion">Publicaciones</Link>
                <h3>Clasificar por:</h3>
                <div className="clasificacion">
                    <Link to={`inicio?carnet=${carnet}`}>
                        <input type="radio" id="ord" name="drone" value="ord"/>
                    </Link><a>Orden de publicación</a>

                    <Link to={`/publicaciones-por-curso?carnet=${carnet}`}>
                        <input type="radio" id="cur" name="drone" value="cur"/>
                    </Link><a>Por Curso</a>

                    <Link to={`/publicaciones-por-catedratico?carnet=${carnet}`}>
                        <input type="radio" id="cat" name="drone" value="cat"/>
                    </Link><a>Por Catedrático</a>

                    <Link to={`/publicaciones-por-curso-especifico?carnet=${carnet}`}>
                        <input type="radio" id="cures" name="drone" value="cures" defaultChecked/>
                    </Link><a>Por Curso Específico</a>

                    <Link to={`/publicaciones-por-catedratico-especifico?carnet=${carnet}`}>
                        <input type="radio" id="cates" name="drone" value="cates"/>
                    </Link><a>Por Catedrático Específico</a>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar3;
