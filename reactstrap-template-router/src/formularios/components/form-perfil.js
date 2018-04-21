import React, {Component} from 'react';
import {Container,Button,FormGroup,Label,Input,Jumbotron} from 'reactstrap';


export default class FormPerfil extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            id:0,
            nombre:'',
            correo:'',
            pass:'',
            repass:''
        };

        if(props.key>0)
        {
            this.setState({
                nombre:'',
                correo:'',
                repass:'',
                pass:''
            });
            //props.key = 0;
        }
            
    }

    componentDidMount(){
        const storage = localStorage.getItem('perfil');
        if(storage)
        {
            var perfil = JSON.parse(storage)
            this.setState({
                nombre: perfil.nombre,
                correo: perfil.correo
            })
        }
    }

    onChangeCorreo(e){
        this.setState({
            correo: e.target.value
        });
    }
    onChangeNombre(e){
        this.setState({
            nombre: e.target.value
        });
    }
    onChangePass(e){
        this.setState({
            pass: e.target.value
        });
    }
    onChangeRePass(e){
        this.setState({
            repass: e.target.value
        });
    }

    render(){
        return(
            <Container>
                <Jumbotron>
                    <h1 className='display-3'>Únete</h1>
                </Jumbotron>
                <FormGroup>
                    <Label>Nombre</Label>
                    <Input onChange={this.onChangeNombre.bind(this)} type='text' name='nombre' id='nombre' placeholder='Tu nombre' value={this.state.nombre}></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Correo Electrónico</Label>
                    <Input onChange={this.onChangeCorreo.bind(this)} type='email' name='email' id='email' placeholder='correo@dominio.com' value={this.state.correo}></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input onChange={this.onChangePass.bind(this)} type='password' name='password' id='password' placeholder='Password'></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Repite Password</Label>
                    <Input onChange={this.onChangeRePass.bind(this)} type='password' name='repassword' id='repassword' placeholder='Password'></Input>
                </FormGroup>
                <FormGroup className='d-flex justify-content-end'>
                    <Button color='primary' onClick={(e)=>{this.props.enviarFormulario(e,this.state.nombre,this.state.correo,this.state.pass,this.state.repass)}} >Subir Usuario</Button>
                </FormGroup>
            </Container>
        );
    }
}