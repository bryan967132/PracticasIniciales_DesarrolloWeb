import React from 'react';

const FormTarea = () => {

    return(
        <div className="formulario">
            <form>
                <div className="cuerpo contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Publicación..."
                        name="contenido"
                    />
                </div>
                <div className="opc comboBox">
                    <select className="opciones" name="optionlist" onChange="combo(this, 'demo')">
                        <option>Curso</option>
                        <option>Catedrático</option>
                    </select>
                </div>

                <div className="cur-cat comboBox">
                    <select className="opciones" name="optionlist" onChange="combo(this, 'demo')">
                        <option>Opcion 1</option>
                        <option>Opcion 2</option>
                        <option>Opcion 3</option>
                        <option>Opcion 4</option>
                        <option>Opcion 5</option>
                        <option>Opcion 6</option>
                        <option>Opcion 7</option>
                        <option>Opcion 8</option>
                        <option>Opcion 9</option>
                        <option>Opcion 10</option>
                    </select>
                </div>
                <div className="pub contenedor-input">
                    <button
                        className="btn btn-primario btn-submit btn-block"
                    >Publicar</button>
                </div>
            </form>
        </div>
    );
}

export default FormTarea;