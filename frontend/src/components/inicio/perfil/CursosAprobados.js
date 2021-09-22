import React,{Fragment} from 'react';
import Curso from './Curso';

const CursosAprobados = () => {
    const cursosAprobados = [
        {id: 4, creditos: '3', nombre: 'Social Humanística 1', nota: "75"},
        {id: 3, creditos: '5', nombre: 'Matemática Básica 1', nota: "64"},
        {id: 2, creditos: '5', nombre: 'Introducción a la Programación y Computación 1', nota: "84"},
        {id: 1, creditos: '10', nombre: 'Matemática Intermedia 1', nota: "75"}
    ];

    return(
        <Fragment>
            <ul className="listado-cur">
                <h1>Cursos Aprobados</h1>
                <div className="form-agregarcurso">
                    <form>
                        <div className="comboBox">
                            <select className="opciones" name="optionlist" onChange="combo(this, 'demo')">
                                <option>Curso</option>
                                <option>Catedrático</option>
                            </select>
                        </div>
                    </form>
                </div>

                <div>
                    <li className="curso sombra">
                        <p className="titulo1">Créditos</p>
                        <p className="titulo2">Curso</p>
                        <p className="titulo3">Nota Final</p>
                        <p className="titulo4">Estado</p>
                    </li>
                </div>

                {cursosAprobados.length === 0
                    ? (<li className="tarea"><p>No hay cursos aprobados</p></li>)
                    : cursosAprobados.map(curA =>(
                        <Curso
                            curso = {curA}
                        />
                    ))
                }
            </ul>
        </Fragment>
    );
}

export default CursosAprobados;