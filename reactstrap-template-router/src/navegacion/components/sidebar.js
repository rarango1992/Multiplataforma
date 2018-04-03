import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Nav, NavItem} from 'reactstrap';

class Sidebar extends Component{

    constructor(props){
        super(props);
        var C = '';
        var H = '';
        switch(props.Page)
        {
            case 'Contacto':
                C = 'nav-link active';
                H = 'nav-link';
            break;
            case 'Home':
                H = 'nav-link active';
                C = 'nav-link';
            break;
            default:
                H = 'nav-link active';
                C = 'nav-link';
            break;
        }
        this.state = ({
            Home : H,
            Contacto: C
        });


    }

    render(){
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
                </Nav>
            </div>
        );
    }

}


export default Sidebar;