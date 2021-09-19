import React, { useReducer } from "react";

import uuid from 'uuid/dist/v4';

import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";
import {
    FORMULARIO_PROYECTO,
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO
} from "../../types"; 

const ProyectoState = props => {

    const proyectos = [
        {id: 1, nombre: 'Usuario 1'},
        {id: 2, nombre: 'Usuario 2'},
        {id: 3, nombre: 'Usuario 3'},
        {id: 4, nombre: 'Usuario 4'}
    ]

    const initialState = {
        proyectos : [],
        formulario : false
    }

    //dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    //serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    //obtener los proyectos
    const obtenerProyectos = () => {
        dispatch({
            type: OBTENER_PROYECTOS,
            payload: proyectos
        })
    }

    //agregar nuevo proyecto
    const agregarProyecto = proyecto => {
        proyecto.id = uuid.v4();

        //insertar proyecto en el state
        dispatch({
            type: AGREGAR_PROYECTO,
            payload: proyecto
        })
    }

    return(
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
    )
}

export default ProyectoState;