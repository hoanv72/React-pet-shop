import React, { Component, Fragment } from 'react';
import HeaderBanner from './HeaderBanner';
import HeaderMenu from './HeaderMenu';
export class Header extends Component {
	render() {
		return (
		<Fragment>
			<div id="header"></div>
			<HeaderBanner />
			
			<HeaderMenu />
	</Fragment>
		);
	}
}

export default Header