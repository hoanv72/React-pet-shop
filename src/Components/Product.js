import React, { Component } from 'react';
import Item from './Item';
import {MyContext} from './MyProvider';

export class Product extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row product-list">
				<MyContext.Consumer>
					{ (value) => { 
						 return value.dataProduct.map( product => {
						 	return 	<div className="col-3 product" key={product.id}>
						 		  		<Item  product={product} />
						 			</div>						 		
						 })
					}}
				</MyContext.Consumer>
				
			</div>
			</div>
		);
	}
}

export default Product