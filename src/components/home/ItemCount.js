import React, {useState} from 'react';
import {Button,Row,Col} from 'react-bootstrap';

const ItemCount = function({ max, min, initial, onAdd }){
    
    
    const [counter, setCounter] = useState(initial);

	const removeItem = function(){
		counter > min ? setCounter(counter-1) : console.log('Se llegó al límite minimo');
	}

	const addItem = function(){
		counter < max ? setCounter(counter+1) : console.log('Se llegó al límite máximo');
	}

	return(
		<>
			
        <Row>
            <Col>
                <Button onClick={removeItem} >
                    -
                </Button>
            </Col>
            <Col>
                <p >{ counter }</p>
            </Col>
            <Col>
                <Button onClick={addItem} >
                    +
                </Button>
            </Col>
        </Row>
		</>
		);
    
    
}
export default ItemCount;