import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

/*import App from './componentes/app/app.js';
import ComponenteFuncional from './ejemplos/componentefuncional/funciona';
import Normal from './ejemplos/componentenormal/normal';
import Puro from './ejemplos/componentepuro/puro';*/
import datos from './datos.json';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './paginas/containers/home';
import Contacto from './paginas/containers/contacto';

const app = document.getElementById('app');

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path='/home' component={Home}/>
            <Route path='/contacto' component={Contacto}/>
        </div>
    </BrowserRouter>    

    ,app);

