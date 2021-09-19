import React,{Fragment,useContext,useState} from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {

    //obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const {formulario,mostrarFormulario,agregarProyecto} = proyectosContext;

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
        if(nombre === '') {
            return
        }

        //agregar al state
        agregarProyecto(proyecto);
        //reiniciar el form
    }

    //mostrar formulario
    const onClickForm = () => {
        mostrarFormulario()
    }

    return (
        <form
            className="formulario-nuevo-proyecto"
            onSubmit={onSubmitProyecto}
        >
            <input
                type="text"
                className="input-text"
                placeholder="Registro Académico..."
                name="nombre"
                value={nombre}
                onChange={onChangeProyecto}
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