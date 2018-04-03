import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Jumbotron,Container,Badge} from 'reactstrap';

class App extends Component{

    render()
    {
        
        return(

            <div>
                <Jumbotron>
                    <h1>Cursos de programación</h1>
                    <p className="lead">Adquiere tu curso en linea</p>
                </Jumbotron>
                <Container fluid>
                    <h4>Articulos recientes</h4>
                    <div className="rounded bg-secondary p-3 text-white">
                        <h2>Programación en PHP</h2>
                        <h6>Por Rodrigo Arango</h6>
                        <h6><Badge color="warning">PHP</Badge><Badge color="info">WEB</Badge></h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem explicabo, tempore magni maxime fugiat sit reprehenderit possimus facere est nam ratione libero soluta, modi ullam quas voluptates perspiciatis corrupti necessitatibus.
                        </p>
                    </div>
                </Container>
            </div>

        );

    }
        
}

export default App;