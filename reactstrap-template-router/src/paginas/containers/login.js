import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

export default class Login extends Component{

    render(){
        sessionStorage.setItem('session',1414)
        return(
            <Redirect to='/perfil'/>
        );
    }
}