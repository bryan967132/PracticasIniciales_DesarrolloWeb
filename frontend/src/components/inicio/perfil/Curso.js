import React from "react";

const Curso = ({curso}) => {
    return(
        <div>
            <li className="tarea sombra">
                <p className="autor">Autor: {curso.autor}</p>
                <p className="tipo">{curso.tipo}</p>
                <p className="contenido">{curso.contenido}</p>

                <div className="estado">
                    <button
                        type="button"
                        className="completo"
                    >{curso.fecha}</button>
                </div>
                <div className="acciones">
                    <button
                        type="button"
                        className="btn btn-comentario"
                    >Comentar</button>
                </div>
            </li>
        </div>
    );
}

export default Curso;