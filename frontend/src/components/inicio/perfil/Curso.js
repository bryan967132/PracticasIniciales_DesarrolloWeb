import React from "react";

const Curso = ({curso}) => {
    return(
        <div>
            <li className="curso sombra">
                <p className="credito">{curso.creditos}</p>
                <p className="nombre">{curso.nombre}</p>
                <p className="nota">{curso.nota}</p>
                <div className="estado">
                    <button
                        type="button"
                        className="aprobado"
                    >Aprobado</button>
                </div>
            </li>
        </div>
    );
}

export default Curso;