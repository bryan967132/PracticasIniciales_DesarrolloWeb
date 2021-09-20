import React from "react";

const Comentario = ({comentario}) => {
    return(
        <li className="comentario sombra">
            <p className="autor">Autor: {comentario.autor}</p>
            <div className="estado fecha">
                <button
                    type="button"
                    className="completo"
                >{comentario.fecha}</button>
            </div>
            <p className="contenido">{comentario.contenido}</p>
        </li>
    );
}

export default Comentario;