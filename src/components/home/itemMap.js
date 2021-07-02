import React from 'react'
import Item from './Item.js'
import {Row} from 'react-bootstrap/';




const ItemMap = function({productos}){
	
	return(
		
				<Row>
					
					{productos.map(product => 
								<Item 
								id={product.id}
								name={product.name}
                                image={product.image}
								brand={product.brand}
								price={product.price}
								initial={product.initial}
								min={product.min}
								max={product.max}
								/>)}
				</Row>
		);
}

export default ItemMap;