import React from "react";
import ListadoComentarios from './comentarios/ListadoComentarios'

const Publicacion = ({publicacion}) => {
    return(
        <div>
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
            <div className="contenedor-cmt">
                <ListadoComentarios
                    idPub = {publicacion.id}
                />
            </div>
        </div>
    );
}

export default Publicacion;