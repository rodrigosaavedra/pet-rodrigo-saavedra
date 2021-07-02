import React, { useEffect, useState } from 'react';
import itemMap from './itemMap';
import catalogoProductos from '.././data/dataCarro'
import {Jumbotron} from 'react-bootstrap/';



const ItemList = function(){
	const [productos, setProducts] = useState([]);
	
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
					<itemMap productos={productos}/>
				</Jumbotron>
				</>
}

export default ItemList;