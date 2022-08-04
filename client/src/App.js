import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from '../src/store/';
import { Provider } from 'react-redux';

/* Páginas*/
import Login from './view/login/';
import Home from './view/home-fire';
import UsuarioRecuperarSenha from './view/usuario-recuperar-senha/';
import PublicationManagement from './view/publicationManagement';
import UsersManagement from './view/usersManagement';
import ErrorsReport from './view/errorsReport';
import DatabaseManagement from './view/databaseManagement';
    


function App() {
    return ( 
        <Provider store={store}>
            <Router>
                <React.Fragment>
                <Route exact path='/home' component={Home} />
                <Route exact path='/publicationManagement' component={PublicationManagement} />
                <Route exact path='/usersManagement' component={UsersManagement} />
                <Route exact path='/errorsReport' component={ErrorsReport} />
                <Route exact path='/databaseManagement' component={DatabaseManagement} />
                
                <Route  exact path='/login' component={Login}/>
                <Route  exact path='/usuariorecuperarsenha' component={UsuarioRecuperarSenha}/>
                </React.Fragment>
            </Router>
        </Provider>
    );
}

export default App;