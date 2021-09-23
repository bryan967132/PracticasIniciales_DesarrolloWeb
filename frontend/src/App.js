import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './components/auth/Login';
import RecuperarPassword from './components/auth/RecuperarPassword';
import NuevoPassword from './components/auth/NuevoPassword';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Inicio from './components/inicio/Publicaciones';
import MiPerfil from './components/inicio/MiPerfil';
import ProyectoSate from './context/proyectos/proyectoState';

function App() {
  return (
    <ProyectoSate>
      <Router>
        <Switch>
          <Route exact path = "/" component={Login}/>
          <Route exact path = "/recuperar-password" component={RecuperarPassword}/>
          <Route exact path = "/nuevo-password" component={NuevoPassword}/>
          <Route exact path = "/nueva-cuenta" component={NuevaCuenta}/>
          <Route exact path = "/inicio" component={Inicio}/>
          <Route exact path = "/mi-perfil" component={MiPerfil}/>
        </Switch>
      </Router>
    </ProyectoSate>
  );
}

export default App;