import React from 'react';
import ReactDOM from 'react-dom';
import Articulo, {Servicios} from './Componentes/Articulo/articulo';
import Listado from './Componentes/Listado/listado';
import logo from './Imagenes/image.jpeg';
import datos from './datos.json';


const app = document.getElementById('app');
const app2 = document.getElementById('app2');
const app3 = document.getElementById('app3');
const app4 = document.getElementById('app4');
const app5 = document.getElementById('app5');

//ReactDOM.render(lo que voy a renderizar, en donde);
//Que puedo renderizar?  JSX, Componente


ReactDOM.render(<h1>Hola React</h1>, app);

var texto = "Clase";
const html = <h1>Hola Constante {texto}</h1>;
ReactDOM.render(html,app2);

ReactDOM.render(<Servicios/>, app4);


ReactDOM.render(<Articulo description="EJERCICIOS" titulo="Prueba uno" width={256} logo={logo} alt=""/>,app3);

ReactDOM.render(<Listado datos={datos}/>,app5);

console.log(datos);

