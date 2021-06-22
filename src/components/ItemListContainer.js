import React from 'react';
import {CardGroup,Card,Row,Col} from 'react-bootstrap/';
import Button from 'react-bootstrap/Button';


const ItemListContainer=()=>{
   
    return (
            <div>
                
              <CardGroup>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Titulo</Card.Title>
                    <Card.Text>
                        texto
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="primary">Boton</Button>{' '}
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Titulo</Card.Title>
                    <Card.Text>
                        texto
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="primary">Boton</Button>{' '}
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                    <Card.Title>Titulo</Card.Title>
                    <Card.Text>
                        texto
                    </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <Button variant="primary">Boton</Button>{' '}
                    </Card.Footer>
                </Card>
                </CardGroup>
            </div>
        )
    }

export default ItemListContainer;
