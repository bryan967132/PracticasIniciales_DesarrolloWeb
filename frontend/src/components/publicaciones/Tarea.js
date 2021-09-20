import React from "react";

const Tarea = ({tarea}) => {
    return(
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                <button
                    type="button"
                    className="completo"
                >Hace 2min</button>
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