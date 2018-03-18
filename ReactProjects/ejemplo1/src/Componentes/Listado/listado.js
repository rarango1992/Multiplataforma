import React,{Component} from 'react';
import Articulo from '../Articulo/articulo.js';


class Listado extends Component
{
    render(){

        const articulos = this.props.datos.articulos;

        return(
            <div>
                {
                    articulos.map((item) => {
                        return <Articulo {...item} key={item.id} />
                    })
                }
            </div>
        );

    }

}

export default Listado;