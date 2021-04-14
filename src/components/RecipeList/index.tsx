import * as React from 'react';
import RecipeListItem from '../../pages/RecipeListItem';
import ListItem from '../RecipeList/ListItem';
import List from './List/';

// export type RecipeListProps = Pick<ContainerState, 'loading' | 'error'> & Pick<RecipeData, 'recipes'>;

const RecipeList = ({ recipes, error }: { recipes: any; error: any }) => {
	console.log('RecipeList : ', recipes);

	if (error !== false) {
		const ErrorComponent = () => <ListItem item="Something went wrong, please try again!" />;

		return <List component={ErrorComponent} />;
	}

	if (recipes !== undefined) {
		return <List items={recipes} component={RecipeListItem} />;
	}
};

export default RecipeList;
