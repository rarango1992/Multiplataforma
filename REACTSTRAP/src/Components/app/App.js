import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Jumbotron,Container,Badge,CardFooter} from 'reactstrap';

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
                    <hr/>
                    <div className="rounded bg-secondary p-3 text-white">
                        <h2>Programación en PHP</h2>
                        <h6>Por Rodrigo Arango</h6>
                        <h6><Badge className="mr-1" color="warning">PHP</Badge><Badge color="info">WEB</Badge></h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem explicabo, tempore magni maxime fugiat sit reprehenderit possimus facere est nam ratione libero soluta, modi ullam quas voluptates perspiciatis corrupti necessitatibus.
                        </p>
                    </div>
                    <hr/>
                    <h2>Arduino y Sistemas Embebidos</h2>
                    <h6> Por Rodrigo Arango</h6>
                    <h6> 
                        <Badge className="mr-1" color="danger">Python</Badge><Badge color="success">Programación IoT</Badge>
                    </h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem explicabo, tempore magni maxime fugiat sit reprehenderit possimus facere est nam ratione libero soluta, modi ullam quas voluptates perspiciatis corrupti necessitatibus.
                    </p>
                    <hr/>
                    <h2>Programación en Node</h2>
                    <h6> Por Rodrigo Arango</h6>
                    <h6> 
                        <Badge className="mr-1" color="primary">Javascript</Badge><Badge color="secondary">Angular</Badge>
                    </h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem explicabo, tempore magni maxime fugiat sit reprehenderit possimus facere est nam ratione libero soluta, modi ullam quas voluptates perspiciatis corrupti necessitatibus.
                    </p>
                    <hr/>

                </Container>
                <CardFooter className="bg-secondary text-center mt-2 p-2 text-white">
                    Mi Sitio 2018 &copy;
                </CardFooter>

            </div>

        );

    }
        
}

export default App;