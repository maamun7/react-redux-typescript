import React from 'react';
import { hot } from 'react-hot-loader/root';
import { createStructuredSelector } from 'reselect';
import RecipeList from '../../components/RecipeList';
import { useDispatch, useSelector } from 'react-redux';
import { makeSelectRecipes } from '../App/selectors';

const stateSelector = createStructuredSelector({
	recipes: makeSelectRecipes()
});

export const Home: React.FC = () => {
	const { recipes } = useSelector(stateSelector);

	const recipeListProps = {
		recipes: recipes
	};

	// console.log('recipes : ', recipes);

	return (
		<div className="wrap">
			<RecipeList {...recipeListProps} />
		</div>
	);
};

export default hot(Home);
