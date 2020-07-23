import React, { Component, Fragment } from 'react';

export class HeaderBanner extends Component {
	render() {
		return (
			<Fragment>
			<div className="header-banner">
				<p className="header-brand">Pet Shop</p>
				<input type="text" placeholder="Tìm sản phẩm tốt nhất cho thú cưng của bạn..." /> 
				<button className="btn-search"> <i className="fa fa-search"></i></button> 
				<ul>
					<li>
						Tư Vấn 24/7 <i className="fa fa-arrow-circle-down"></i>
						<div className="help-submenu">
							<ul>
								<li> <p> Nhận hỗ trợ từ chuyên gia 24/7</p>										
									<h3>1-800-672-4399</h3> </li>
								<li>
									<div><i className="fa fa-comments"></i>Nhắn Tin</div>
									<div><i className="fa fa-envelope-o"></i>Liên Hệ</div>
								</li>
							</ul>
						</div>
					</li>
					<li>
						Tài Khoản <i className="fa fa-arrow-circle-down"></i>
						<div className="account-submenu">
							<ul>
								<li>
									<div><p>Đăng Nhập</p></div>
									<div> <p>Chưa có tài khoản?</p> <a href="#">Đăng kí</a></div>
								</li>
								<li><a href="#"> Tài Khoản</a></li>
								<li><a href="#">Đã Mua</a></li>
								<li><a href="#">Thú cưng của bạn</a></li>
								<li><a href="#">Đăng Xuất</a></li>
							</ul>
						</div>
					</li>
					<li>
						<i className="fa fa-cart-plus "><span >0</span> </i> Giỏ Hàng
						<div></div>
					</li>
				</ul>
			</div>
			</Fragment>
		);
	}
}
export default HeaderBanner