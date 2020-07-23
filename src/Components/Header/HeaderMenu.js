import React, { Component, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export class HeaderMenu extends Component {
	render() {
		return (
		<Router>
		<Fragment>
			<div className="header-menu">
				<ul>
					<li>
						<Link to='/'>Trang Chủ </Link>
					</li>
					<li>
						<Link to='/product'>Sản Phẩm</Link>
					</li>
					<li className="service">
						<Link to='/service'> Dịch Vụ <i className="fa fa-arrow-circle-down"></i></Link>
						<div className='service-submenu'>
							<ul>
								<li><Link to="/service-1"> Cắt tỉa lông chó mèo</Link> </li>
								<li><Link to="/service-2"> Tắm spa cho chó mèo</Link> </li>
								<li><Link to="/service-3"> Khách sạn chó mèo</Link> </li>
							</ul>
						</div>
					</li>
					<li>
						<Link to='/about'>Về Chúng Tôi</Link>
					</li>
					<li>
						<Link to='/about'>Hỏi Đáp</Link>
					</li>
				</ul>
				<p>FREE SHIP CHO MỌI ĐƠN HÀNG >300K</p>
			</div>

		
	<div className="first-sale">
		<a href="#">Sale Up To 30%</a>
		<p>Trong Lần Mua Hàng Đầu Tiên </p>
	</div>
	</Fragment>
	</Router>
		);
	}
}
export default HeaderMenu