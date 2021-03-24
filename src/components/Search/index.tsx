import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { injectIntl } from 'react-intl';
import './style.css';

const Search = () => {
	const [searchKey, setSearchKey] = useState(null);
	const onChangeSearchKey = (evt: any) => {
		setSearchKey(evt.target.value);
	};

	const onSubmitSearch = (evt?: any) => {
		if (evt !== undefined && evt.preventDefault) {
			evt.preventDefault();
		}

		if (!searchKey) {
			return;
		}

		// Submit form
	};

	useEffect(() => {
		if (searchKey && searchKey.trim().length >= 3) {
			console.log('Updated', searchKey);
			// onSubmitSearch();
		}
	}, [searchKey]);

	return (
		<form className="top-search" onSubmit={onSubmitSearch}>
			<span className="search-icon">
				<i className="fa fa-search"></i>
			</span>
			<input type="text" placeholder="Search.." name="search" onChange={onChangeSearchKey} />
			<button type="submit">
				<i className="fa fa-arrow-right"></i>
			</button>
		</form>
	);
};

export default injectIntl(Search);
