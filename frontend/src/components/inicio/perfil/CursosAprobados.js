import React,{Fragment} from 'react';
import Curso from './Curso';
import FormAgregarCurso from './FormAgregarCurso';

const CursosAprobados = () => {
    let headers = new Headers()
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    headers.append('Access-Control-Allow-Origin','http://localhost:4000');
    headers.append('Access-Control-Allow-Credentials','true');
    headers.append('GET','POST','OPTIONS','PUT','DELETE');

    const cursosDisponibles = [];
    const asignadosCursos = [];

    function Remove(str, startIndex, count) {
        return str.substr(0, startIndex) + str.substr(startIndex + count);
    }

    return(
        <Fragment>
            <ul className="listado-cur">
                <h1>Cursos Aprobados</h1>
                <FormAgregarCurso/>
                <div>
                    <li className="curso sombra">
                        <p className="titulo1">Créditos</p>
                        <p className="titulo2">Curso</p>
                        <p className="titulo3">Nota Final</p>
                        <p className="titulo4">Estado</p>
                    </li>
                </div>

                {
                    asignadosCursos.map(curA =>(
                        <Curso
                            usuario = {1}
                            curso = {curA}
                            cursosD = {cursosDisponibles}
                        />
                    ))
                }
            </ul>
        </Fragment>
    );
}

export default CursosAprobados;