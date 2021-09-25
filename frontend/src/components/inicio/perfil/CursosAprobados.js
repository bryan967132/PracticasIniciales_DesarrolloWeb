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
    
    const asignadosCursos = [
        {id: 1, nota: '80', idU: 1, idC: 1, },
        {id: 2, nota: '64', idU: 2, idC: 3, },
        {id: 3, nota: '90', idU: 1, idC: 10, },
        {id: 4, nota: '96', idU: 1, idC: 11, }
    ];

    const cursosDisponibles = [
        {id: 1, creditos: '3', nombre: 'Social Humanística 1'},
        {id: 2, creditos: '3', nombre: 'Social Humanística 2'},
        {id: 3, creditos: '5', nombre: 'Matemática Básica 1'},
        {id: 4, creditos: '5', nombre: 'Matemática Básica 2'},
        {id: 5, creditos: '5', nombre: 'Matemática Intermedia 1'},
        {id: 6, creditos: '5', nombre: 'Matemática Intermedia 2'},
        {id: 7, creditos: '5', nombre: 'Matemática Intermedia 3'},
        {id: 8, creditos: '5', nombre: 'Matemática Aplicada 1'},
        {id: 9, creditos: '5', nombre: 'Matemática Aplicada 3'},
        {id: 10, creditos: '5', nombre: 'Introducción a la Programación y Computación 1'},
        {id: 11, creditos: '5', nombre: 'Introducción a la Programación y Computación 2'},
    ];

    return(
        <Fragment>
            <ul className="listado-cur">
                <h1>Cursos Aprobados</h1>
                <FormAgregarCurso
                    cursosDisponibles = {cursosDisponibles}
                />
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