import React from 'react'
import Sidebar3 from '../layout/Sidebar3';
import Barra from '../layout/Barra'
import FormTarea from '../publicaciones/FormPublicacion';
import ListadoPublicaciones from '../publicaciones/ListadoPublicaciones';
import FormFiltro from './FormFiltro';

const PublicacionesCursoEspecifico = () => {

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
    let carnet = Remove(valor1,0,64);
    
    const catedratico = [];
    return (
        <div className="contenedor-app">
            <Sidebar3
                carnet={carnet}
            />
            <div className="seccion-principal">
                <Barra
                    carnet={carnet}
                />
                <main>
                    <FormTarea/>
                    <h1 className="pubCur">Publicaciones por Curso Específico</h1>
                    <FormFiltro
                        catedraticos={catedratico}
                    />
                    <div className="contenedor-tareas">
                        <ListadoPublicaciones/>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default PublicacionesCursoEspecifico;