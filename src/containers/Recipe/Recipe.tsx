import React from 'react';
import { useSelector } from 'react-redux';
import { hot } from 'react-hot-loader/root';
import { createStructuredSelector } from 'reselect';
import { getSelectedSearchKey } from '@components/Search/selectors';
import { useInjectReducer } from '@utils/redux-injectors';
import RecipeList from '@components/RecipeList';
import { getRecipes, getRecipeSuccess, getRecipeError } from './selectors';
import recipeReducer from './reducer';

const stateSelector = createStructuredSelector({
	recipes: getRecipes(),
	searchKey: getSelectedSearchKey(),
	success: getRecipeSuccess(),
	error: getRecipeError()
});

export const Recipe: React.FC = () => {
	useInjectReducer({ key: 'recipe', reducer: recipeReducer });

	const { recipes, searchKey, success, error } = useSelector(stateSelector);

	const recipeListProps = {
		recipes: recipes,
		searchKey: searchKey,
		success: success,
		error: error
	};

	return (
		<div className="wrap">
			<RecipeList {...recipeListProps} />
		</div>
	);
};

export default hot(Recipe);
