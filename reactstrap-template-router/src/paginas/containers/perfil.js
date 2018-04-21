import React, {Component} from 'react';
import TemplateLayout from '../components/template-layout';
import MainContent from '../components/main-content';
import LateralContent from '../components/laterla-content';
import Sidebar from '../../navegacion/components/sidebar';
import FormPerfil from '../../formularios/components/form-perfil';
//import SERVICE from '../../constantes';
import {Redirect} from 'react-router-dom';

class Perfil extends Component
{
    constructor(props) {
        super(props);

        this.state = {
            key: 0,
            page: 'Perfil'
        };

    }

    
    //http://programacion.xyz/mtw/204/react/index.php/api/sitio/comentarios

    guardarUsuario = (e, nombre, correo, pass, repass) => {
        if(pass===repass){
            /* alert(nombre); 
            alert(correo);
            alert(pass); */
            localStorage.setItem('perfil', JSON.stringify(
                {
                    nombre: nombre,
                    correo: correo,
                    password: pass
                })
            );
        }
        else
            alert("Passwords no coinciden");
        this.setState({
            key: Math.random()
        })
        /* fetch(SERVICE.CONTROLLER_SITIO_COMENTARIO, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: 0, correo: correo, mensaje: mensaje})
        });
        alert('El mensaje ha sido enviado, gracias ' + correo);
        this.setState({
            key: Math.random()
        }) */
    }

    render() {
        let session = sessionStorage.getItem('session')
        if(!session)
            return(
                <Redirect to = '/' />
            );
        return (
            <TemplateLayout>
                <LateralContent>
                    <Sidebar Page={this.state.page}/>
                </LateralContent>
                <MainContent>
                    <h1>Perfil</h1>
                    <FormPerfil enviarFormulario={this.guardarUsuario} key={this.state.key}/>
                </MainContent>
            </TemplateLayout>
        );
    }

}

export default Perfil;
