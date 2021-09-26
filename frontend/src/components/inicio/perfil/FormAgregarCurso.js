import React from 'react';

const FormAgregarCurso = () => {
    let headers = new Headers()
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    headers.append('Access-Control-Allow-Origin','http://localhost:4000');
    headers.append('Access-Control-Allow-Credentials','true');
    headers.append('GET','POST','OPTIONS','PUT','DELETE');
    
    function Remove(str, startIndex, count) {
        return str.substr(0, startIndex) + str.substr(startIndex + count);
    }

    [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34].map(item => {
        fetch(`http://localhost:4000/buscarcurso/${item}`)
        .then(response => response.json())
        .then(result => {
                let objeto = Object.values(result.response);
                let json = JSON.stringify(objeto);
                let cadena = Remove(json,json.length-1,json.length);
                let texto = Remove(cadena,0,1);
                let valor = JSON.parse(texto);
                document.getElementById('opcCur').innerHTML += `<option>${valor.nombre}</option>`;
            
        })
        .catch()
    })

    const agregar = () => {
        alert(document.getElementById('opcCur').value)
    }

    return(
        <div className="form-agregarcurso">
            <form>
                <div className="comboBox">
                    <select id="opcCur" className="opciones" name="optionlist" onChange="combo(this, 'demo')">
                    </select>
                </div>
                <div className="cuerpo contenedor-input">
                    <input
                        type="number"
                        className="input-text"
                        placeholder="Nota de Aprobación..."
                        name="contenido"
                        min="61"
                        max="100"
                    />
                </div>
                <div className="agC contenedor-input">
                    <button
                        className="btn btn-primario btn-block" onClick={agregar}
                    >Agregar Curso</button>
                </div>
            </form>
        </div>
    );
}

export default FormAgregarCurso;