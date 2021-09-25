import React from 'react';

const FormAgregarCurso = ({cursosDisponibles}) => {
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