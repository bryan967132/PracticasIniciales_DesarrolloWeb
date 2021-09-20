import React from "react";

const Comentario = ({idpub,comentario}) => {
    return(
        <div>
            {comentario.id === idpub
                ? (
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
                )
                : null
            }
        </div>
    );
}

export default Comentario;