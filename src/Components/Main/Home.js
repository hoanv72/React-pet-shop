import React, { Component, Fragment } from 'react';

export class Home extends Component {
	render() {
		return (
			
	<Fragment>
	<div className="slider-banner">
		<div className="wrapper">
			<div className="slider-holder">
				<div id="slider-img-1"></div>
				<div id="slider-img-2"></div>
				<div id="slider-img-3"></div>
			</div>
		</div>
		<div className="button-holder">
			<a href="#slider-img-1" className="dots"></a>
			<a href="#slider-img-2" className="dots"></a>
			<a href="#slider-img-3" className="dots"></a>
		</div>
	</div>
	</Fragment>
		);
	}
}

export default Home