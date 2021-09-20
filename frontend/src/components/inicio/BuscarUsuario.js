import React from "react";

const NuevoProyecto = () => {
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
            <input
                type="submit"
                className="btn btn-block btn-primario"
                value="Buscar Usuario"
            />
        </form>
    );
}

export default NuevoProyecto;