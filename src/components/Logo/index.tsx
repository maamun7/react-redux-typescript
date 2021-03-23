import * as React from 'react';
import { injectIntl } from 'react-intl';
import './style.css';

const Logo = () => {
	return (
		<div className="logo-div">
			<a href="#">
				<i className="logo fas fa-code fa-2x"></i>
			</a>
		</div>
	);
};

export default injectIntl(Logo);
