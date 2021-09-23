import React from "react";

const Curso = ({usuario,curso,cursosD}) => {
    return(
        <div>
            {curso.idU === usuario
                ? (                      
                    cursosD.map(curD => (
                        curD.id === curso.idC
                        ? (
                            <li className="curso sombra">
                                <p className="credito">{curD.creditos}</p>
                                <p className="nombre">{curD.nombre}</p>
                                <p className="nota">{curso.nota}</p>
                                <div className="estado">
                                    <button
                                        type="button"
                                        className="aprobado"
                                    >Aprobado</button>
                                </div>
                            </li>
                        ) : null
                    ))
                ) : null
                //(<li className="tarea"><p>No hay cursos aprobados</p></li>)
            }
        </div>
    );
}

export default Curso;