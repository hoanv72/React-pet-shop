import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {MyContext} from '../MyProvider';
export class ProductList extends Component {
	render() {
		return (
			<div className="product-list">
				<div className="tab-bar">
					<div className="pet-sort">
						<p>Bạn Muốn Mua cho:</p>
						<ul>
							<li><a href="#"><i className="fa fa-arrow-right"></i> Chó</a></li>
							<li><a href="#"><i className="fa fa-arrow-right"></i> Mèo</a></li>
						</ul>
					</div>
					<div className="price-sort">
						<p>Bạn Muốn Tìm Sản phẩm Giá:</p>
						<div>
							<input type="checkbox" id="price-sort-1" /> 
							<label for="price-sort-1">50k-200k</label>
						</div>
						<div>
							<input type="checkbox" id="price-sort-2" /> 
							<label for="price-sort-2">200k-500k</label>
						</div>
						<div>
							<input type="checkbox" id="price-sort-3" />
							<label for="price-sort-3"> > 500k</label> 
						</div>
						 
						
					</div>
				</div>
				<div className="main">
					<MyContext.Consumer>
						{(value) => {
							return value.dataProduct.map( (product, index) => {
								return	<div key={index} className="product-item"> 
										<Link to={`/product/${product.id}`}>
											<img src={product.img} />
											<div className="info-preview">
												<div className="product-rated">
													<p>Rated: </p>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
													<i className="fa fa-star"></i>
												</div>

												<div className="product-info">
													<p className="product-price">{product.price} VNĐ</p>
													<p className="product-name">{product.title}</p>

												</div>
											</div>
											</Link>
										</div> 
										
							})
						}}
					</MyContext.Consumer>
				</div>
			</div>
		);
	}
}
export default ProductList;