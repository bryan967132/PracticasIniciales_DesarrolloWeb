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

                <div className="cur-cat contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Curso o Catedrático..."
                        name="nombre"
                    />
                </div>
                <div className="pub contenedor-input">
                    <input
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Publicar"
                    />
                </div>
            </form>
        </div>
    );
}

export default FormTarea;