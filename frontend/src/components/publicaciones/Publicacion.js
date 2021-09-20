import React from "react";

const Tarea = ({publicacion}) => {
    return(
        <li className="tarea sombra">
            <p className="autor">Autor: {publicacion.autor}</p>
            <p className="tipo">{publicacion.tipo}</p>
            <p className="contenido">{publicacion.contenido}</p>

            <div className="estado">
                <button
                    type="button"
                    className="completo"
                >{publicacion.fecha}</button>
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-comentario"
                >Comentar</button>
            </div>
        </li>
    );
}

export default Tarea;