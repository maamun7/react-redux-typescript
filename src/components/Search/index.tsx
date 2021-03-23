import * as React from 'react';
import { injectIntl } from 'react-intl';
import './style.css';

const Search = () => {
	return (
		<form className="top-search">
			<span className="search-icon">
				<i className="fa fa-search"></i>
			</span>
			<input type="text" placeholder="Search.." name="search" />
			<button type="submit">
				<i className="fa fa-arrow-right"></i>
			</button>
		</form>
	);
};

export default injectIntl(Search);
