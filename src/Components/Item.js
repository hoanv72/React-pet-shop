import React, { Component } from 'react';
import {MyContext} from './MyProvider';
import {Link} from 'react-router-dom';
export class Item extends Component {
	render() {
		const { id, title, img, price, brand, info, inCart } = this.props.product;
		return(
		<div className="card">
		<Link to="/detail">
			<img src={img} className="card-img-top" style={{height: '200px'}} alt="..."/>
			<div className="card-body">
				<h5 className="card-title"> {brand} {title} </h5>
				<p className="card-text"> {info}</p>
				<MyContext.Consumer>
				{(value) =>{
					return <React.Fragment>  <a href="#" className="btn btn-primary" onClick={() => {value.addToCart(id)}} >  {inCart === true ? "Đã Mua" : "Mua Hàng"} </a>
					 </React.Fragment> 
				}}
				
				</MyContext.Consumer>
			</div>
		</Link>
		</div>

		);
	}
}

export default Item