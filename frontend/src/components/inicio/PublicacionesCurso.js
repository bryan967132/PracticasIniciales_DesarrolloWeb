import React from 'react'
import Sidebar1 from '../layout/Sidebar1';
import Barra from '../layout/Barra'
import FormTarea from '../publicaciones/FormPublicacion';
import ListadoPublicaciones from '../publicaciones/ListadoPublicaciones';

const PublicacionesCurso = ({}) => {

    let headers = new Headers()
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    headers.append('Access-Control-Allow-Origin','http://localhost:4000');
    headers.append('Access-Control-Allow-Credentials','true');
    headers.append('GET','POST','OPTIONS','PUT','DELETE');

    function Remove(str, startIndex, count) {
        return str.substr(0, startIndex) + str.substr(startIndex + count);
    }

    let url = Object.values(window.location);
    let json = JSON.stringify(url);
    let arr = Remove(json,0,4);
    let valor = Remove(arr,arr.length-1,arr.length);
    let sep = valor.split(',');
    let cadena = sep[0]
    let arr1 = Remove(cadena,0,1);
    let valor1 = Remove(arr1,arr1.length-1,arr1.length);
    let carnet = Remove(valor1,0,53);
    
    return (
        <div className="contenedor-app">
            <Sidebar1 
                carnet={carnet}
            />
            <div className="seccion-principal">
                <Barra
                    carnet={carnet}
                />
                <main>
                    <FormTarea/>
                    <h1 className="pubCur">Publicaciones por Curso</h1>
                    <div className="contenedor-tareas">
                        <ListadoPublicaciones/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default PublicacionesCurso;
