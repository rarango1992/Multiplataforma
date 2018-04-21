import React, {Component} from 'react';
import {Container,Button,FormGroup,Label,Input,Jumbotron} from 'reactstrap';


export default class FormContacto extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            id:0,
            correo:'',
            mensaje:''
        };

        if(props.key>0)
        {
            this.setState({
                correo:'',
                mensaje:''
            });
            //props.key = 0;
        }
            
    }

    onChangeCorreo(e){
        this.setState({
            correo: e.target.value
        });
        console.log(this.state.correo);
    }
    onChangeMensaje(e){
        this.setState({
            mensaje: e.target.value
        });
    }


    render(){
        return(
            <Container>
                <Jumbotron>
                    <h1 className='display-3'>Déjanos tu mensaje</h1>
                    <p className='lead'>No lo dudes!! Déjanos tu mensaje</p>
                </Jumbotron>
                <FormGroup>
                    <Label>Correo Electrónico</Label>
                    <Input onChange={this.onChangeCorreo.bind(this)} type='email' name='email' id='email' placeholder='correo@dominio.com'></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Tu mensaje</Label>
                    <Input onChange={this.onChangeMensaje.bind(this)} type='textarea' name='mensaje' id='mensaje' placeholder='Tu mensaje...'></Input>
                </FormGroup>
                <FormGroup className='d-flex justify-content-end'>
                    <Button color='primary' onClick={(e)=>{this.props.enviarFormulario(e,this.state.correo,this.state.mensaje)}} >Enviar mensaje</Button>
                </FormGroup>
            </Container>
        );
    }
}