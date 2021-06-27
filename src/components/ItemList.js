import React, { useEffect, useState } from 'react';
import Item from './Item.js';
import {Row,Jumbotron} from 'react-bootstrap/';

const catalogoProductos = [
{id:'1', name: 'Comida gato',image:'https://fakeimg.pl/300/', brand: 'CG', price: 50, initial: 2, min: 2, max: 10},
{id:'2', name: 'Comida Perro',image:'https://fakeimg.pl/300/', brand: 'CP', price: 100, initial: 1, min: 1, max: 10},
{id:'3', name: 'Arena Sanitaria',image:'https://fakeimg.pl/300/', brand: 'AS', price: 20, initial: 4, min: 4, max: 8},
{id:'4', name: 'Plato de comida',image:'https://fakeimg.pl/300/', brand: 'AS', price: 200, initial: 1, min: 2, max: 6}
];

const ItemList = function(){
	const [products, setProducts] = useState([]);
	
	useEffect(() => {
		const task =  new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(catalogoProductos);
			}, 2000)});
	
	task.then(
		res => {
			setProducts(res);
			
		},
		err => {console.log(err)},
		);

	}, []);

				return <> 
				<Jumbotron>
				<Row>
					{products.map(product => 
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
                </Jumbotron>
				</>
}

export default ItemList;