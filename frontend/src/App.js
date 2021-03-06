import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Login from './components/auth/Login';
import RecuperarPassword from './components/auth/RecuperarPassword';
import NuevaCuenta from './components/auth/NuevaCuenta';
import Inicio from './components/inicio/Publicaciones';
import MiPerfil from './components/inicio/MiPerfil';
import MiPerfilEditable from './components/inicio/MiPerfilEditable';
import PublicacionesCurso from './components/inicio/PublicacionesCurso';
import PublicacionesCatedratico from './components/inicio/PublicacionesCatedratico';
import PublicacionesCurEsp from './components/inicio/PublicacionesCurEsp';
import PublicacionesCatEsp from './components/inicio/PublicacionesCatEsp';
import ProyectoSate from './context/proyectos/proyectoState';

function App() {
  return (
    <ProyectoSate>
      <Router>
        <Switch>
          <Route exact path = "/" component={Login}/>
          <Route exact path = "/recuperar-password" component={RecuperarPassword}/>
          <Route exact path = "/nueva-cuenta" component={NuevaCuenta}/>
          <Route exact path = "/inicio" component={Inicio}/>
          <Route exact path = "/mi-perfil" component={MiPerfil}/>
          <Route exact path = "/mi-perfil-modificar" component={MiPerfilEditable}/>
          <Route exact path = "/publicaciones-por-curso" component={PublicacionesCurso}/>
          <Route exact path = "/publicaciones-por-catedratico" component={PublicacionesCatedratico}/>
          <Route exact path = "/publicaciones-por-curso-especifico" component={PublicacionesCurEsp}/>
          <Route exact path = "/publicaciones-por-catedratico-especifico" component={PublicacionesCatEsp}/>
        </Switch>
      </Router>
    </ProyectoSate>
  );
}

export default App;