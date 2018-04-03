import React,{Component} from 'react';
import TemplateLayout from '../components/template-layout';
import MainContent from '../components/main-content';
import LateralContent from '../components/laterla-content';
import Sidebar from '../../navegacion/components/sidebar';
import FormContacto from '../../formularios/components/form-contacto';


class Contacto extends Component
{
    constructor(props){
        super(props);

        this.state = { 
            key : 0,
            page: 'Contacto' 
        };

    }

    //http://programacion.xyz/mtw/204/react/index.php/api/sitio/comentarios

    guardarComentario = (e,correo,mensaje) => {
        //alert(correo);
        //alert(mensaje);
        fetch('http://programacion.xyz/mtw/204/react/index.php/api/sitio/comentario',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                id:0,
                correo: correo,
                mensaje: mensaje
            })           
        });
        alert('El mensaje ha sido enviado, gracias ' + correo);
        this.setState({
            key : Math.random()
        })
    }

    render(){
        return(
            <TemplateLayout>
                <LateralContent>
                    <Sidebar Page={this.state.page}/>
                </LateralContent>
                <MainContent>
                    <h1>Contacto</h1>
                    <FormContacto enviarFormulario={this.guardarComentario} key={this.state.key}/>
                </MainContent>
            </TemplateLayout>
        );
    }

}

export default Contacto;