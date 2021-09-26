const FormFiltro = ({catedraticos}) => {

    let headers = new Headers()
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
    headers.append('Access-Control-Allow-Origin','http://localhost:4000');
    headers.append('Access-Control-Allow-Credentials','true');
    headers.append('GET','POST','OPTIONS','PUT','DELETE');
    
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