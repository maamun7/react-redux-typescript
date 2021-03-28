import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { injectIntl } from 'react-intl';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { loadRecipe, changeRecipeName } from './actions';
import searchReducer from './reducer';
import saga from './saga';
import './style.css';

const key = 'search';

const Search = () => {
	const dispatch = useDispatch();
	const [recipeName, setRecipeName] = useState('');
	const onChangeSearchKey = (evt: any) => {
		setRecipeName(evt.target.value);
	};

	const onSubmitSearch = (evt?: any) => {
		if (evt !== undefined && evt.preventDefault) {
			evt.preventDefault();
		}

		if (recipeName.trim().length < 3) {
			return;
		}

		console.log('Submit:', recipeName);
		// Submit form
		dispatch(loadRecipe());
	};

	useInjectReducer({ key: key, reducer: searchReducer });
	useInjectSaga({ key: key, saga: saga });

	useEffect(() => {
		if (recipeName && recipeName.trim().length >= 3) {
			dispatch(changeRecipeName(recipeName));
		}
	}, [recipeName, dispatch]);

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
