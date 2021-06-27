import React from 'react';
import ItemCount from './ItemCount.js';
import {Card,Col} from 'react-bootstrap/';




const Item = function({id, name,image, brand, price, initial, min, max}){
	const addToCart = function(quantity){console.log('Se agregaron '+ quantity + ' unidades al carrito')}
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
			<ItemCount max={max} min={min} initial={initial} onAdd={addToCart}/>
		 </Card>
        </Col>
		);
}

export default Item;