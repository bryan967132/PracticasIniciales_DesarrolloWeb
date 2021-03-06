import React,{Fragment} from 'react';
import Comentario from './Comentario';

const ListadoComentarios = ({idPub}) => {
    let headers = new Headers()
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    headers.append('Access-Control-Allow-Origin','http://localhost:4000');
    headers.append('Access-Control-Allow-Credentials','true');
    headers.append('GET','POST','OPTIONS','PUT','DELETE');
    
    const comentarios = [
        {id: 2, autor: 'Usuario4', contenido: 'Muy bueno, lo recomiendo', fecha: "19/09/2021"},
        {id: 1, autor: 'Usuario1', contenido: 'Elegir Colores', fecha: "15/09/2021"},
        {id: 4, autor: 'Usuario2', contenido: 'Muy bueno, lo recomiendo', fecha: "02/08/2021"},
        {id: 2, autor: 'Usuario3', contenido: 'Elegir Hosting',  fecha: "02/02/2021"}
    ];

    return(
        <Fragment>
            <ul className="listado-cmt">
                {comentarios.length === 0
                    ? (<li className="comentario"><p>No hay comentarios</p></li>)
                    : (
                        comentarios.map(cmt =>(
                            <Comentario
                                idpub = {idPub}
                                comentario = {cmt}
                            />
                        ))
                    )
                }
            </ul>
        </Fragment>
    );
}

export default ListadoComentarios;