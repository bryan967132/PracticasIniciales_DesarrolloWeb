const FormFiltro = ({catedraticos}) => {
    return(
        <div className="form-filtro">
            <form>
                <div className="comboBox">
                    <select className="opciones" name="optionlist" onChange="combo(this, 'demo')">
                        {catedraticos.length === 0
                            ? (<option>Elija una opción</option>)
                            : catedraticos.map(catD =>(
                                <option>{catD.nombre}</option>
                            ))
                        }
                    </select>
                </div>
            </form>
        </div>
    );
}

export default FormFiltro;