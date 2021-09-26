import React from 'react';

const FormAgregarCurso = ({cursosDisponibles}) => {
    let headers = new Headers()
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    headers.append('Access-Control-Allow-Origin','http://localhost:4000');
    headers.append('Access-Control-Allow-Credentials','true');
    headers.append('GET','POST','OPTIONS','PUT','DELETE');
    
    function Remove(str, startIndex, count) {
        return str.substr(0, startIndex) + str.substr(startIndex + count);
    }

    return(
        <div className="form-agregarcurso">
            <form>
                <div className="comboBox">
                    <select className="opciones" name="optionlist" onChange="combo(this, 'demo')">
                        {cursosDisponibles.length === 0
                            ? (<option>No hay cursos disponibles</option>)
                            : cursosDisponibles.map(curD =>(
                                <option>{curD.nombre}</option>
                            ))
                        }
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
                        className="btn btn-primario btn-block"
                    >Agregar Curso</button>
                </div>
            </form>
        </div>
    );
}

export default FormAgregarCurso;