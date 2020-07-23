import React, { Component } from 'react';
import {dataProduct} from './appData';
import {productDetail} from './appData';
//first, make a new context 
export const MyContext = React.createContext();

//then, create a provider component


export class MyProvider extends Component {
	constructor(props){
		super(props);
		this.state = {
			dataProduct: dataProduct,
			productDetail: productDetail,
			Cart: []
	 }
	}

	getItem = (id) =>{
		const product = this.state.dataProduct.find(product => product.id === id);
		return product;
	}

	handleDetails = (id) => {
		const product = this.getItem(id);
		this.setState(() => {
			return {productDetail : product}
		})
	}
	addToCart = (id) => {
		let tempProduct = [...this.state.dataProduct];
		const index = tempProduct.indexOf(this.getItem(id));
		const product = tempProduct[index];
		product.inCart = true;
		product.count = 1;
		this.setState( ()=>{
			return {dataProduct: tempProduct, Cart: [...this.state.Cart, product]}
		})
	}
	render() {
		return(
			<MyContext.Provider value={{
				...this.state, handleDetails: this.handleDetails, addToCart: this.addToCart
			}} >
				{this.props.children}
			</MyContext.Provider>
		)
	}
}
