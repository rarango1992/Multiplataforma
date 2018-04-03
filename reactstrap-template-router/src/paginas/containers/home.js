
import React , {Component} from 'react';
import TemplateLayout from '../components/template-layout';
import LateralContent from '../components/laterla-content';
import MainContent from '../components/main-content';
import Populares from '../../articulos/components/populares';
import Sidebar from '../../navegacion/components/sidebar';

export default class Home extends Component{

    constructor(props){
        super(props);
    
        this.state = {
            data: {
                articulos : []
            },
            page: 'Home'
        };


    }

    componentDidMount()
    {
/*         fetch('http://programacion.xyz/mtw/204/react/index.php/api/sitio/populares')
        .then(result =>{
            return result.json();
        })
        .then ((json)=>{
            this.setState({data:json});        
        }); */
    }

    componentWillMount()
    {
        fetch('http://programacion.xyz/mtw/204/react/index.php/api/sitio/populares')
        .then(result =>{
            return result.json();
        })
        .then ((json)=>{
            this.setState({data:json});  
            //console.log(json);   
        });
    }

    render(){
        return(
            <TemplateLayout>
                <LateralContent>
                   <Sidebar Page={this.state.page}/>
                </LateralContent>

                <MainContent>
                    <Populares articulos={this.state.data.articulos} />
                </MainContent>
            
            </TemplateLayout>
        );
    }

}



