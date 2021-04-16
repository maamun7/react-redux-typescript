import React, { lazy } from 'react';
import { FormattedMessage } from 'react-intl';
import LocaleSwitcher from '../../../containers/LocaleSwitcher';
import Search from '../../Search';
import Logo from '../../Logo';
import messages from './messages';
import './style.css';

// const Search = lazy(() => import('../../Search'));

export const Header: React.FC = () => {
	return (
		<header>
			{/* <FormattedMessage {...messages.name} /> */}
			<div className="wrap">
				<div className="row">
					<div className="col-lg-1 col-md-12">
						<Logo />
					</div>
					<div className="col-lg-11 col-md-12">
						<div className="top-search-wrapper">
							<Search />
							<LocaleSwitcher />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
