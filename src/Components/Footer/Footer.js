import React, { Component } from 'react';

export class Footer extends Component {
	render() {
		return (
	<div id="footer">
		<div className="footer-banner">
			<ul>
				<li>Nhận Tư Vấn Bởi Chuyên Gia Của Chúng Tôi 24/7:</li>
				<li> <a> <i className="fa fa-envelope-o"></i> Hộp Thư</a> </li>
				<li>  <a href="#header">Về Đầu Trang <i className="fa fa-arrow-circle-up"></i></a> </li>
			</ul>
		</div>
		<div className="footer-menu">
			<div className="mobile-app">
				<img src="public/img/apple-store.jpg" alt="#"/>
				<img src="public/img/google-play.png" alt="#"/>
			</div>
			<div className="contact-icon">
				<p>Liên Hệ :</p>
				<ul>
					<li><i className="fa fa-facebook"></i> </li>
					<li><i className="fa fa-youtube"></i></li>
					<li><i className="fa fa-instagram"></i></li>
					<li><i className="fa fa-twitter"></i></li>
				</ul>
			</div>
		</div>
		<div className="footer-info">
			<ul>
				<li>Copyright @ 2020 Shoppet</li>
				<li>Terms of Use</li>
				<li>Privacy Policy</li>
				<li>Interest Based Ads</li>
				<li>Accessibility</li>
			</ul>
		</div>
	</div>
		);
	}
}

export default Footer