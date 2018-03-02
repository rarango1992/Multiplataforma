import React from 'react';


class Articulo extends React.Component
{
    render(){
        return(
            //Codigo JSX
            <div>
                <h1>{this.props.titulo}</h1>
                <div>
                    <img src={this.props.logo} width={this.props.width} alt={this.props.alt}/>
                </div>  
                <p>Descripcion del Articulo</p>  
            </div>
        );
    }
}

Articulo.defaultProps = {
    width : 20
}




export class Servicios extends React.Component
{
    render() {
            return (
            //Codigo JSX 
                <div> 
                    <h1>Hola Servicio</h1> 
                </div>
            );
        }
}


export default Articulo;