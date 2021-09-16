import React,{Fragment,useState} from "react";

const NuevoProyecto = () => {

    //state para proyecto
    const [proyecto,guardarProyecto] = useState({
        nombre: ''
    });

    //Extraer nombre proyecto
    const {nombre} = proyecto;

    //lee contenidos de inpt
    const onChangeProyecto = e => {
        guardarProyecto({
            ...proyecto,
            [e.target.name] : e.target.value
        })
    }

    //cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.prventDefault();

        //validar proyecto

        //agregar al state

        //reiniciar el form
    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
            >Nuevo Proyecto</button>

            <form
                className="formulario-nuevo-proyecto"
                onSubmit={onSubmitProyecto}
            >
                <input
                    type="text"
                    className="input-text"
                    placeholder="Nombre Proyecto"
                    name="nombre"
                    value={nombre}
                    onChange={onChangeProyecto}
                />
                <input
                    type="submit"
                    className="btn btn-block btn-primario"
                    value="Agregar Proyecto"
                />
            </form>
        </Fragment>
    );
}

export default NuevoProyecto;