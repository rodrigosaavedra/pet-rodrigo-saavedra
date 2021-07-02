import React from 'react';
import ItemCount from './ItemCount.js';
import {Card,Col} from 'react-bootstrap/';




const Item = function({id, name,image, brand, price, initial, min, max}){
	
	return(
		<Col>
         <Card>			
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {brand}${price}
            </Card.Text>
            <Card.Img variant="top" src="{image}" />
            </Card.Body>
			<ItemCount max={max} min={min} initial={initial} />
		 </Card>
        </Col>
		);
}

export default Item;