import React from "react";

const NuevoProyecto = () => {
    
    let headers = new Headers()
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    headers.append('Access-Control-Allow-Origin','http://localhost:4000');
    headers.append('Access-Control-Allow-Credentials','true');
    headers.append('GET','POST','OPTIONS','PUT','DELETE');

    const buscarUsuario = () => {
        fetch('http://localhost:4000/buscarusuario',{
            method:'GET',
            headers,
            body: `{
                "carnet":"${parseInt(document.getElementById('carnet').value)}"
            }`
        })
        .then(response => response.json())
        .then(result => {
            if(result.valor === false){
                alert('El no existe')
            }
        })
        .catch(
            error => {
                alert(error)
            }
        )
    }

    return (
        <form
            className="formulario-nuevo-proyecto"
        >
            <input
                type="text"
                className="input-text"
                placeholder="Registro Académico..."
                name="nombre"
            />
            <button
                className="btn btn-block btn-primario"
            >Buscar Usuario</button>
        </form>
    );
}

export default NuevoProyecto;
