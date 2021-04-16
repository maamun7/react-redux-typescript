import * as React from 'react';
import RecipeListItem from '../../containers/RecipeListItem';
import ListItem from '../RecipeList/ListItem';
import List from './List/';

// export type RecipeListProps = Pick<ContainerState, 'loading' | 'error'> & Pick<RecipeData, 'recipes'>;

const RecipeList = ({ recipes, success, error }: { recipes: any; success: any; error: any }) => {
	if (error !== false) {
		const ErrorComponent = () => <ListItem item="Something went wrong, please try again!" />;

		return <List component={ErrorComponent} />;
	}

	if (recipes !== undefined && success) {
		if (recipes.length == 0) {
			const EmptyComponent = () => <ListItem item="No recipe found !" />;

			return <List component={EmptyComponent} />;
		}

		return <List items={recipes} component={RecipeListItem} />;
	} else {
		return null;
	}
};

export default RecipeList;
