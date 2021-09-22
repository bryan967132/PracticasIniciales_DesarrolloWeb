import React from "react";
import ListadoComentarios from './comentarios/ListadoComentarios'

const Publicacion = ({publicacion}) => {
    return(
        <div>
            <li className="tarea sombra">
                <p className="autor">Autor: {publicacion.autor}</p>
                <p className="tipo">{publicacion.tipo}</p>
                <div className="fecha estado">
                    <button
                        type="button"
                        className="completo"
                    >{publicacion.fecha}</button>
                </div>
                <p className="contenido">{publicacion.contenido}</p>
                                
                <div className="insert-comentario formulario-comentar">
                    <form>
                        <div className="contenedor-input">
                            <input
                                type="text"
                                className="input-text"
                                placeholder="Comentario..."
                                name="nombre"
                            />
                        </div>
                    </form>
                </div>
                <div className="acciones">
                    <button
                        type="button"
                        className="btn btn-comentario btn-block"
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