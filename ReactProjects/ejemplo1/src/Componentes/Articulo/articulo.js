import React from 'react';
import './articulo.css';


class Articulo extends React.Component
{

    constructor(props){
        super(props);
        this.click = this.click.bind(this);

        this.state = {
            description: this.props.description
        };
    }

    click(event){
        console.log("Holi");
        console.log(this.props.description);
    }

    click2 = (event) =>{
        console.log(this.props.description);
        this.setState({
            description: "Modificado el State"
        });
    }


    render(){

        const style = {
            container : {
                fontSize : 18,
                backgroundColor : 'gray'
            },
            h1 : {
                color: 'red'
            }
        }

        return(
            //Codigo JSX
            <div className="Articulo">
                <h1 style = {style.h1}>{this.props.titulo}</h1>
                <div>
                    <img src={this.props.logo} width={this.props.width} alt={this.props.alt}/>
                </div>  
                <p>{this.state.description}</p>  
                <button onClick={this.click}>Click</button>
                <button onClick={this.click2}>Click</button>
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