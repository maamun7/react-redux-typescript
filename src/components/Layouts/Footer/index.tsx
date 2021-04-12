import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './style.css';

export const Footer: React.FC = () => {
	return (
		<footer>
			<div className="wrap">
				<div className="row">
					<div className="col-lg-6 clear-top-padding clear-bottom-padding">
						<p>&copy; All right reserved by maamun7</p>
					</div>
					<div className="col-lg-6 clear-top-padding clear-bottom-padding">
						<div className="social-menus">
							<a href="#">
								<i className="icon-style fas fa-arrow-up"></i>
							</a>
							<a href="#">
								<i className="icon-style fab fa-facebook-f"></i>
							</a>
							<a href="#">
								<i className="icon-style  fab fa-youtube"></i>
							</a>
							<a href="#">
								<i className="icon-style  fab fa-twitter"></i>
							</a>
							<a href="#">
								<i className="icon-style  fab fa-instagram"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
