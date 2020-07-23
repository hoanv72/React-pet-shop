import React, { Component } from 'react';
import {MyContext} from '../MyProvider';
export class Detail extends Component {
	render() {
		var {match} = this.props;
		var {id} = match.params;
		console.log(id);
		return (
			<div>
				<MyContext.Consumer>
					{ (value) => {	
						console.log(value.Cart);				
						return <div className="detail">
							<div className="detail-img">
								<img src={value.dataProduct[id].img} />
							</div>
							<div className="detail-content">
								<h2>{value.dataProduct[id].title} </h2>
								<h3>Thương Hiệu: {value.dataProduct[id].brand}</h3>
								<div>Người dùng đánh giá: <i className="fa fa-star"></i> 
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								<i className="fa fa-star"></i>
								</div>

								<p><h4>Mô tả:</h4> {value.dataProduct[id].info} </p>

								<button onClick={() => {value.addToCart(id)}} >Đặt Hàng</button>
							</div>
						</div>
					}}
				</MyContext.Consumer>
			</div>
		);
	}
}
export default Detail;
