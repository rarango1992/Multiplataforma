import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Nav, NavItem} from 'reactstrap';

class Sidebar extends Component{

    constructor(props){
        super(props);
        var C = '';
        var H = '';
        var P = '';
        var L = '';
        switch(props.Page)
        {
            case 'Contacto':
                C = 'nav-link active';
                H = 'nav-link';
                P = 'nav-link';
                L = 'nav-link';
            break;
            case 'Home':
                H = 'nav-link active';
                C = 'nav-link';
                P = 'nav-link';
                L = 'nav-link';
            break;
            case 'Perfil':
                P = 'nav-link active';
                C = 'nav-link';
                H = 'nav-link';
                L = 'nav-link';
            break;
            default:
                H = 'nav-link';
                C = 'nav-link';
                C = 'nav-link';
                L = 'nav-link';
            break;
        }
        this.state = ({
            Home : H,
            Contacto: C,
            Perfil: P,
            Logout: L
        });


    }

    

    render(){
        let session = sessionStorage.getItem('session');

        var navPerfil =            
                    <NavItem>
                        <Link className={this.state.Perfil} to='/Perfil'>Perfil</Link>
                    </NavItem>;
        var navLogin =            
                    <NavItem>
                        <Link className='nav-link' to='/login'>Login</Link>
                    </NavItem>;
        var navLogout =            
                    <NavItem>
                        <Link className='nav-link' to='/logout'>Logout</Link>
                    </NavItem>;
         

        return(
            <div>
                <Nav vertical pills>
                    <h4>Tu blog</h4>                    
                    <NavItem>
                        <Link className={this.state.Home} to='/home'>Home</Link>
                    </NavItem>
                    <NavItem>
                        <Link className={this.state.Contacto} to='/contacto'>Contacto</Link>
                    </NavItem>
                    {(session>0) ? navPerfil : ''}
                    {(session>0) ? navLogout : navLogin}
                </Nav>
            </div>
        );
    }

}


export default Sidebar;