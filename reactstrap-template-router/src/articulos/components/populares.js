import React, {Component} from 'react';
import Articulo from './articulo';

class Populares extends Component {

    constructor(props) {
        super(props);
        this.state = ({
            criterio : ""
        });
    }

    onChangeCriterio(e){
        this.setState({
            criterio: e.target.value
        });
    }

    render() {
        if(this.props.articulos.length >0)
        {
            var x = 0;
            var i = 0;
            return (
                <div>
                    <h4><small>Articulos más pupulares</small></h4>
                    <input onChange={this.onChangeCriterio.bind(this)} type='text' name='criterio' placeholder="Criterio..." ></input> 
                    {
                        this.props.articulos.map((item) => {
                            //console.log(item);
                            //console.log(this.state.criterio);
                            i++;
                            if(item.nombre.toUpperCase().indexOf(this.state.criterio.toUpperCase())>-1)
                            {
                                x++;
                                return <Articulo {...item} key={item.id} /> 
                            }
                            if(x==0 && i==this.props.articulos.length)
                                return (
                                    <div>
                                        <hr/>
                                        <p className="text-center"> Sin coincidencias... </p>
                                    </div>
                                );
                        })
                    }
                </div>
            );
        }
        else
            return <p className="text-center"> Cargando articulos... </p>;

    }

}

export default Populares;
