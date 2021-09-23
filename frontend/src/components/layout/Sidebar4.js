import React from "react";
import BuscarUsuario from "../inicio/BuscarUsuario";
import {Link} from 'react-router-dom';

const Sidebar4 = () => {
    return (
        <aside>
            <h1>DTT</h1>
            <BuscarUsuario/>
            <div className="proyectos">
                <Link to={'/inicio'} className="enlace-publicacion">Publicaciones</Link>
                <h3>Clasificar por:</h3>
                <div className="clasificacion">
                    <Link to={'/inicio'}>
                        <input type="radio" id="ord" name="drone" value="ord"/>
                    </Link><a>Orden de publicación</a>

                    <Link to={'/publicaciones-por-curso'}>
                        <input type="radio" id="cur" name="drone" value="cur"/>
                    </Link><a>Por Curso</a>

                    <Link to={'/publicaciones-por-catedratico'}>
                        <input type="radio" id="cat" name="drone" value="cat"/>
                    </Link><a>Por Catedrático</a>

                    <Link to={'/publicaciones-por-curso-especifico'}>
                        <input type="radio" id="cures" name="drone" value="cures"/>
                    </Link><a>Por Curso Específico</a>

                    <Link to={'/publicaciones-por-catedratico-especifico'}>
                        <input type="radio" id="cates" name="drone" value="cates" defaultChecked/>
                    </Link><a>Por Catedrático Específico</a>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar4;