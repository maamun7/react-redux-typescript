import * as React from 'react';
import RecipeListItem from '../../pages/RecipeListItem';
import { ContainerState, RecipeData } from '../../pages/App/types';
import List from './List/';

// export type RecipeListProps = Pick<ContainerState, 'loading' | 'error'> & Pick<RecipeData, 'recipes'>;

export default function RecipeList({ recipes }) {
	console.log('DEBUG : ', recipes);

	return <List component={RecipeListItem} />;
}
